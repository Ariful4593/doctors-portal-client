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
import Sidebar from './Sidebar';
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
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isDoctor, setIsDoctor] = useState(false);
    useEffect(() => {
        fetch('http://localhost:4000/isDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])

    const [currentCategory, setCurrentCategory] = useState('')
    const [appointment, setAppointment] = useState([]);
    const [currentItem, setCurrentItem] = useState(null);
    const [currentSidebar, setCurrentSidebar] = useState([])
    const handleSidebar = (menu) => {
        setCurrentCategory(menu);
        setCurrentItem(null);
    }

    useEffect(() => {
        fetch('http://localhost:4000/recentAppointment')
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
    }, []);

    console.log(appointment)
    return (
        
            // <div className="row">
            //     <div className="col-md-3">
            //         <Sidebar handleSidebar={handleSidebar} currentCategory={currentCategory}></Sidebar>
            //     </div>
            //     <div className="col-md-9">
            //         {
            //             currentItem ? '' :
            //                 <section className="container">
            //                     <div className="row">
            //                         <div className="col-md-12">
            //                             <div className="card-deck mb-4">
            //                                 <div className="card" style={{ backgroundColor: '#F1536E', height: '85px' }}>
            //                                     <div className="card-body text-white">
            //                                         <div className="row" >
            //                                             <div className="col-md-4 p-0">
            //                                                 <h2>09</h2>
            //                                             </div>
            //                                             <div className="col-md-8">
            //                                                 <p>Pending Appointment</p>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div className="card" style={{ backgroundColor: '#3DA5F4', height: '85px' }}>
            //                                     <div className="card-body text-white">
            //                                         <div className="row" >
            //                                             <div className="col-md-4">
            //                                                 <h2>19</h2>
            //                                             </div>
            //                                             <div className="col-md-8">
            //                                                 <p>Today's Appointment</p>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div className="card" style={{ backgroundColor: '#00C689', height: '85px' }}>
            //                                     <div className="card-body text-white">
            //                                         <div className="row" >
            //                                             <div className="col-md-4">
            //                                                 <h2>{appointment.length}</h2>
            //                                             </div>
            //                                             <div className="col-md-8">
            //                                                 <p>Total Appointment</p>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div className="card" style={{ backgroundColor: '#FDA006', height: '85px' }}>
            //                                     <div className="card-body text-white">
            //                                         <div className="row" >
            //                                             <div className="col-md-4">
            //                                                 <h2>{appointment.length}</h2>
            //                                             </div>
            //                                             <div className="col-md-8">
            //                                                 <p>Total Patients</p>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                             <div className="jumbotron">
            //                                 <label htmlFor="">Dashboard</label>
            //                                 <table className="table">

            //                                     <thead>
            //                                         <tr>
            //                                             <th scope="col">#</th>
            //                                             <th scope="col">Date</th>
            //                                             <th scope="col">Time</th>
            //                                             <th scope="col">Name</th>
            //                                             <th scope="col">Contact</th>
            //                                             <th scope="col">Prescription</th>
            //                                             <th scope="col">Action</th>

            //                                         </tr>
            //                                     </thead>
            //                                     <tbody>
            //                                         {
            //                                             appointment.map((recentAppointment, index) => {
            //                                                 return (
            //                                                     <tr key={index}>
            //                                                         <th scope="row">{index}</th>
            //                                                         <td>{recentAppointment.date}</td>
            //                                                         <td>Otto</td>
            //                                                         <td>{recentAppointment.name}</td>
            //                                                         <td>{recentAppointment.phone}</td>
            //                                                         <td>{recentAppointment.service}</td>
            //                                                         <td>@mdo</td>
            //                                                     </tr>
            //                                                 )
            //                                             })
            //                                         }

            //                                     </tbody>
            //                                 </table>
            //                             </div>
            //                         </div>
            //                     </div>


            //                 </section>
            //         }
            //     </div>
            // </div>

                      
        
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