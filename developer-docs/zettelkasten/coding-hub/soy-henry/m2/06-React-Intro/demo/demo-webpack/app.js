import React from "react";
import ReactDOM from "react-dom";

// import Musicos from './src/Musicos.jsx';
// import Saludo from './src/Saludo.jsx';
// import SaludoFuncional from './src/SaludoFuncional.jsx';

// const musicos = [
//   {
//     name: 'John',
//     lastname: 'Lennon',
//     band: 'The Beatles'
//   },
//   {
//     name: 'David',
//     lastname: 'Gilmour',
//     band: 'Pink Floyd'
//   },
//   {
//     name: 'Tom',
//     lastname: 'Yorke',
//     band: 'Radiohead'
//   }
// ];

// function App() {
//   return (
//     <div>
//       <Saludo nombre='Soy Henry' lang='en'/>
//       <SaludoFuncional nombre='Soy Henry' lang='es'/>
//       <Musicos musicos={musicos} />
//     </div>
//   )
// }

function Saludar({ name, emoji }) {
  return (
    <h1>
      Hola {emoji || "👋🏼"}, {name}
    </h1>
  );
}


class Saludos extends React.Component {
  render() {
    const { names } = this.props;
    return (
      <div>
        {names.map((name) => (
          <div key={name}>
            <Saludar name={name} />
          </div>
        ))}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      {/* <Saludar name="Cesar" emoji={"👩🏼‍🦱"} />
      <Saludar name="Manu"  emoji={"👋🏼"}/>
      <Saludar name="Sofi"  emoji={"👋🏼"}/> */}

      {/* <Saludos name={"cesar"} /> */}
      <Saludos names={["Cesar", "Andres", "Leo", "Sofi"]} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
