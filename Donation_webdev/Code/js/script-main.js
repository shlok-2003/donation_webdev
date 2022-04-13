/* Main Webpage starts */

/*Share section starts */
// https://api.whatsapp.com/send?text=[post-title] [post-url]
const whatsappBtn = document.querySelector(".whatsapp-btn");

function init(){
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone!, please check thi out: ");

    whatsappBtn.setAttribute("href",
    `https://api.whatsapp.com/send?text=${postTitle} ${postUrl}`);
}

init();
/*Share section ends */
/* Contact Us section starts */
    //Get data
    const nameInput = document.querySelector("#name");
    const email = document.querySelector("#email");
    const number = document.querySelector("#number");
    const message = document.querySelector("#message");
    const success = document.querySelector("#submit-success");
    const errorNodes = document.querySelectorAll(".error");

    //Validate data
    function validateForm(){
        
        clearMessage();
        let errorFlag = false;

        if(nameInput.value.length < 1){
            errorNodes[0].innerText = "Name cannot be blank";
            nameInput.classList.add("error-border");
            errorFlag = true;
        }

        if(!emailIsValid(email.value)){
            errorNodes[1].innerText = "Invalid email address";
            email.classList.add("error-border");
            errorFlag = true;
        }
        
        if(!mobileIsValid(number.value)){
            errorNodes[2].innerText = "Invalid mobile number";
            number.classList.add("error-border");
            errorFlag = true;
        }

        if(message.value.length < 1){
            errorNodes[3].innerText = "Please Enter Message";
            message.classList.add("error-border");
            errorFlag = true;
        }

        if(!errorFlag){
            success.innerText = "Success";
            sendEmail();
        }    
    }

    //Clear error / success messages
    function clearMessage(){
        for(let i=0;i < errorNodes.length; i++){
            errorNodes[i].innerText = ""
        }
        success.innerText = "";
        nameInput.classList.remove("error-border");
        email.classList.remove("error-border");
        number.classList.remove("error-border");
        message.classList.remove("error-border");
    }

    // Check if email is valid
    function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
    }

    // Send data to  email
    function sendEmail(){
        Email.send({
            Host : "smtp.yourisp.com",
            Username : "username",
            Password : "password",
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "ANNNA DAAN Contact Us",
            Body : "And this is the body"
        }).then(
        message => alert(message)
        );
    }

    // Check if mobile number is valid
    function mobileIsValid(number){
        let regex = /^[7-9]\d{9}$/;
        return regex.test(number);
    }
/* Contact Us section ends */

/* Main Webpage ends */
