const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/flightBooking/runtime.js',
'./dist/flightBooking/polyfills.js',
// './dist/flightBooking/scripts.js',
'./dist/flightBooking/main.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/flight-hotel.js');
await fs.copyFile('./dist/flightBooking/styles.css', 'elements/styles.css')
await fs.copy('./dist/flightBooking/assets/', 'elements/assets/' )
})()