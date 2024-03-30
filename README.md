# GPS Fahad

## Description
GPS Fahad is a Node.js library that leverages Puppeteer to interact with Google Maps and retrieve various data, primarily focusing on calculating distances between cities.

## Installation
To install GPS Fahad, you can use npm:

```bash
npm install gps-fahad

## Usage

### Node.js Application

To use GPS Fahad in your Node.js application:

1. Install the library via npm:

npm install gps-fahad

php
Copy code

2. Require the library in your application:

```javascript
const { getDistanceBetweenCities } = require('gps-fahad');
Call the getDistanceBetweenCities function with the origin and destination cities as arguments:

javascript
Copy code
const origin = "New York";
const destination = "Los Angeles";

try {
  const distance = await getDistanceBetweenCities(origin, destination);
  console.log("Distance:", distance);
} catch (error) {
  console.error("Error:", error);
}
Command Line Interface (CLI)
To use GPS Fahad from the command line interface:

Install the library globally via npm:

Copy code
npm install -g gps-fahad
Execute the library with the following command:

css
Copy code
gps-fahad [origin] [destination]
Replace [origin] and [destination] with the names of the cities between which you want to calculate the distance.

For example:

arduino
Copy code
gps-fahad "New York" "Los Angeles"
csharp
Copy code
Copy and paste this content into your README.md file under the "Usage" section.
