import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";

import OwnerLocations from './OwnerLocations';


export default function EditLocsDash() {
    const {  currentUser } = useAuth();
   



    return (
        <>
            {
                currentUser && <div style={{ display: 'flex', flexDirection: 'column', flex: 2, height: '50vh', backgroundColor: 'lightgrey' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', overflowY: 'scroll' }}>

                        <OwnerLocations currentUser={currentUser} navigate={useNavigate}></OwnerLocations>

                    </div>
                </div>
            }
            {!currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
            }
        </>
    )

}

