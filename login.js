document.querySelector("#btn").addEventListener("click",(e)=>{
	e.preventDefault()
	
	let email=document.querySelector("#email").value
	let password=document.querySelector("#password").value
	let cpassword=document.querySelector("#cpassword").value
	let check=document.querySelector("#check").checked
	// console.log(fname)
	 if(email.length===0 || email=="" || email==null){
		document.querySelector("#err").innerHTML="Enter email"
		document.querySelector("#err").style.color="red"
	}
    else if (password.length===0) {
		document.querySelector("#err").innerHTML="Enter the password"
		document.querySelector("#err").style.color="red"
	}
	else if (cpassword.length===0) {
		document.querySelector("#err").innerHTML="Enter the confirm-password "
		document.querySelector("#err").style.color="red"
	}
	else if (cpassword != password) {
		document.querySelector("#err").innerHTML="check the password"
		document.querySelector("#err").style.color="red"
	}
	else if (check==false) {
		document.querySelector("#err").innerHTML="Remember Me"
		document.querySelector("#err").style.color="red"
	}

	else{
		document.querySelector("#err").innerHTML="Login successfully"
		document.querySelector("#err").style.color="green"
	}
})