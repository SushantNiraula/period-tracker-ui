import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';

const PeriodCalendar = () => {
    const [value, setValue] = useState(new Date());
    const [periodDates, setPeriodDates] = useState([]);

    useEffect(() => {
        // Fetch period dates from the backend
        axios.get('http://localhost:5000/api/periods')
            .then(response => setPeriodDates(response.data))
            .catch(error => console.error('Error fetching periods:', error));
    }, []);

    const isPeriodDate = (date) => {
        return periodDates.some(period => 
            new Date(period.startDate) <= date && date <= new Date(period.endDate)
        );
    };

    return (
        <div>
            <h2>Period Tracker Calendar</h2>
            <Calendar
    onChange={setValue}
    value={value}
    tileClassName={({ date }) => isPeriodDate(date) ? 'highlight' : null}
    className="custom-calendar"
/>
        </div>
    );
};

export default PeriodCalendar;