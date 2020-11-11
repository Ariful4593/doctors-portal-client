import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Prescription = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    const handleDateChange = (date) => {
        setSelectedDate(date)
    }
    useEffect(() => {
        fetch('http://localhost:4000/addAppointmentByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])
    return (
        <section>
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-6 text-left">
                        Prescription
                    </div>
                    <div className="col-md-6">
                        <Calendar
                            className="w-100"
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                </div>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Name</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Prescription</th>
                           

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((recentAppointment, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{recentAppointment.date}</td>
                                        <td>{recentAppointment.name}</td>
                                        <td>{recentAppointment.phone}</td>
                                        <td>{recentAppointment.service}</td>
                                        
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Prescription;