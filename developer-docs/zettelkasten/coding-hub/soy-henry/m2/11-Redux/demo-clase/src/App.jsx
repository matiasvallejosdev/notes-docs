import { useState } from "react";
import { Layout } from "antd";
import Counter from "./components/Counter";
import Header from "./components/Header"

function App() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter((prev) => prev + 1);
  } 
  function decrement() {
    setCounter((prev) => prev - 1);
  }

  return (
    <Layout>
      <Layout.Header>
        <Header />
      </Layout.Header>
      <Layout.Content style={{ heigth: "100%", minHeight: "100vh" }}>
        <Counter
          counter={counter}
          increment={increment}
          decrement={decrement}
        />
      </Layout.Content>
    </Layout>
  );
}

export default App;
