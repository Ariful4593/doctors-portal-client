import React from 'react';

const AppointmentByDate = ({ appointments }) => {
    const handleStatus = (data) =>{
        console.log(data)
    }
    return (
        <div>
            <h1 className="text-center mb-4">Appointments</h1>

            {
                appointments.length ? <div>
                    <div className="row">
                        <div className="col-md-4"><h6>Name</h6></div>
                        <div className="col-md-4"><h6>Shedule</h6></div>
                        <div className="col-md-4"><h6>Action</h6></div>
                    </div>
                    {
                        appointments.map(appointment => {
                            return (
                                <div className="row" key={appointment._id}>
                                    <div className="col-md-4" >{appointment.name}</div>
                                    <div className="col-md-4">{appointment.date}</div>
                                    <div className="col-md-4">
                                        <select id="cars">
                                        <option onClick={() => handleStatus('volbo')} value="volvo">Not Visited</option>
                                        <option  value="saab">Visited</option>
                                    </select></div>
                                </div>
                            )
                        })
                    }
                </div> : <h5 className="p-5 text-center">No Appointment for this date</h5>
            }




        </div>
    );
};

export default AppointmentByDate;