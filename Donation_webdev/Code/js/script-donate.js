/* Donation Webpage starts */ 

// Get data
    const nameInput = document.querySelector("#name");
    const email = document.querySelector("#email");
    const address = document.querySelector("#address");
    const city = document.querySelector("#city");
    const state = document.querySelector("#state");
    const pincode = document.querySelector("#pincode");
    const nameoncard = document.querySelector("#nameoncard");
    const creditcardnumber = document.querySelector("#creditcardnumber");
    const expmonth = document.querySelector("#expmonth");
    const expyear = document.querySelector("#expyear");
    const cvv = document.querySelector("#cvv");
    const amount = document.querySelector("#amount");
    const success = document.querySelector("#submit-success");
    const errorNodes = document.querySelectorAll(".error");

    // Validate data
    function validateDonation(){

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

        if(address.value.length < 1){
            errorNodes[2].innerText = "Please Enter Address";
            address.classList.add("error-border");
            errorFlag = true;
        }

        if(city.value.length < 1){
            errorNodes[3].innerText = "Please Enter City";
            city.classList.add("error-border");
            errorFlag = true;
        }

        if(state.value.length < 1){
            errorNodes[4].innerText = "Please Enter State";
            state.classList.add("error-border");
            errorFlag = true;
        }

        if(pincode.value.length < 6){
            errorNodes[5].innerText = "Please Enter Pin Code";
            pincode.classList.add("error-border");
            errorFlag = true;
        }

        if(nameoncard.value.length < 1){
            errorNodes[6].innerText = "Please Enter Correct Name";
            nameoncard.classList.add("error-border");
            errorFlag = true;
        }

        if(creditcardnumber.value.length < 15){
            errorNodes[7].innerText = "Please Enter Correct Number";
            creditcardnumber.classList.add("error-border");
            errorFlag = true;
        }

        if(expmonth.value.length < 1){
            errorNodes[8].innerText = "Please Enter Correct Month";
            expmonth.classList.add("error-border");
            errorFlag = true;
        }

        if(expyear.value.length < 3){
            errorNodes[9].innerText = "Please Enter Correct Year";
            expyear.classList.add("error-border");
            errorFlag = true;
        }

        if(cvv.value.length < 2){
            errorNodes[10].innerText = "Please Enter Correct CVV";
            cvv.classList.add("error-border");
            errorFlag = true;
        }

        if(amount.value.length < 1){
            errorNodes[11].innerText = "Insufficient Amount";
            amount.classList.add("error-border");
            errorFlag = true;
        }

        if(!errorFlag){
            success.innerText = "Success";
            donate_success();
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
        address.classList.remove("error-border");
        city.classList.remove("error-border");
        state.classList.remove("error-border");
        pincode.classList.remove("error-border");
        nameoncard.classList.remove("error-border");
        creditcardnumber.classList.remove("error-border");
        expmonth.classList.remove("error-border");
        expyear.classList.remove("error-border");
        cvv.classList.remove("error-border");
        amount.classList.remove("error-border");
    }

    // Check if email is valid
    function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/;
        return pattern.test(email);
    }

    // Success Donate
    function donate_success(){
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDonate) => {
            if (willDonate) {
                swal("Transaction Successful", {
                icon: "success",
            })
            .then((makeReceipt) => {
                if (makeReceipt) {
                    window.location="../Code/main.html";
                }
            })
            } 
            else {
                swal("Transaction Declined");
            }
        })
    };
/* Donation Webpage starts */ 