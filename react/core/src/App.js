import './App.css';
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/header'
import About from './components/About/About'
import History from './components/History/History'
import Project from './components/Project/Project'
import Research from './components/Research/Research'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ReactDOM from "react-dom/client";


function App() {
  return (
      <>
        <Header/>
        <Navbar/>
        <About/>
        <History/>
        <Project/>
        <Research/>
        <Contact/>
        <Footer/>
      </>
  );
}


export default App;
