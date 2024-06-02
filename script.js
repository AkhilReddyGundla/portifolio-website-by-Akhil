

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
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.form_submit-btn');
    submitButton.addEventListener('click',function(event){
        event.preventDefault();
        const userName = document.getElementById("name").value;
        const userDesignation = document.getElementById("designation").value;
        const userMessage = document.getElementById("message").value;
        if(userName === "" || userDesignation === "" || userMessage === ""){
            alert("Please check your details");
        }else{
            let parameters = {
                name : userName,
                designation : userDesignation,
                message : userMessage,
            };
            const serviceId = "service_9kwgobl";
            const templetId = "template_4blntos";
            emailjs.init("mo02Cwj35purVWKKt");//publick key
            emailjs
                .send(serviceId,templetId,parameters).then((res)=>{
                    document.getElementById("name").value="";
                    document.getElementById("designation").value="";
                    document.getElementById("message").value="";
                    alert("Your message sent successfully");
                })
                .catch((err) =>console.log(err));
        }
    })
});



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
      });
    });
  });

  document.addEventListener('DOMContentLoaded',()=>{
    const resume=document.querySelector('#resume');
    resume.addEventListener('click',(e)=>{
        window.open('documents/akhil.resume.cmr.pdf', '_blank');
    })
  })
  
  
