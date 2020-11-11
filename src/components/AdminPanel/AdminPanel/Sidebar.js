import React from 'react';

const Sidebar = ({handleSidebar, currentCategory}) => {
    return (
        
                    <ul className="list-group">
                        <li onClick={() => handleSidebar('dashboard')} className={`list-group-item ${currentCategory === 'dashboard' ? 'text-danger' : ''}`}  style={{cursor: 'pointer'}}>Dashboard</li>
                        <li onClick={() => handleSidebar('appointment')} className={`list-group-item ${currentCategory === 'appointment' ? 'text-danger' : ''}`}  style={{cursor: 'pointer'}}>Appointment</li>
                        <li onClick={() => handleSidebar('patients')} className={`list-group-item ${currentCategory === 'patients' ? 'text-danger' : ''}`}  style={{cursor: 'pointer'}}>Patients</li>
                        <li onClick={() => handleSidebar('prescription')} className={`list-group-item ${currentCategory === 'prescription' ? 'text-danger' : ''}`}  style={{cursor: 'pointer'}}>Prescription</li>
                        <li onClick={() => handleSidebar('addDoctor')} className={`list-group-item ${currentCategory === 'addDoctor' ? 'text-danger' : ''}`}  style={{cursor: 'pointer'}}>Add Doctor</li>
                    </ul>
               
    );
};

export default Sidebar;