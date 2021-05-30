// VARIABLES
const storage = localStorage;

document.querySelector("#bag > h6").innerHTML = storage.length;

document.querySelector("#burger").addEventListener('click', () => {
    document.querySelector(".menu").classList.toggle("opened");
    document.querySelector("#burger").classList.toggle("open");
});

document.querySelector("#bag").addEventListener('mouseenter', () => {
    document.querySelector("#bag > img").src = "views/img/icons/bag_black.png";
    document.querySelector("#bag > h6").innerHTML = storage.length;
});

document.querySelector("#bag").addEventListener('mouseleave', () => {
    document.querySelector("#bag > img").src = "views/img/icons/bag_white.png";
    document.querySelector("#bag > h6").innerHTML = storage.length;
});

document.querySelector("footer form").addEventListener('submit', event => {
    const name = document.querySelector( "footer form > input[name='name']" ).value;
    const email = document.querySelector( "footer form > input[name='mail']" ).value;
    document.querySelector( "footer form > input[name='name']" ).value = ""
    document.querySelector( "footer form > input[name='mail']" ).value = ""

    event.preventDefault();

    console.log("name : " + name + "\nemail : " + email)
})


