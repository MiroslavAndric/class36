// console.log(Math.max(1,2,3,4,5,6,100));
// console.log(Math.max(-1,-2,-3,-100));
// let niz1 = [1,2,3,4,5],
//     niz2 = [-1,-2,-3,-4,-5];
// console.log(Math.max(niz2));

// let max = niz1[0];
// niz1.forEach((el) => {
//     if(el > max) {
//         max = el;
//     }
// });
// console.log(max);
// console.log('----------------------');
// console.log(Math.max(...niz1));
// console.log(Math.max(...[1,2,3,4,5,6]));
// console.log(Math.max(...niz2));

// let niz3 = [true, 1,2, false, null, {}, 'string'];
// console.log(...niz3);

// function saberi (...brojevi) {
//     console.log(brojevi);
//     return brojevi.reduce((prev, curr) => {
//         return prev + curr;
//     }, 0);
// }

// console.log(saberi(1,2,10,29,20,193,310,21,2,3,-1));

// function izracunajProsek(...osobe) {
//     // console.log(osobe);
//     return Math.round(osobe.reduce((prev, curr) => {
//         return prev + curr.ocena;
//     }, 0) / osobe.length * 100) /100;
// }
// let osoba1 = {ime: 'ime1', ocena: 5.6}, osoba2 = {ime: 'ime2', ocena: 7.5}, osoba3 = {ime: 'ime3', ocena: 9.2};
// let prosek = izracunajProsek(osoba1,osoba2,osoba3);
// console.log(`Prosek je: ${prosek}`);

// function srediPromenljive(...srediNas) {
//     return srediNas.map((el) => el * 2);
// }
// function srediDrugiPut(...srediNas) {
//     return srediNas.map((el) => el + '0');
// }
// let odradjeno = srediPromenljive(1,2,3,4,5,6,7);
// let odradjeno2 = srediDrugiPut(...odradjeno);
// console.log(...odradjeno2);


// let niz1 = [1,2,3];
// let niz2 = [4,...niz1,5,6];
// console.log(niz2);
// let obj1 = {ime: 'Marko'};
// let obj2 = {
//     ime: 'Nenad',
//     ...obj1,
//     prezime: 'Markovic'
// };
// let obj3 = {ime: obj1.ime, prezime: obj2.prezime};
// console.log(obj2);
// console.log(obj3);

// class Osoba {
//     ime = '';
//     prezime = '';

//     constructor(ime, prezime) {
//         this.ime = ime;
//         this.prezime = prezime;
//     }
    
//     javiSe() {
//         return this.ime + ' ' + this.prezime;
//     }
// }
// let osoba1 = new Osoba('Marko', 'Markovic');
// console.log(osoba1);
// console.log(osoba1.javiSe());
// let osoba2 = {...osoba1};
// console.log(osoba2);
// console.log(osoba2.javiSe());

// let obj1 = {ime: 'Marko', prezime: 'Markovic'};
// let obj2 = {...obj1};
// obj2.ime = 'Nenad';
// console.log(obj2);
// console.log(obj1);

// let [prvoIme, drugoIme] = ['Ana', 'Marija', 'Marina'];
// console.log(prvoIme);
// console.log(drugoIme);

// let osoba = {
//     ime: 'Marko',
//     prezime: 'Markovic',
//     grad: 'Beograd',
//     br: 25
// };
// let {br: brojNeki, grad} = osoba;
// console.log(brojNeki);
// console.log(grad);

// let prom1 = 'Marko';
// let prom2 = 'Nenad';
// [prom1, prom2] = [prom2, prom1];
// console.log(prom1);
// console.log(prom2);


// async function dohvatiPost() {
//     let result = 'nesto';
//     let kakoHocu = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     let post = await kakoHocu.json();
//     result = post;
//     return result;
// }
// dohvatiPost().then((data) => {
//     console.log(data);
// });



fetch('data/navigation.json')
    .then(json => json.json())
    .then(data => {
        data.navigation.forEach((el) => {
            let liel = document.createElement('li');
            liel.classList = 'primary_element';
            liel.setAttribute('data-id', el.dataId);
            let pel = document.createElement('p');
            pel.innerHTML = el.title;
            liel.append(pel);
            let uel = document.createElement('ul');
            uel.classList = 'hidden';
            uel.id = el.dataId;

            el.elements.forEach(element => {
                let newEl= document.createElement ('li');
                newEl.innerHTML = element;
                uel.append(newEl);
            });
            liel.append(uel);
            document.querySelector('.primary_list').append(liel);
            let primary_elements = document.querySelectorAll('.primary_list .primary_element');
            primary_elements.forEach(function(el) {
            el.addEventListener('mouseenter', () => { 
                document.querySelector(`#${el.getAttribute('data-id')}`).classList.remove('hidden')
                console.log(el.getAttribute('data-id'))
        
                });
                el.addEventListener('mouseleave', () => {
                    document.querySelector(`#${el.getAttribute('data-id')}`).classList.add('hidden')
                })
            });
        
    });
});

