import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import FadeIn from './components/Main/FadeIn/FadeIn';

function App() {
  return (
    <div> 
      <Header />
      <Main />
      
    </div>
  );
}

export default App;
