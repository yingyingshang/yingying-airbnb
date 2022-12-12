import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import Meme from "./components/Meme";
import Contact from "./components/Contact";
import Counter from "./components/Counter";
import data from "./data";
import Box from "./components/Box"
import "./style.css";

import React from "react";
import Joke from "./components/Joke";
import jokesData from "./components/jokesData";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App(){

  const jokeElements = jokesData.map(joke =>{
    return (
      <Joke 
          key = {joke.id}
          setup = {joke.setup}
          punchline = {joke.punchline}
      />
    )
  })

  const cards = data.map(item => {
    return (
      <Card 
          key = {item.id}
          {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      {jokeElements}
      <Box />
      <Counter />
      <Contact />
      <Meme />
      <Hero />
      {cards}
    </div>
  );
}











// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Yingying Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
