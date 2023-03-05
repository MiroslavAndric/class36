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


// const path = require("path");

// const testPath = "C:\Users\mixxx\Desktop\CODE Predavanja\29\cas29\class36\js\test.txt"

// const baseName = path.basename(testPath);
// console.log(baseName)

// const extension = path.extname(testPath)
// console.log(extension);

// const location = path.dirname(testPath);
// console.log(location);

// const pathInfo = path.parse(testPath);
// // console.log(pathInfo.);

// const os = require ("os");

// console.log(os.platform());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.arch());
// console.log(os.cpus())
// console.log(os.endianness())

const fs = require("fs");
fs.readFile("test.txt", "utf-8", (err, data) => {
    if(err) {
        throw err;
    }
    console.log('sadrzaj: ')
    console.log(data)
});

const sadrzaj = 'Neki novi sadrzaj koji ce se upisati';

fs.writeFile("test.txt", sadrzaj, () => {
    if(err){
        throw console.error;
    }
    console.log('ispisan je novi sadrzaj')
})
 