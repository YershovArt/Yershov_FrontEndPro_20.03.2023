import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  weatherData: null,
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetchWeatherStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchWeatherSuccess: (state, action) => {
      state.weatherData = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchWeatherFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} = weatherSlice.actions;

export const fetchWeather = () => async dispatch => {
  dispatch(fetchWeatherStart());
  try {
    const response = await axios.get('https://64de4020825d19d9bfb25ba1.mockapi.io/api/v1/weather');
    dispatch(fetchWeatherSuccess(response.data));
  } catch (error) {
    dispatch(fetchWeatherFailure(error.message));
  }
};

export default weatherSlice.reducer;