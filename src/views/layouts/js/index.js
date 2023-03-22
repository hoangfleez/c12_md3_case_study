
    let pwEyeLogin = document.getElementById('eye');
    let inputPwLogin = document.getElementById('password');
    pwEyeLogin.onclick = () => {
    let typeInputPw = inputPwLogin.getAttribute('type');
    let typeNew = (typeInputPw === 'password') ? 'text' : 'password';
    inputPwLogin.setAttribute('type', typeNew);
    let classNameCurrent = pwEyeLogin.getAttribute('class');
    let newClassEye = (classNameCurrent === 'fa-solid fa-eye') ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    pwEyeLogin.setAttribute('class', newClassEye)
}

    let pwEyeRegister = document.getElementById('eye-register');
    let inputPwRegister = document.getElementById('passwordRegister');
    pwEyeRegister.onclick = () => {
    let typeInputPw = inputPwRegister.getAttribute('type');
    let typeNew = (typeInputPw === 'password') ? 'text' : 'password';
    inputPwRegister.setAttribute('type', typeNew);
    let classNameCurrent = pwEyeRegister.getAttribute('class');
    let newClassEye = (classNameCurrent === 'fa-solid fa-eye') ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
    pwEyeRegister.setAttribute('class', newClassEye)
}


