// date $ times
const now = new Date();

console.log(typeof(now));

// years, month, day, times
console.log("getFullYear: ", now.getFullYear());
console.log("getMonth: ", now.getMonth(), " position zero based");
console.log("getDate: ", now.getDate());
console.log("getDay: ", now.getDay());
console.log("getHours: ", now.getHours());
console.log("getMinutes: ", now.getMinutes());
console.log("getSeconds: ", now.getSeconds());

// timestamps
console.log("Timestamp: ", now.getTime(), " number of miliseconds since january 1970");
 
// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// timestamps extended

const before = new Date("February 1 2019 7:30:59");
const now2 = new Date();

console.log(now2.getTime(), before.getTime());

const diff = now2.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff/1000/60);
console.log("Past minutes since 2019: ", mins);
const hours = Math.round(mins / 60);
console.log("Past hours: since 2019", hours);
const days = Math.round(hours /24)
console.log("Past days since 2019", days);
const years = Math.round(days / 365);
console.log("Past years since 2019", years);

// converting timestamp into date object
const timestamp = 1679595942894;
console.log(new Date(timestamp));