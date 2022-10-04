window.onload = pageLoad;


function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
    var password_pass = document.forms["myForm"]["password"].value;
    var password_re = document.forms["myForm"]["repassword"].value;
   

    if(password_pass != password_re) {
        document.getElementById("errormsg").innerHTML ="Wrong password, Check password again.";
        return false;
    }
    else 
    { 
        alert("Your Register is Success");
    }
 
}