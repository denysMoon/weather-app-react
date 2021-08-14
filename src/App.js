import './App.css';
import Display from './components/Display/Display';

console.log(process.env.REACT_APP_WEATHER_API_KEY)

function App() {
  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
