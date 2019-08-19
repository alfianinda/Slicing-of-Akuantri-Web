// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

// export default App;

// =====================ATAU======================
// import React, {Component} from 'react';
// import HeaderTop from "./HeaderTop";
// import "./App.css"

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <HeaderTop />
//         <h1>Hello World!</h1>

//       </div>
//     );
//   }
// }

// export default App;
// =====================================================
import React, {Component} from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Content4 from "./components/Content4";
import Footer from "./components/Footer";

class App extends Component {
      render() {
        return (
          <div>
            <Header />
            <Hero />
            <Content />
            <Content2 />
            <Content3 />
            <Content4 />
            <Footer />
          </div>
        );
      }
    }
    
export default App;