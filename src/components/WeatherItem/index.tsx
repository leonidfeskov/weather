import React, { useCallback } from 'react';
import './weather-item.css';
import { WeatherCardProps } from '../../types/types';

const WeatherItem: React.FunctionComponent<WeatherCardProps> = ({id, name, abbr, dayName, dayNumber, monthName, maxTemp, minTemp, selectDay}) => {
    const onClickHandler = useCallback(() => {
        selectDay && selectDay(id)
    }, [selectDay, id]);

    return (
        <li className={`weather-item weather-bg-${abbr}`} onClick={onClickHandler}>
            <div className="weather-item__date">
                <div>{dayName}</div>
                {`${dayNumber} ${monthName}`}
            </div>
            <div className="weather-item__temp">{`${maxTemp}° / ${minTemp}°`}</div>
            <div className="weather-item__icon">
                <img
                    className="weather-item__image"
                    src={`https://www.metaweather.com/static/img/weather/${abbr}.svg`}
                    alt={name}
                />
            </div>
        </li>
    );
};

export default WeatherItem;
