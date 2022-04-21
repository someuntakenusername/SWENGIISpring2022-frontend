import React, { Component, useState } from 'react'
import { getPreferenceID } from '../services/PreferenceService';
import { useAuth } from '../contexts/AuthContext';
import { Link, useLocation, useNavigate } from "react-router-dom";
import searchYelp from '../services/YelpService';
import Recomended from './Recomended';


export default function UserDashboard() {
    const { signin, currentUser } = useAuth();
    const [locations, setLocations] = useState(null);
    let navigate = useNavigate();



    return (
        <>
            {
                currentUser && <div style={{ display: 'flex', flexDirection: 'column', flex: 2, height: '100vh' }}>

                    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                        <div style={{ flex: 0.5 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                <h3>
                                    <u>
                                        Bookmarked Resorts
                                    </u>
                                </h3>
                            </div>
                        </div>
                        <div style={{ flex: 0.5 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                <h3>
                                    <u>
                                        Recommended Resorts
                                    </u>

                                </h3>
                                <Recomended currentUser={currentUser} navigate={useNavigate}></Recomended>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                        <div style={{ flex: 0.5 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                <h3>
                                    <u>
                                        Notifications
                                    </u>
                                </h3>
                                <body>
                                    Coming Soon!!
                                </body>
                            </div>
                        </div>
                        <div style={{ flex: 0.5 }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                <h3>
                                    <u>
                                        Manage Account
                                    </u>
                                </h3>
                            </div>
                        </div>
                    </div>

                </div>
            }
            {!currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
}
        </>
    )

}

