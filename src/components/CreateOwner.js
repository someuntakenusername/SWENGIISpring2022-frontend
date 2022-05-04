import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createOwner, getOwnerById } from '../services/ownerService';

export default class CreateOwner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasSet: false
        };
        this.handleClick = this.handleClick.bind(this);

    }

    componentDidMount = async () => {
        var owner = await ((await getOwnerById(this.props.currentUser.id)).data)
        if (!owner){
            this.setState({
                hasSet: false
            })
        }else{
            this.setState({
                hasSet: true
            })
        }
    }

    handleClick = async() => {
        console.log(this.props.currentUser.id)
        await createOwner(this.props.currentUser.id);
            this.setState({
                hasSet: true
            })
        
    }



    render() {
        return (
            <>
            {!this.state.hasSet && this.props.currentUser &&
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
               
                <h1>
                    <u>
                        Would you like to transition to an owner account?
                    </u>
                </h1>
                <h4>
                    By transitioning to an owner account, you still have all the functionality that you're used to!
                </h4>
                <h4>
                    This gives you the ability to create and manage locations that are displayed within the application!
                </h4>
                <Button onClick={this.handleClick}>
                    Transition Account
                </Button>
   
            </div>
        }
        {
            this.state.hasSet && this.props.currentUser && <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', alignItems: 'center', justifyContent: 'center' }}>
               
            <h1>
                <u>
                    You are already an owner.
                </u>
            </h1>
            {!this.props.currentUser && <div className="w-100 text-center mt-2"><Link className="w-100 text-center mt-2" to="/"> Please Login/Sign-Up To Access </Link></div>
            }

        </div>
        }
        </>
        )
    }
}
