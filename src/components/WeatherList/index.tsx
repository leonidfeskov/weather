import React from 'react';
import './weather-list.css';

import WeatherItem from '../WeatherItem';
import { WeatherCardProps } from '../../types/types';

interface WeatherListProps {
    weather: WeatherCardProps[],
    selectDay: (id: number) => void,
}

const WeatherList: React.FunctionComponent<WeatherListProps> = ({weather, selectDay}) => {
    if (!weather) {
        return <div className="weather-list-loading">Loading...</div>;
    }
    return (
        <ul className="weather-list">
            {weather.map((day: WeatherCardProps) => <WeatherItem {...day} key={day.id} selectDay={selectDay}/>)}
        </ul>
    );
};

export default WeatherList;
