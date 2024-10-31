/**
 *
 *
 */
// format 1
// const currentDate = new Date(10,1,25)

// format 2
// const currentDate = new Date(10, -1, -25);

// format 3
// const currentDate = new Date("2024/10/20"); // ekane time na dileo automatically time niye nibe
// const currentDate2 = new Date("2024-10-20");

// format 4
// const currentDate = new Date("2024/10/20 10:10:10"); // the date format is not working correctly
// const currentDate2 = new Date("2024-10-20 10:10:10.050+06:00");

// concepts
const date = new Date();
console.log(date); // লোকাল টাইমজোনে বর্তমান তারিখ এবং সময় দেখায়
console.log(date.toISOString()); // UTC অনুযায়ী ISO ফরম্যাটে সময় দেখায়
