import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        age: '',
        weight: '',
        height: '',
        additionalInfo: '',
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/user-info')
            .then(response => setUserInfo(response.data))
            .catch(error => console.error('Error fetching user info:', error));
    }, []);

    return (
        <div>
            <ul style={{ padding: 0, listStyle: 'none' }}>
                <li style={{
                    padding: '10px',
                    marginBottom: '10px',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
                }}>
                    <p><strong>Name:</strong> {userInfo.name}</p>
                    <p><strong>Age:</strong> {userInfo.age}</p>
                    <p><strong>Weight:</strong> {userInfo.weight} kg</p>
                    <p><strong>Height:</strong> {userInfo.height} cm</p>
                    <p><strong>Additional Info:</strong> {userInfo.additionalInfo}</p>
                </li>
            </ul>
        </div>
    );
};

export default UserInfo;