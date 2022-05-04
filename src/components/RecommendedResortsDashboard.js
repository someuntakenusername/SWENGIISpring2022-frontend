import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from "react-router-dom";
import Recomended from './Recomended';
import { Button } from 'react-bootstrap';


export default function RecommendedResortsDashboard() {
    const { currentUser } = useAuth();
    let navigate = useNavigate();


    const handleClick1 = () => {
        navigate("../home");
    };



    return (
        <>
            {
                currentUser && <div style={{ display: 'flex', flexDirection: 'column', flex: 2, height: '100vh', backgroundColor: 'lightgrey' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center', alignSelf: 'center', overflowY: 'scroll' }}>
                        <h3>
                            <u>
                                Recommended Resorts
                            </u>

                        </h3>
                        <Button
                            variant="primary"

                            onClick={handleClick1}
                        >
                            View On Map
                        </Button>
                        <Recomended currentUser={currentUser} navigate={useNavigate}></Recomended>
                    </div>
                </div>
            }
            {!currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
            }
        </>
    )

}

