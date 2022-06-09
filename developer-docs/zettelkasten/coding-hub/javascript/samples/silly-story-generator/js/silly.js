/* 

* Generates a silly story when the "Generate random story" button is pressed.

* Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.

* Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.

* Will generate another random silly story if you press the button again (and again...) 

*/

const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

const state = {
    'name': false,
    'checkbox': 'us'
}

const silly = document.getElementById('silly');
const inputs = document.querySelectorAll('#silly input');
const sumbit = document.getElementById('generate-story');

const sillyGenerator = (state) => {
    let result = document.getElementById('silly__result');
    result.classList.remove('silly--disable');
};

const sillySumbit = (e) => {
    e.preventDefault();
    if(state['name'] == true){
        console.log('Form is valid. We are generating a new story that will be in screen.')
        
        let success = document.getElementById('form__success');
        success.classList.add('silly__message--active');

        setTimeout(() => {
            success.classList.remove('silly__message--active');
        }, 5000);
        
        setTimeout(()=>{
            sillyGenerator(state);
        },1500)
        
        silly.reset();
    } else {
        let error = document.getElementById('form__error');
        error.classList.add('silly__message--active');

        setTimeout(() => {
            error.classList.remove('silly__message--active');
        }, 5000);

        console.log('Form is not valid. Please complete correctly the fields and try again!');
    }
};

const validateForm = (e) => {
    if(e.target.name == 'convetion'){
        state['checkbox'] = e.target.id; 
    }

    switch (e.target.id){
        case 'name':
            validateField(expressions.name, e.target, 'name');
            break;
    }

    console.log(state);
}

const validateField = (expresion, input, field) => {
    if(expresion.test(input.value)){
        document.getElementById(`silly__${field}`).classList.remove('silly__group--error');
        state[field] = true;
    } 
    else {
        document.getElementById(`silly__${field}`).classList.add('silly__group--error');
        state[field] = false;
    }
}


sumbit.addEventListener('click', sillySumbit);
inputs.forEach((input) => {
    input.addEventListener('blur', validateForm);
    input.addEventListener('keyup', validateForm);
});