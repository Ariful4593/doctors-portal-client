import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const PatientPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/recentAppointment')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <section>
            <div className="jumbotron">
                <label htmlFor="">All Patients</label>
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Contact</th>
                            <th scope="col">Address</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((recentAppointment, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{recentAppointment.name}</td>
                                        <td>{recentAppointment.gender}</td>
                                        <td>{recentAppointment.age}</td>
                                        <td>{recentAppointment.weight}</td>
                                        <td>{recentAppointment.contact}</td>
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

export default PatientPage;