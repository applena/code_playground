'use strict';

const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

// for use with wikipedia

// axios.get('https://en.wikipedia.org/wiki/List_of_colors:_N%E2%80%93Z')
//   .then(results => {
//     const $ = cheerio.load(results.data);
//     const bigArray = $('tr').text().split('\n\n').splice(10);

//     console.log(bigArray)
//     let colorArray = [];

//     while (bigArray.length) {
//       const tempArray = bigArray.splice(0, 10);
//       colorArray.push(tempArray);
//     }

//     const JSONColorArry = JSON.stringify(colorArray);
//     console.log(typeof JSONColorArry)

//     fs.writeFile('./colorsNZ.json', JSONColorArry, err => {
//       if (err) {
//         console.error(err);
//       }
//       console.log('colors db written successfully')
//     });
//   })
//   .catch(error => console.error(error))

// for use with pantone

axios.get('http://www.novact.info/id40.html')
  .then(results => {
    const $ = cheerio.load(results.data);

    let bigArray = $('tr').text().split(',');
    // console.log(bigArray.length, bigArray)
    bigArray = bigArray.splice(1);
    bigArray = bigArray.filter(color => color.length > 3);
    bigArray = bigArray.map(color => color.replace(/^\d+/, ''));

    bigArray = bigArray.map(color => {
      const index = color.match(/([a-z])([A-Z]|\d)/) ? color.match(/([a-z])([A-Z]|\d)/).index : -1
      if (index === -1) return;

      let newColor = color.slice(0, index + 1) + ',#' + color.slice(index + 1);
      return newColor;
    })

    // console.log(bigArray)

    let colorArray = [];

    while (bigArray.length) {
      const tempArray = bigArray.splice(0, 1);
      colorArray.push(tempArray);
    }

    console.log(colorArray)


    const JSONColorArry = JSON.stringify(colorArray);
    // console.log(typeof JSONColorArry)

    fs.writeFile('./pantoneColors.json', JSONColorArry, err => {
      if (err) {
        console.error(err);
      }
      console.log('colors db written successfully')
    });
  })
  .catch(error => console.error(error))
