import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from './components/FormPage';
import Test from './components/test';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
