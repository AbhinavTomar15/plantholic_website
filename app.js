mybutton = document.getElementById("myBtn");

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }

    // if (document.body.scrollTop > 500 && login.classList.toggle('active')) {
    //     mybutton.style.display = "none";
}


function topFunction() {
    // document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function openForm() {
    // var login = document.getElementById("myForm");
    // login.classList.toggle('active');
    // login.style.display = "block";

    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// let box = new gsap.timeline();

// box.from(".form-popup", {width:"0%", stagger: 0.4, duration: 1.5 });
// box.from(".form_title", {opacity: 0, y: -30 });
// box.from(".fields input", {opacity:0, stagger:0.3} );

// box.from(".form_footer", {opacity:0, y:20});

function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("x-button").style.display = "block";

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("x-button").style.display = "none";
}

// function expand() {
//     document.getElementById("expand").style.width = "400px";
// }

// const input = document.querySelector('input');
// const span = document.querySelector('span');

// input.addEventListener('input', function(event) {
//     span.innerHTML = this.value.replace(/\s/g, '&nbsp;');
//     this.style.width = span.offsetWidth + 'px';
// });