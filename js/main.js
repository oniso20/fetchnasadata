// Data from https://data.giss.nasa.gov/gistemp/

const xLabels = [];
const yTemps = [];

chartIt();


async function chartIt() {
    await getNasaData();
    const ctx = document.getElementById('chart').getContext('2d');
    
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: xLabels,
            datasets: [{
                label: 'Combined Land-Surface Air and Sea-Surface Water Temperature C° (Zonal annual means) ',
                data: yTemps,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: true,
                borderWidth: 1
            }]
        }
    });

}

async function getNasaData() {
  const response = await fetch('ZonAnn.Ts+dSST.csv');
  const data = await response.text();

  //.trim() to remove blank spaces
  //.split('\n') to seprate the data into a table format by rows
  //.slice(1) taking out the table heading
  const table = data.trim().split('\n').slice(1)
  table.forEach(row => {
    //.split(',') covert to an array by column
    const column = row.split(',');
    //Getting the column index 
    const temp = column[1];
    // Pushing the temp data to the y-axis
    //The global temperature mean is 14 degrees centigrate.. hence temp + 14 but temp must be parsed as a float not text using parseFloat()
    yTemps.push(parseFloat(temp) + 14) 
    const year = column[0];
    //Push year into the x axis label - xLabels
    xLabels.push(year);
    console.log(year, temp)
  })
}

// catchRainbow ()
// //Adding .then as a check if I got the data & .catch to check for error
//   .then(response => {
//     console.log('Working')
//   })

//   .catch(error => {
//     console.log(`error! ${error}`)
//   })

// async function catchRainbow() {
//   const response = await fetch('rainbow.jpg')
//   const blob = await response.blob()
//   document.getElementById('rainbow').src = URL.createObjectURL(blob)
// }