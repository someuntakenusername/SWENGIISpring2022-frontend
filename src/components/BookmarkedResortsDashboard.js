import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import Bookmarked from './Bookmarked';


export default function BookmarkedResortsDashboard() {
    const {currentUser } = useAuth();
  

   

    return (
        <>
            {
                currentUser && <div style={{ display: 'flex', flexDirection: 'column', flex: 2, height: '50vh', backgroundColor: 'lightgrey' }}>
                     <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                                <h3>
                                    <u>
                                        Bookmarked Resorts
                                    </u>
                                </h3>
                                <Bookmarked currentUser={currentUser} navigate={useNavigate}></Bookmarked>

                            </div>
                </div>
            }
            {!currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
            }
        </>
    )

}

