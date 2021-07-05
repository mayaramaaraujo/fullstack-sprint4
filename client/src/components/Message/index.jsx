import React, {useContext} from 'react';

// Material UI components
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert'

// Contexts
import MessageContext from '../../contexts/MessageContext';

const Message = () => {
  const messageContext = useContext(MessageContext);

  return (
    <Snackbar open={messageContext.isOpen} anchorOrigin={{horizontal: "right", vertical: "top"}} autoHideDuration={3000}>
      <Alert severity="error">
        {messageContext.errorMessage}
      </Alert>
    </Snackbar>
  )
}

export default Message;