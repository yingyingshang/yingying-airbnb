import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import Swin from "./images/swim.png"
import Star from "./images/star.png"

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App(){
  return (
    <div>
      <Navbar />
      <Hero />
      <Card 
          img = {Swin}
          star = {Star}
          rating = "5.0"
          reviewCount = {6}
          country = "USA"
          title = "Life Lessons with Katie Zafers"
          price = {136}
      />
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
