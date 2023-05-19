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