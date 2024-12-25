const loginForm = document.querySelector(".login-form");


loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    


    if ( !email || !password ) {
        return alert('All form fields must be filled in');
    }

    const userInfo = {
        email: email,
        password: password
    };
   
    console.log(userInfo);
    
    form.reset();
};


