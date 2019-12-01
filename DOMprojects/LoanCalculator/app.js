//listen to submit
document.getElementById("loan-form").addEventListener("submit",
    function(e){
        //hide results
        document.getElementById("results").style.display = "none";
        //show loader
        document.getElementById("loading").style.display = "block";

        setTimeout(calculateResults, 2000);

        e.preventDefault();
    }
);


function calculateResults(){
    

    //UI variableas
    const amount = document.getElementById("amount");
    const interest = document.getElementById("interest");
    const years = document.getElementById("years");
    const monthlyPayment= document.getElementById("monthly-payment");
    const totalPayment= document.getElementById("total-payment");
    const totalInterest= document.getElementById("total-interest");

    const pricipal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value)/100/12;
    const calculatedPayments = parseFloat(years.value)*12;

    //compute monthly payment
    const x = Math.pow(1+calculatedInterest,calculatedPayments);
    const monthly = (pricipal*x* calculatedInterest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value= monthly.toFixed(2);
        totalPayment.value=(monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-pricipal).toFixed(2);

        //show results
        document.getElementById("results").style.display="block";
        //hide loader
        document.getElementById("loading").style.display= "none";
    }
    else{
        showError("Please enter valid values!");
    }


    //error message
    function showError(message){

        //hide loading
        document.getElementById("loading").style.display="none";
        //hide results
        document.getElementById("results").style.display="none";




        //create a div
        const errorDiv = document.createElement("div");
        //get elements
        const card = document.querySelector(".card");
        const heading = document.querySelector(".heading");


        //add className (bootstrap class)
        errorDiv.className = "alert alert-danger";

        //create text node and append
        errorDiv.appendChild(document.createTextNode(message));

        //insert error above heading
        //take the parent class and call insertBefore with two paramenters
        // the element to insert and the element before which to insert
        card.insertBefore(errorDiv,heading);

        //clear error
        setTimeout(clearError,1000);
    }

    function clearError(){
        document.querySelector(".alert").remove();
    }

    


    

}