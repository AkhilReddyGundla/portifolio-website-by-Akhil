document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('.nav-link');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active'); 
        });
    })
    toggleButton.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


function sendEmail(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let message = document.getElementById("message").value;
    let body="Name :" + name + "<br/>Email : "+ email + "<br/>Body : "+message;
    Email.send({
        SecureToken : "0e1fd588-edac-4e07-a636-4ba0121944ca",
        To : "akhilreddygundla2@gmail.com",
        From : "akhilreddygundla@gmail.com",
        Subject : "New message",
        Body : body,
    }).then(
    message => alert(message)
    );
}
