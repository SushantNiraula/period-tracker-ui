import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PastRecords = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/periods/history')
            .then(response => setRecords(response.data))
            .catch(error => console.error('Error fetching records:', error));
    }, []);

    return (
        <div>
            <ul style={{ padding: 0, listStyle: 'none' }}>
                {records.map((record, index) => (
                    <li key={index} style={{
                        padding: '10px',
                        marginBottom: '10px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '6px',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                    }}>
                        <p style={{ margin: '5px 0', fontSize: '1.1em', color: '#333' }}>
                            <strong>Start Date:</strong> {new Date(record.startDate).toLocaleDateString()}
                        </p>
                        <p style={{ margin: '5px 0', fontSize: '1.1em', color: '#333' }}>
                            <strong>End Date:</strong> {new Date(record.endDate).toLocaleDateString()}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PastRecords;