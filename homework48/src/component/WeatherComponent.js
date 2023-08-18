import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../redux/weatherSlice';
import '../App.css'
function WeatherComponent() {
  const dispatch = useDispatch();
  const { weatherData, loading, error } = useSelector(state => state.weather);

  useEffect(() => {
    dispatch(fetchWeather());
  }, [dispatch]);

  if (loading) {
    return <p>Завантаження...</p>;
  }

  if (error) {
    return <p>Помилка: {error}</p>;
  }

  if (!weatherData) {
    return null;
  }

  const data = weatherData[0]; // Припускаємо, що API повертає масив даних погоди

  return (
    <div className='container'>
      <h1>Погода у Дніпрі</h1>
      <p>Температура: {data.temperature}°C</p>
      <p>Тиск: {data.pressure}гПа</p>
      <p>Опис: {data.description}</p>
      <p>Вологість: {data.humidity}%</p>
      <p>Швидкість вітру: {data.windSpeed}м/с</p>
      <p>Напрямок вітру: {data.windDirection}°</p>
    </div>
  );
}

export default WeatherComponent;