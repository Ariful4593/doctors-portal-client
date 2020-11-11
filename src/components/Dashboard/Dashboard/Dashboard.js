import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';
const Dashboard = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/recentAppointment')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <section className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card-deck mb-4">
                        <div className="card" style={{ backgroundColor: '#F1536E', height: '85px' }}>
                            <div className="card-body text-white">
                                <div className="row" >
                                    <div className="col-md-4 p-0">
                                        <h2>09</h2>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Pending Appointment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundColor: '#3DA5F4', height: '85px' }}>
                            <div className="card-body text-white">
                                <div className="row" >
                                    <div className="col-md-4">
                                        <h2>19</h2>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Today's Appointment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundColor: '#00C689', height: '85px' }}>
                            <div className="card-body text-white">
                                <div className="row" >
                                    <div className="col-md-4">
                                        <h2>{appointments.length}</h2>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Total Appointment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card" style={{ backgroundColor: '#FDA006', height: '85px' }}>
                            <div className="card-body text-white">
                                <div className="row" >
                                    <div className="col-md-4">
                                        <h2>{appointments.length}</h2>
                                    </div>
                                    <div className="col-md-8">
                                        <p>Total Patients</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jumbotron">
                        <label htmlFor="">Dashboard</label>
                        <table className="table">

                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Prescription</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    appointments.map((recentAppointment, index) => {
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index}</th>
                                                <td>{recentAppointment.date}</td>
                                                <td>Otto</td>
                                                <td>{recentAppointment.name}</td>
                                                <td>{recentAppointment.phone}</td>
                                                <td>{recentAppointment.service}</td>
                                                <td>@mdo</td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Dashboard;