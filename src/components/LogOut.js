import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap';


export default function LogOut() {
    const {currentUser, logout } = useAuth();
    let navigate = useNavigate();

    const handleClick = () => {
        logout();
        navigate("/home");
        
    };

   

    return (
        <>
            {
                currentUser && <div style={{ display: 'flex', flexDirection: 'column', flex: 2, height: '100vh' }}>

<Button
                                        variant="primary"
                            
                                        onClick={handleClick}
                                    >
                                        Log Out
                                    </Button>
                    

                </div>
            }
            {!currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
            }
        </>
    )

}
