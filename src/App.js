import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display/Display';

const KEY_CURRENT = process.env.REACT_APP_API_KEY

function App() {
  const [currentWeather, setCurrentWeather] = useState([])

  const [latitude, setLatitude] = useState([])
  const [longitude, setLongitude] = useState([])

  useEffect(()=>{
    const getCurrentWeather = async () =>{
      navigator.geolocation.getCurrentPosition(position=>{
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      })

      await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY_CURRENT}`)
      .then(res=>res.json())
      .then(res=>setCurrentWeather(res))
    }

    getCurrentWeather()
  },[latitude, longitude])

  console.log(currentWeather)

  return (
    <div className="App">
      <Display />
    </div>
  );
}

export default App;
