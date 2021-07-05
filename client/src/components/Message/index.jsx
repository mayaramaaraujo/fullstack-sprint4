import React, {useContext} from 'react';

// Material UI components
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert'

// Contexts
import MessageContext from '../../contexts/MessageContext';

const Message = () => {
  const messageContext = useContext(MessageContext);

  const handleClose = () => {
    messageContext.setErrorMessage({isOpen: false, errorMessage: ""})
  }

  return (
    <Snackbar 
      open={messageContext.isOpen} 
      anchorOrigin={{horizontal: "right", vertical: "top"}} 
      onClose={handleClose}>

      <Alert severity="error" onClose={handleClose}>
        {messageContext.errorMessage}
      </Alert>      
    </Snackbar>
  )
}

export default Message;