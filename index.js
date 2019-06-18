const wifiPassword = require('wifi-password');

console.log("Your Wifi password: ");

wifiPassword().then(password => { console.log(password); });