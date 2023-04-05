let login= document.getElementById('signlink');
let loginPage = document.querySelector('.login');
let container = document.querySelector('.container');
let closeBtn = document.getElementById('closebtn');


login.addEventListener('click', ()=>{
    container.classList.add('overlay');
    loginPage.style.display = "block";
});

closeBtn.addEventListener('click', ()=>{
    container.classList.remove('overlay');
    console.log('I will never forget');
    loginPage.style.display= "none";
});