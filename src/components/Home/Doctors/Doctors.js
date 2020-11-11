import React, { useEffect } from 'react';
import Doctor from '../Doctor/Doctor';
import { useState } from 'react';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () =>{
        fetch('http://localhost:4000/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    console.log(doctors)
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    {
                        doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Doctors;