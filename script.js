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