// Data from https://data.giss.nasa.gov/gistemp/

getNasaData()

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
    const year = column[0];
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