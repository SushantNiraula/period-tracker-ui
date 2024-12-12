import React from 'react';
import PeriodCalendar from '../components/calendar';
import PastRecords from '../components/PastRecords';
import UserInfo from '../components/UserInfo';

const PeriodTrackerPage = () => {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
            <h1 style={{ textAlign: 'center', fontSize: '2.5em', color: '#333' }}>Period Tracker</h1>

            {/* Calendar Section */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
                <PeriodCalendar />
            </div>

            {/* Bottom Section for Past Records & User Info */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '20px',
                flexWrap: 'wrap',
                marginTop: '40px',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
                <div style={{
                    flex: '1 1 45%',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    minWidth: '280px'
                }}>
                    <h2 style={{ fontSize: '1.8em', color: '#333' }}>Past Period Records</h2>
                    <PastRecords />
                </div>
                
                <div style={{
                    flex: '1 1 45%',
                    backgroundColor: '#fff',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                    minWidth: '280px'
                }}>
                    <h2 style={{ fontSize: '1.8em', color: '#333' }}>User Information</h2>
                    <UserInfo />
                </div>
            </div>
        </div>
    );
};

export default PeriodTrackerPage;