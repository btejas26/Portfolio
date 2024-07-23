let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let anims = [...document.querySelectorAll("[anim]")];
console.log(anims);
let click = (el, cb) => el.addEventListener("click", cb);
let toggle = (el) => el.classList.toggle("toggled");
let clickTog = (el) => click(el, () => toggle(el));
anims.map(clickTog);

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("mess");
function sendEmail(){
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`
    
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "rdtejasb@gmail.com",
    Password : "EAD9C0D7341BCA04493967FADD2065886E6B",
    To : 'rdtejasb@gmail.com',
    From : "rdtejasb@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
}).then(
  message => {
    if(message == "OK") {
        Swal.fire({
            title: "Thanks for Connecting!",
            text: "Will Connect back soon!",
            icon: "success"
        });
    }
  }
);
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
    return false;
})