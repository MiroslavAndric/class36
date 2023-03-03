// const poruka = "Zdravo"
// console.log(poruka)
// i = 0;
// setInterval(() => {
//     console.log(i +3)
// // }, 100);
// const  x = process.argv[2];
// const poruka = `Ono sto sam otkucap je ${x}`
// console.log(poruka)
// let http = require("http");
// console.log(http)


const path = require("path");

const testPath = "C:\Users\mixxx\Desktop\CODE Predavanja\29\cas29\class36\js\test.txt"

const baseName = path.basename(testPath);
console.log(baseName)

const extension = path.extname(testPath)
console.log(extension);

const location = path.dirname(testPath);
console.log(location);

const pathInfo = path.parse(testPath);
console.log(pathInfo.);