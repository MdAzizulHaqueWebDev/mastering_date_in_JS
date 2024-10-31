// const unixEpoch2 = new Date(0);
// console.log(unixEpoch2.toString());

// /// -    --------- unix time based method ------------
// const staticTime = new Date(-10000);
// console.log(staticTime.getDate());
// console.log(staticTime.toString());
// console.log(staticTime.toDateString());

const dob = "24/01/2006";

// Short Date Format (YYYY/MM/DD বা MM/DD/YYYY) accepted
const formatedDob = dob.split("/").reverse().join("/");
const dobDate = new Date(formatedDob);
const ages = Date.now() - dobDate;
console.log(new Date(ages) / 1000 / 60 / 60 / 24 / 365);

// iso format dob
const dob2 = "2006-02-24T01:01:01.005";
const dob2Date = new Date(dob2);

const dob2Ages = (Date.now() - dob2Date) / 1000 / 60 / 60 / 24 / 365;
console.log(dob2Ages);

console.log(new Date().toLocaleTimeString());
