import { useEffect, useState } from 'react';
import './App.css';
import Display from './components/Display/Display';
import Form from './components/Form/Form';

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

      // await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${KEY_CURRENT}`)
      // .then(res=>res.json())
      // .then(res=>setCurrentWeather(res))
    }

    getCurrentWeather()
  },[latitude, longitude])

  console.log(currentWeather.cod)

  return (
    <div className="App">
      <Form />
    {
      currentWeather.cod === 200 ? (
        <Display currentWeather={currentWeather} />
      ) : (
        'Nothing'
      )
    }

    <Display currentWeather={currentWeather} />
  
    </div>
  );
}

export default App;
