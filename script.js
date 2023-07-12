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
    email.send({
        SecureToken : "0e1fd588-edac-4e07-a636-4ba0121944ca",
        To : "akhilreddygundla2@gmail.com",
        From : "akhilreddygundla@gmail.com",
        Subject : "New message",
        Body : body,
    }).then(
    message => alert(message)
    );
}




document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.resBox');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.id === "sem1") {
            // const pdfUrl = 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210101201653/PDF.pdf'; // Replace with the actual URL or path of your PDF file
            window.open('documents/sem1.pdf', '_blank');
        }
        else if (e.target.id === "sem2") {
            window.open('documents/sem2.pdf', '_blank');
        }
        else if (e.target.id === "sem3") {
            window.open('documents/sem3.pdf', '_blank');
        }
        else if (e.target.id === "sem4") {
            window.open('documents/sem4.pdf', '_blank');
        }
        else if (e.target.id === "sem5") {
            // window.open('documents/sem1.pdf', '_blank');
            alert('Uploding soon');
        }
        else if (e.target.id === "interRes") {
            window.open('documents/interRes.pdf', '_blank');
        }
        
        else if (e.target.id === "highSchoolRes") {
            window.open('documents/tenthRes.pdf', '_blank');
        }
        else if (e.target.id === "primarySchoolRes") {
            window.open('documents/primarySchoolCertificate.pdf', '_blank');
        }
        else if(e.target.id='resume'){
            window.open('documents/finalResumeCMV.pdf', '_blank');
        }
      });
    });
  });
  
  
