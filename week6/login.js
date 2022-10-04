window.onload = loginLoad;

function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}
 
function checkLogin(){
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย

    const queryString = window.location.search;
        console.log(queryString);

        const urlParams = new URLSearchParams(queryString);
        const username = urlParams.get('username');
        console.log(username);

        const password = urlParams.get('password');
        console.log(password);
  

    var inputUsername = document.forms["myLogin"]["username"];
    var inputPassword = document.forms["myLogin"]["password"];
    
        if(inputUsername.value == username  && inputPassword.value == password){
            alert("Log in success");
        }
        else{
            alert("Something wrong please check it");
            return false;
        }

    
      

}

			