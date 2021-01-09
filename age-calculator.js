//log name w/ current year-DOB


const ageCalculator = function (name, yearOfBirth, currentYear){
  const age = currentYear - yearOfBirth;
  return( name + " is " + age + " years old.")

}

console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 2013, 2015));
console.log(ageCalculator("Ali", 2015, 2015));