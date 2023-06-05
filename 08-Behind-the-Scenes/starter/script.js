'use strict';

var birthYear = 1990;

const jens = {
  //birthYear: 1990,
  // toString: function () {
  //   console.log('I overwrite it')
  // },
  age: () => {
    //console.log(this)
    console.log(2023 - this.birthYear);
  }
}

jens.age();
console.log(jens);