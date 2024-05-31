import logo from './logo.svg';
import './App.css';

function App() {

  const handleButtonClick = () => {
    console.log('点击了按钮！')
    window.location.href = 'xtransferapp://xtransferapp';
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleButtonClick}>通过Scheme打开APP，新的Scheme是xtransferapp!</button>
      </header>
    </div>
  );
}

export default App;
