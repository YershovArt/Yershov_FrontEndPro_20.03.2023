import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'; // Оновіть імпорт згідно вашої структури файлів
import WeatherComponent from './component//WeatherComponent'; // Додайте імпорт для вашого компонента
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <WeatherComponent /> 
  </Provider>,
  document.getElementById('root')
);