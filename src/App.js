import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
