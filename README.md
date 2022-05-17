# Data Visualization Project

Visualizing tables of Global and Hemispheric Monthly Means and Zonal Annual Means of the GISS Surface Temperature Analysis ver. 4. The GISS temperature analysis scheme was defined in the late 1970s by James Hansen when a method of estimating global temperature change was needed for comparison with one-dimensional global climate models. You can read more here - https://data.giss.nasa.gov/gistemp/

This project visualizes the data.

**Link to project:** https://oniso20.github.io/globalwarmingNASAdata/

![alt tag](nasadata.png?raw=true 'Zonal annual means 1880 to Date')

## How It's Made:

**Tech used:** HTML, CSS, and JavaScript

HTML and CSS is used for the basic structure while the heavy lifting is parsed to JavaScript.

The site is build with the NASA data on the Zonal annual means, 1880-present, which is updated through most recent complete year. The data can bee found here - https://data.giss.nasa.gov/gistemp/ and it was downloaded locally as a csv.

The chartjs API is used to display the data on the DOM. You can read more here - https://www.chartjs.org/

## Lessons Learned:

It was a unique experience performing data wrangling operations using JavaScript basic .trim() to remove blank spaces, .split('\n') to seprate the data into a table format by rows and .slice() for slicing the table data. The chartjs API was also useful for determining how the data will be visualized.

## Useful resources:

Take a look at these couple examples that I have in my own portfolio:

**Chartjs:** https://www.chartjs.org/

**NASA Data:** https://data.giss.nasa.gov/gistemp/

**JS Array Methods:** https://javascript.info/array-methods
