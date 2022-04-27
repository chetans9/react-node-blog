import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
const Messages = (props) => {

    let handleShow = function(){
        setShow(false);

    }
    
    const location = useLocation();
    const [show, setShow] = useState(true);
    let returnJsx = <></>;
    
    if (location.state) {
        if (location.state.alertType && location.state.alertMsg && show) {
            returnJsx = <Alert variant={location.state.alertType} onClose={handleShow} dismissible> {location.state.alertMsg} </Alert>;
        }

    }
    return (
        returnJsx

    )


}

export default Messages;