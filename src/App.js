import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card"
import Star from "./images/star.png"
import data from "./data";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App(){
  const cards = data.map(item => {
    return (
      <Card 
          img = {item.coverImg}
          star = {Star}
          rating = {item.stats.rating}
          reviewCount = {item.stats.reviewCount}
          country = {item.location}
          title = {item.title}
          price = {item.price}
      />
    )
  })
  return (
    <div>
      <Navbar />
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
