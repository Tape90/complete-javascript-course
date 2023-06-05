// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

function printForecast(incArray) {
  let textString = '...';

  for (let i = 0; i < incArray.length; i++) {
    const textForString = ` ${incArray[i]}°C in ${i + 1} days ...`;
    textString = textString + textForString;
  }
  return textString;
}

console.log(printForecast(testData2));
