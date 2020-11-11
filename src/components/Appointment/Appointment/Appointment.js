import React from 'react';
import { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppointmentHeder from '../AppointmentHeader/AppointmentHeder';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    console.log(selectedDate)
    console.log(selectedDate.toDateString())
    return (
        <div>
            <Navbar></Navbar>
            <AppointmentHeder handleDateChange={handleDateChange} ></AppointmentHeder>
            <BookAppointment date={selectedDate}></BookAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;