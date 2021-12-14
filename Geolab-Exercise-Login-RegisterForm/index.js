const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});
function signUp(){
    const x = document.getElementById('signup');
    const storedUser = localStorage.getItem('email');
    
   const signUpName = x.elements.item(0).value;
   const signUpEmail = x.elements.item(1).value;
   const signUpPassword = x.elements.item(2).value;

    if(signUpEmail === storedUser){
        alert('Email is already registered')
    } else{
        const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const passRgx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if( emailRgx.test(String(signUpEmail)) && passRgx.test(String(signUpPassword))){
            localStorage.setItem('user', signUpName);
            localStorage.setItem('email', signUpEmail);
            localStorage.setItem('password', signUpPassword);
        }
    }
}

    

function signIn(){
    const x = document.getElementById('signin');

    const signInEmail = x.elements.item(0).value;
    const signInPassword = x.elements.item(1).value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if(signInEmail === storedEmail && signInPassword === storedPassword) {
        x.setAttribute('action', './user.html')
    }else{
        console.log('Error')
    }
}

function logout(){
    window.location.replace('./index.html');
}
function delStorage(){
    window.location.replace('./index.html');
    localStorage.clear();
}

 
