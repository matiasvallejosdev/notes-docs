// const weekDay = function() {
//     const names = ["Domingo", "Lunes", "Martes", "Miercoles",
//                    "Jueves", "Viernes", "Sabado"];
//     return {
//       name: function name(number) { return names[number]; },
//       number: function number(name) { return names.indexOf(name); }
//     };
//   }();
  
//   console.log(weekDay.name(weekDay.number("Lunes")));


function suma(a,b){
  return a+b;
}

// export default suma;

module.exports.suma = suma;



