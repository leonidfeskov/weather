import React, {useEffect, useState, useMemo} from 'react';
import axios from 'axios';
import './App.css';

import Filters from './components/Filters';
import WeatherList from './components/WeatherList';
import WeatherCard from './components/WeatherCard';
import convertWeather from './utils/convertWeatherData';
import { WeatherCardProps } from './types/types';

const MOSCOW_WOEID = 2122265;
const PROXY = 'https://cors-anywhere.herokuapp.com/';

const App: React.FunctionComponent = () => {
    const [weather, setWeather] = useState();
    const [selectedDayId, setSelectedDayId] = useState();

    useEffect(() => {
        axios.get(`${PROXY}https://www.metaweather.com/api/location/${MOSCOW_WOEID}/`)
            .then(({data}) => {
                const {consolidated_weather} = data;
                setWeather(convertWeather(consolidated_weather));
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    let selectedDay = useMemo(() => {
        if (!selectedDayId) {
            return weather && weather[0];
        }
        return weather.find((day: WeatherCardProps) => day.id === selectedDayId);
    }, [weather, selectedDayId]);

    return (
        <div className="app">
            <Filters selectDay={setSelectedDayId} selectedDay={selectedDayId} todayId={weather && weather[0].id}/>
            <div className="content">
                {selectedDayId ? (
                    <WeatherCard {...selectedDay} />
                ) : (
                    <WeatherList weather={weather} selectDay={setSelectedDayId}/>
                )}
            </div>
        </div>
    );
};

export default App;
