import React from 'react';
import classnames from 'classnames';
import './filters.css';

interface FiltersProps {
    todayId: number,
    selectedDay: number,
    selectDay: (id?: number) => void,
}

const Filters: React.FunctionComponent<FiltersProps> = ({todayId, selectedDay, selectDay}) => {
    const buttons = [
        {
            name: 'На неделю',
        },
        {
            name: 'Сегодня',
            dayId: todayId
        }
    ];

    return (
        <div className="filters">
            {buttons.map((button, index) => (
                <button
                    key={index}
                    className={classnames('filters-button', {
                        'filters-button_active': selectedDay === button.dayId,
                    })}
                    type="button"
                    onClick={() => selectDay(button.dayId)}
                >
                    {button.name}
                </button>
            ))}
        </div>
    );
};

export default Filters;
