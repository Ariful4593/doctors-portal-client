import React, { useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import { useEffect } from 'react';
import PatientPage from '../PatientPage/PatientPage';
import { useContext } from 'react';
import { UserContext } from '../../../App';
const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%',
}
const AppointmentPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [appointments, setAppointments] = useState([])
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
 
    useEffect(() => {
        fetch('http://localhost:4000/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
            <div style={containerStyle} className="container-fluid row pr-0 pl-0">
                
                <div className="col-md-6">
                    <Calendar
                        className="w-100"
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>
                <div className="col-md-6">
                    <AppointmentByDate appointments={appointments}></AppointmentByDate>
                </div>
                
            </div>
        </section>
    );
};

export default AppointmentPage;