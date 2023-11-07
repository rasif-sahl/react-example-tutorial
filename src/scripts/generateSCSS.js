// src/generateSCSS.js
const fs = require('fs');

// Import JSON data
const colors = require('../../public/config.json');

// Transform JSON data to SCSS variables
const scssVariables = Object.entries(colors)
  .map(([key, value]) => `$${key}: ${value};`)
  .join('\n');

// Write SCSS variables to a SCSS file
fs.writeFileSync('./src/assets/common/colors.scss', scssVariables);