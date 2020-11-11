import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faTh, faUserPlus, faFileMedical, faTools } from '@fortawesome/free-solid-svg-icons';



const Sidebar = () => {
    return (
        <div className="" >

            <div className="row mb-4 dashboard">
                <div className="col-md-2">
                    <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faTh}></FontAwesomeIcon>
                </div>
                <div className="col-md-10">Dashboard</div>
            </div>

            <div className="row mb-4 appointment">
                <div className="col-md-2">
                    <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faCalendar}></FontAwesomeIcon>
                </div>
                <div className="col-md-10">Appointment</div>
            </div>

            <div className="row mb-4 patients">
                <div className="col-md-2">
                    <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faUserPlus}></FontAwesomeIcon>
                </div>
                <div className="col-md-10">Patients</div>
            </div>

            <div className="row mb-4 prescription">
                <div className="col-md-2">
                    <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faFileMedical}></FontAwesomeIcon>
                </div>
                <div className="col-md-10">Prescription</div>
            </div>

            <div className="row mb-4 settings">
                <div className="col-md-2">
                    <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faTools}></FontAwesomeIcon>
                </div>
                <div className="col-md-10">Settings</div>
            </div>

            
        </div>
    );
};

export default Sidebar;