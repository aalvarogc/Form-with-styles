expresiones=[
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // First name
    /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Last Name
    /^[0-9]{9}$/, // Phone
    /^([\w-\.]+@([\w-])+\.)+[\w-]{2,4}$/, // Email
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/ // Password
]

wrongPatternText = [
    "El nombre solo puede contener letras",
    "Los apellidos solo puede contener letras",
    "Ejemplo de teléfono: 654545454",
    "Ejemplo de email: email@email.com",
    "La contraseña debe incluir 1 minúscula, 1 mayúscula, 1 dígito y un carácter especial",
]

function checkExpr(e, expr, wrongText){
    expresion = new RegExp(expr)
    wrongTextDiv = document.getElementById("wrongPatternText");
    if(expresion.test(e.target.value) == false){
        e.target.style.border = "1px solid red";
        wrongTextDiv.innerHTML = wrongText;
        wrongTextDiv.style.opacity = "1";
    }else{
        e.target.style.border = "1px solid green";
        wrongTextDiv.style.opacity = "0";
    }
}

function checkPasswords(pass1, pass2){
    wrongTextDiv = document.getElementById("wrongPatternText");
    if(pass2.value == pass1.value){
        pass2.style.border = "1px solid green";
        wrongTextDiv.style.opacity = "0";
    }else{
        pass2.style.border = "1px solid red";
        wrongTextDiv.innerHTML = "Las contraseñas deben ser iguales";
        wrongTextDiv.style.opacity = "1";
    }
}

function checkInputs(){
    wrongTextDiv = document.getElementById("wrongPatternText");
    for(input of document.getElementsByClassName("mainInput")){
        if(input.value == ""){
            wrongTextDiv.innerHTML = "No puedes dejar campos vacíos.";
        }
    }
}

window.onload = ()=>{
    formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", (e)=>{e.preventDefault()});
    formulario.addEventListener("submit", checkInputs);
    inputs = document.querySelectorAll(".mainInput");
    for(let i=0; i < expresiones.length; i++){
        inputs[i].addEventListener("blur", (e)=>{checkExpr(e, expresiones[i], wrongPatternText[i])})
    }
    inputs[5].addEventListener("blur", ()=>{checkPasswords(inputs[4], inputs[5])})

}