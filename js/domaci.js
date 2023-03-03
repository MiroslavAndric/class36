// // // // window.addEventListener('DOMContentLoaded' , function () {
// // //     document.querySelector('#get_post_btn').addEventListener('click', function() {
// // //         let vrednost = Math.floor(Number(document.querySelector('#post_input').value));
// // //         if (!vrednost || vrednost < 0) {
// // //             return;
// // //         }
// // //         fetch(`https://jsonplaceholder.typicode.com/posts/${vrednost}`)
// // //             .then((json) => {
// // //                 if (!json.ok) {
// // //                     throw new Error(json.status);
// // //                 }
// // //                 return json.json();
// // //             })
// // //             .then((data) => {
// // //                 document.querySelector('#post_text').innerHTML = data.body;
// // //             })
// // //             .catch((err) => {
// // //                 alert('Ne postoji post sa trazenim id-jem ' + vrednost);
// // //             });
// // //     });
    
// // //     document.querySelector('#dohvati_korisnike').addEventListener('click', function() {
// // //         fetch(`https://jsonplaceholder.typicode.com/users`)
// // //             .then((json) => {
// // //                 if (!json.ok) {
// // //                     throw new Error(json.status);
// // //                 }
// // //                 return json.json();
// // //             })
// // //             .then((data) => {
// // //                 data.forEach((el) => {
// // //                     let clan = document.createElement('li');
// // //                     clan.innerHTML = el.name + `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span data-id="${el.id}">POSTOVI</span>`;
// // //                     document.querySelector('#korisnici').append(clan);
// // //                 });
// // //                 getPostsByUser();
// // //             })
// // //             .catch((err) => {
// // //                 alert('Ne postoje korisnici');
// // //             });
// // //     });
    
// // //     function getPostsByUser() {
// // //         document.querySelectorAll('#korisnici span').forEach((el) => {
// // //             el.addEventListener('click', function() {
// // //                 let userId = el.getAttribute('data-id');
// // //                 fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
// // //                     .then((json) => json.json())
// // //                     .then((data) => {
// // //                         let postovi = document.querySelector('#postovi');
// // //                         if (!postovi.innerHTML) {
// // //                             data.forEach((el) => {
// // //                                 let newPost = document.createElement('li');
// // //                                 newPost.innerHTML = el.title;
// // //                                 postovi.append(newPost);
// // //                             });
// // //                         } else {
// // //                             postovi.classList.toggle('invisible');
// // //                             setTimeout(() => {
// // //                                 deleteMe(postovi);
// // //                                 data.forEach((el) => {
// // //                                     let newPost = document.createElement('li');
// // //                                     newPost.innerHTML = el.title;
// // //                                     postovi.append(newPost);
// // //                                 });
// // //                                 postovi.classList.toggle('invisible');
// // //                             }, 2100);
// // //                         }
// // //                     });
// // //             });
// // //         });
// // //     }
    
// // //     function deleteMe(element) {
// // //         element.innerHTML = '';
// // //     }
    
// // //     document.querySelector('#nekitekst').addEventListener('click', function() {
// // //         deleteMe(document.querySelector('#nekitekst'));
// // //         let span = document.createElement('span');
// // //         span.innerHTML = '456';
// // //         document.querySelector('#nekitekst').append(span);
// // //     });
// // // // });

// document.addEventListener('DOMContentLoaded', function() {
//     let id = sessionStorage.getItem('korisnik');
// if(id) {
//     get_user(id);
// }
// document.querySelector('#forma').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let id = document.querySelector('#dodaj').value;
//     if(id) {
//     get_user(id);

//     }else{
//         alert('Morate uneti neki id')
//     };
// });
// function delete_user (divEl) {
//     function deleting() {
//             sessionStorage.removeItem('korisnik');
//             document.querySelector('.o_korisniku').removeChild(divEl);
//             document.querySelector('.citaj_podatke').classList.remove('nevidljiv');
//             document.querySelector('.o_korisniku').classList.add('nevidljiv');
//             document.querySelector('#back').removeEventListener('click', deleting );
//     }
   
        
//         document.querySelector('#back').addEventListener('click', deleting);
// };
// function get_user (id) {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//         .then((json) => {
//             if(!json.ok) {
//                 throw new Error (json.status);
//             }
//             return json.json();
//         })
//         .then((data) => {
//             sessionStorage.setItem('korisnik', id);
//             document.querySelector('.citaj_podatke').classList.add('nevidljiv');
//             document.querySelector('.o_korisniku').classList.remove('nevidljiv');
//             let divEl = document.createElement('div');
//             divEl.id = 'korisnik';
//             divEl.innerHTML = `<h1>Name: ${data.name}</h1><h2>Mobile phone: ${data.phone}</h2><h2>Website: ${data.website}</h2><h2>Adress: ${data.address.street} ${data.address.suite}</h2><h2>Company name: ${data.company.name}</h2>`
//             document.querySelector('.o_korisniku').append(divEl);
//             delete_user(divEl);
//         })
//         .catch((err) => {
//             alert (err)
//         })
// };
// });
  

// let el = document.createElement('div');
// document.body.(el)