import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import CreateOwner from './CreateOwner';


export default function CreateOwnerWrapper() {
    const {currentUser } = useAuth();


   

    return (
        <>
            {
                currentUser && <div style={{ display: 'flex', flexDirection: 'column', flex: 2}}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', overflowY: 'scroll' }}>
                                <h3>
                                
                                </h3>
                                <CreateOwner currentUser={currentUser}></CreateOwner>
                               
                            </div>
                </div>
            }
            {!currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
            }
        </>
    )

}

