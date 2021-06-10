import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AppointmentPage from '../../Dashboard/AppointmentPage/AppointmentPage';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import PatientPage from '../../Dashboard/PatientPage/PatientPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faTh, faUserPlus, faFileMedical, faTools, faUserMd } from '@fortawesome/free-solid-svg-icons';
import Prescription from '../../Dashboard/Prescription/Prescription';
import Settings from '../../Dashboard/Settings/Settings';
import AddDoctor from '../../Dashboard/AddDoctor/AddDoctor';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useState } from 'react';
import { useEffect } from 'react';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Dashboard></Dashboard>
    },
    {
        path: "/appointment",
        main: () => <AppointmentPage></AppointmentPage>
    },
    {
        path: "/patients",
        main: () => <PatientPage></PatientPage>
    },
    {
        path: "/prescription",
        main: () => <Prescription></Prescription>
    },
    {
        path: "/addDoctor",
        main: () => <AddDoctor></AddDoctor>
    },
    {
        path: "/settings",
        main: () => <Settings></Settings>
    }
];
const AdminPanel = () => {
    const [loggedInUser] = useContext(UserContext);
    const [, setIsDoctor] = useState(false);
    useEffect(() => {
        fetch('https://fathomless-badlands-18502.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [loggedInUser.email])

    const [currentCategory, setCurrentCategory] = useState('')
    const [appointment, setAppointment] = useState([]);
    // const [, setCurrentItem] = useState(null);
    const [, setCurrentSidebar] = useState([])
    // const handleSidebar = (menu) => {
    //     setCurrentCategory(menu);
    //     setCurrentItem(null);
    // }

    useEffect(() => {
        fetch('https://fathomless-badlands-18502.herokuapp.com/recentAppointment')
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])

    useEffect(() => {
        setCurrentCategory('dashboard')
    }, [])

    useEffect(() => {
        if (currentCategory !== '') {
            setCurrentSidebar(appointment)
        }
    }, [appointment, currentCategory]);

    return (
        
        <Router>
            <div style={{ display: "flex" }}>
                <div className="row" style={{
                    padding: "10px",
                    width: "100%",
                    background: "#f0f0f0"
                }}
                >
                    <div className="col-md-2" style={{ backgroundImage: 'linear-gradient(75deg, #19D3AE, #0fcfec)' }}>
                        <Link to="/">
                            <div className="row mb-4 dashboard">
                                <div className="col-md-2">
                                    <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faTh}></FontAwesomeIcon>
                                </div>
                                <div className="col-md-10">Dashboard</div>
                            </div>
                        </Link>
                        {/* isDoctor && */}
                        {
                             <div>
                                <Link to="appointment">
                                    <div className="row mb-4 appointment">
                                        <div className="col-md-2">
                                            <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faCalendar}></FontAwesomeIcon>
                                        </div>
                                        <div className="col-md-10">Appointment</div>
                                    </div>
                                </Link>
                                <Link to="patients">
                                    <div className="row mb-4 patients">
                                        <div className="col-md-2">
                                            <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faUserPlus}></FontAwesomeIcon>
                                        </div>
                                        <div className="col-md-10">Patients</div>
                                    </div>
                                </Link>

                                <Link to="prescription">

                                    <div className="row mb-4 prescription">
                                        <div className="col-md-2">
                                            <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faFileMedical}></FontAwesomeIcon>
                                        </div>
                                        <div className="col-md-10">Prescription</div>
                                    </div>
                                </Link>

                                <Link to="addDoctor">
                                    <div className="row mb-4 settings">
                                        <div className="col-md-2">
                                            <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faUserMd}></FontAwesomeIcon>
                                        </div>
                                        <div className="col-md-10">addDoctor</div>
                                    </div>
                                </Link>

                                <Link to="settings">
                                    <div className="row mb-4 settings">
                                        <div className="col-md-2">
                                            <FontAwesomeIcon className="" style={{ width: '20px' }} icon={faTools}></FontAwesomeIcon>
                                        </div>
                                        <div className="col-md-10">Settings</div>
                                    </div>
                                </Link>
                            </div>}



                    </div>
                    <div className="col-md-10 pr-0">
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>

                </div>

                {/* <div style={{ flex: 1, padding: "10px" }}>

                </div> */}
            </div>
        </Router>
    );
};

export default AdminPanel;