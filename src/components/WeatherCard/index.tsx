import React from 'react';
import './weather-card.css';
import { WeatherCardProps } from '../../types/types';

const WeatherCard: React.FunctionComponent<WeatherCardProps> = ({name, abbr, dayName, dayNumber, monthName, maxTemp, minTemp}) => (
    <div className={`weather-card weather-bg-${abbr}`}>
        <div className="weather-card__icon">
            <img
                className="weather-card__image"
                src={`https://www.metaweather.com/static/img/weather/${abbr}.svg`}
                alt={name}
            />
        </div>
        <div className="weather-card__temp">{`${maxTemp}° / ${minTemp}°`}</div>
        <div className="weather-card__date">
            <div>{dayName}</div>
            {`${dayNumber} ${monthName}`}
        </div>
    </div>
);

export default WeatherCard;
