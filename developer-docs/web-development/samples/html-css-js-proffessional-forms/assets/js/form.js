const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expressions = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/ // 7 a 14 numeros.
}

const fields = {
    user: false,
    name: false,
    password: false,
    password2: false,
    email: false,
    phone: false
}

const validateForm = (e) => {
    // Validate form fields with regular expressions
    switch (e.target.id) {
        case 'user':
            validateField(expressions.user, e.target, 'user');
            break;
        case 'name':
            validateField(expressions.name, e.target, 'name');
            break;
        case 'password':
            validateField(expressions.password, e.target, 'password');
            break;
        case 'password2':
            validatePassword();
            break;
        case 'email':
            validateField(expressions.email, e.target, 'email');
            break;
        case 'phone':
            validateField(expressions.phone, e.target, 'phone');
            break;
        default:
            break;
    }
}

const validatePassword = () => {
    const inputPassword1 = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword1.value == inputPassword2.value){
        console.log('Passwords match');
        document.getElementById('group__password2').classList.remove('form__group-error');
        document.getElementById('group__password2').classList.add('form__group-correct');
        document.querySelector('#group__password2 i').classList.add('fa-check-circle');
        document.querySelector('#group__password2 i').classList.remove('fa-circle-xmark');
        document.querySelector('#group__password2 .form__input-error').classList.remove('form__input-error--active');
        fields['password'] = true;
        fields['password2'] = true;
    } else {
        console.log('Passwords do not match');
        document.getElementById('group__password2').classList.remove('form__group-correct');
        document.getElementById('group__password2').classList.add('form__group-error');
        document.querySelector('#group__password2 i').classList.remove('fa-check-circle');
        document.querySelector('#group__password2 i').classList.add('fa-circle-xmark');
        document.querySelector('#group__password2 .form__input-error').classList.add('form__input-error--active');
        fields['password'] = false;
        fields['password2'] = false;
    }
}

const validateField = (expresion, input, field) => {
	if(expresion.test(input.value)){
		document.getElementById(`group__${field}`).classList.remove('form__group-error');
		document.getElementById(`group__${field}`).classList.add('form__group-correct');
		document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#group__${field} i`).classList.remove('fa-circle-xmark');
		document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error--active');
		fields[field] = true;
	} else {
		document.getElementById(`group__${field}`).classList.add('form__group-error');
		document.getElementById(`group__${field}`).classList.remove('form__group-correct');
		document.querySelector(`#group__${field} i`).classList.add('fa-circle-xmark');
		document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error--active');
		fields[field] = false;
	}
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validateForm); 
    input.addEventListener('blur', validateForm);
})

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const terms = document.getElementById('terms');
    let valid = true;
    
    for (let field in fields) {
        if(fields[field] == false){
            valid = false;
        }
    }

    if(!terms.checked){
        valid = false;
    }

    if(valid){
        form.reset();
        document.getElementById('form__message-success').classList.add('form__message-success-active');
        setTimeout(() => {
            document.getElementById('form__message-success').classList.remove('form__message-success-active');
        }, 5000)
        document.querySelectorAll('.form__group-correct').forEach((icon) => {
            icon.classList.remove('form__group-correct');
        })
    } else  
    {
        document.getElementById('form__message').classList.add('form__message--active');
        setTimeout(() => {
            document.getElementById('form__message').classList.remove('form__message--active');
        }, 5000)
    }
});
