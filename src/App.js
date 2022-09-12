// import logo from "./logo.svg";
import "./App.css";
import List from "./components/list/list";
import Product from './components/product'
import TestC from './components/testC'

function App() {
  return (
    <div className="App">
      <Product date={Date.now()} author={{ name: "abdo hesham", user: {name:'abdo author',avatarUrl:'https://nretnil.com/avatar/LawrenceEzekielAmos.png'} }} />

      <TestC />

      <List />
    </div>
  );
}

export default App;
