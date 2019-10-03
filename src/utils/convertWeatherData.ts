enum DayName {
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
}

enum MonthName {
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
}

const convertWeather = (weatherList: Array<any>) => {
    return weatherList.map(({id, weather_state_abbr, weather_state_name, applicable_date, max_temp, min_temp}) => {
        const date: Date = new Date(applicable_date);
        const dayName: string = DayName[date.getDay()];
        const dayNumber: number = date.getDate();
        const monthName: string = MonthName[date.getMonth()];

        return {
            id,
            name: weather_state_name,
            abbr: weather_state_abbr,
            date: applicable_date,
            dayName,
            dayNumber,
            monthName,
            maxTemp: Math.round(max_temp),
            minTemp: Math.round(min_temp),
        }
    })
};

export default convertWeather
