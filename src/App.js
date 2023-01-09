import logo from './logo.png';
import wall from './wall.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={wall} className="wall" alt="Wallpaper" />
        <div className='btnSet'>
          <button className='landBtn'>ᲩᲐᲜᲐᲬᲔᲠᲘᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
          <button className='landBtn'>ᲩᲐᲜᲐᲬᲔᲠᲔᲑᲘᲡ ᲡᲘᲐ</button>
        </div>
    </div>
  );
}

export default App;
