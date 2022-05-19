// Problem B
/*
Create a system to register students presents 
or ausents in the classroom.
Over 30 days, show the final situation of every kind
of student. (Total of presents and ausents)
You could have only 10% of ausents in 6 months. 
*/

function createStudent(id){
    let student = {
        id: Math.floor(Math.random() * (id+1) * 12.33),
        assitant: 0,
        state: 'A'
    };
    return student;
}

const createClass = (q) =>{
    for(let i = 0; i < q; i++){
        students.push(createStudent(i));
    }
}

const takeAssitant = (students) =>{
    students.forEach((st)=>{
        if(Math.random() < 0.5){
            st.assitant++;
        } else {
            if(st.assitant > 0){
                st.assitant--;
            }
        }
    });
}

const testClass = (students, days) =>{
    let percenter = (days * 10) / 100;
    console.log(percenter);
    students.forEach((st)=>{
        if(st.assitant >= 3) {
            st.state = 'A'
        } else {
            st.state = 'F'
        }; 
    });  
}

// Simulate classrooms
students = [];
let i = 0;
let q = 10;
createClass(q);
let days = 30;


while(i<days){
    takeAssitant(students);
    i++;
}
testClass(students, days);

console.log(students);