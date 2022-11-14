



    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const birthDate = document.getElementById("birthDate");
    const gender = document.getElementById("gender");
    const fullName = document.getElementById("name");
    const pBirthDate = document.getElementById("ch-birthDate");
    const pGender = document.getElementById("ch-gender");
    const mars =`./mars.png`
    const venus = `./weibliche-geschlecht.png`
    let gImg = document.createElement("img");

    firstName.addEventListener("input",function(){
        fullName.innerHTML = `${firstName.value}`;

    });
    lastName.addEventListener("input",function(){
        fullName.innerHTML = `${firstName.value} ${lastName.value}`;

    });
       birthDate.addEventListener("input",function(){
        pBirthDate.innerHTML = birthDate.value;

    });
       gender.addEventListener("input",function(){
        pGender.innerHTML = gender.value;
        if(gender.value === "male"){
            gImg.src = mars;
            gImg.style.width = "50px";
            pGender.insertAdjacentElement("beforebegin",gImg);
        }else if(gender.value === "female"){
            gImg.src = venus;
            gImg.style.width = "50px";
            pGender.insertAdjacentElement("beforebegin",gImg);

        }
       
        

    }); 
     
