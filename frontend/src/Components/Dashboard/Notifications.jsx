import React, { useContext } from 'react';
import { Button } from '@material-ui/core';

import { SocketContext } from '../../SocketContext';

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);
    console.log("test",call)
  return (
    <>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <h1>{call.name} Appel entrant du docteur :</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Répondre 
            {console.log("test",call)}
          </Button>
        </div>
      )}
    </>
  );
};

export default Notifications;