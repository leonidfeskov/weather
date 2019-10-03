export interface WeatherCardProps {
    id: number
    name: string,
    abbr: string,
    dayName: string,
    dayNumber: number,
    monthName: string,
    maxTemp: number,
    minTemp: number,
    selectDay?: (id: number) => void,
}
