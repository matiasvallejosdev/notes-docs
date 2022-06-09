/*

* Generates a silly story when the "Generate random story" button is pressed.

* Replaces the default name "Bob" in the story with a custom name, only if a custom name is entered into the "Enter custom name" text field before the generate button is pressed.

* Converts the default US weight and temperature quantities and units in the story into UK equivalents if the UK radio button is checked before the generate button is pressed.

* Will generate another random silly story if you press the button again (and again...)

*/

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
const mainName = 'Bob'

const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
}

const state = {
    'name': false,
    'checkbox': 'us',
    'lastName': '',
    'lastStory': null
}

const silly = document.getElementById('silly');
const inputs = document.querySelectorAll('#silly input');
const sumbit = document.getElementById('generate-story');
const action = document.getElementById('action');


const sillyGenerator = (state, name, temp) => {
    let result = document.getElementById('silly__result');
    let story = storyText;

    story = changeStory(story, 'x', insertX, temp);
    story = changeStory(story, 'y', insertY, temp);
    story = changeStory(story, 'z', insertZ, temp);
    story = story.replaceAll(mainName, name);

    state['lastName'] = name;
    state['lastStory'] = story;
    result.innerHTML = story;
    
    result.classList.remove('silly--disable');
};

changeStory = (story, letter, array, temp) => {
    let random = Math.floor(Math.random()* array.length);
    let insert = `:insert${letter.toLowerCase()}:`;
    let newStory = story.replaceAll(insert, array[random]);
    if (temp == 'uk') {
        const weight = `${Math.round(300*0.0714286)} stone`;
        const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }
    return newStory;
}


const sillySumbit = (e) => {
    e.preventDefault();
    if(state['name'] == true){
        console.log('Form is valid. We are generating a new story that will be in screen.')

        let success = document.getElementById('form__success');
        success.classList.add('silly__message--active');

        setTimeout(() => {
            success.classList.remove('silly__message--active');
        }, 5000);

        if(document.getElementById('uk').checked == true) {
            validateCheckbox('uk');
        } else {
            validateCheckbox('us');
        }
        sillyGenerator(state, state['lastName'], state['checkbox']);
        
        action.classList.remove('silly--disable');
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
    switch (e.target.id){
        case 'name':
            validateField(expressions.name, e.target, 'name');
            break;
    }
}

const validateCheckbox = (id) =>{
    state['checkbox'] = id;
}

const validateField = (expresion, input, field) => {
    if(expresion.test(input.value)){
        document.getElementById(`silly__${field}`).classList.remove('silly__group--error');        
        state[field] = true;
        state['lastName'] = input.value;
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