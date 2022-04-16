import React from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
const Messages = (props) => {

    const location = useLocation();
    let returnJsx = <></>;
    
    if (location.state) {
        if (location.state.alertType && location.state.alertMsg) {
            returnJsx = <Alert variant={location.state.alertType}> {location.state.alertMsg} </Alert>;
        }

    }
    return (
        returnJsx

    )


}

export default Messages;