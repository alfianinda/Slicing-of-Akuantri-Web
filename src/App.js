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