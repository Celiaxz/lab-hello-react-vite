import "./App.css";
import menuTopXs from "./assets/menu-top-xs.png";
import ironhackLogoXs from "./assets/ironhack-logo-xs.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon4 from "./assets/icon4.png";

function App() {
  return (
    <div className="App">
      <div className="upper">
        <div className="nav-bar">
          <img src={ironhackLogoXs} className="logo" alt="Vite logo" />
          <img src={menuTopXs} className="menu" alt="Vite logo" />
        </div>
        <div className="section">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer
          </p>
          <button type="submit">Awesome!</button>
        </div>
      </div>
      <div className="lower">
        <div className="declarative">
          <img src={icon1} className="icon1" alt="Vite logo" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="component">
          <img src={icon2} className="icon2" alt="Vite logo" />
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state</p>
        </div>
        <div className="single-way">
          <img src={icon3} className="icon3" alt="Vite logo" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div className="jsx">
          <img src={icon4} className="icon4" alt="Vite logo" />
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
