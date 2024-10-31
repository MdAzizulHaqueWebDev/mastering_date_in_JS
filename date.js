/**
 *
 *
 */

const dateInstance = new Date();

// console.log(typeof dateInstance, "\n", dateInstance);

// console.log(Date.prototype);
console.log(dateInstance);

console.log(dateInstance.getFullYear());
console.log(dateInstance.getUTCFullYear());

console.log(dateInstance.getMonth()); // month start with 0 = january
console.log(dateInstance.getUTCMonth());

console.log(dateInstance.getDate());
console.log(dateInstance.getUTCDate());

console.log(dateInstance.getDay());
console.log(dateInstance.getUTCDay());
// for .getDay() =>  index of day like : saturday = 1 , sunday = 2 : its depend on coutry where start week first day of week

console.log(dateInstance.getHours());
console.log(dateInstance.getUTCHours());

console.log(dateInstance.getMinutes());
console.log(dateInstance.getUTCMinutes());

console.log(dateInstance.getSeconds());
console.log(dateInstance.getUTCSeconds());

console.log(dateInstance.getMilliseconds()); // get current times mili second
console.log(dateInstance.getUTCMilliseconds());

console.log(dateInstance.getTimezoneOffset() / 60);

// ----------- Date Formatiing Method ------------
console.log(dateInstance);
console.log(dateInstance.toString());
console.log(dateInstance.toLocaleString("en-gb", { hour12: true }));
console.log(dateInstance.toLocaleDateString("bn"));
// ISO (International Standardization for Organization) format
console.log(
	dateInstance.toISOString(),
	// By default UTC time and of course ISO format
);
console.log(dateInstance.toJSON());
console.log(dateInstance.toUTCString());

// --------- Miliseconds Time / Unix time ---------
console.log(dateInstance.getTime() / 1000 / 60 / 60 / 24 / 365, "Years"); //

console.log(dateInstance.getTime()); //
console.log(Date.now()); // same as .getTime() method

// --------- Unix Time Conversion
const unixEpoch = new Date(0);
console.log(unixEpoch.toString());
