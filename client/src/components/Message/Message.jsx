import Alert from '@material-ui/lab/Alert'
import { useContext } from 'react';
import MessageContext from '../../contexts/MessageContext';

function Message() {
  const messageContext = useContext(MessageContext);

  return (
    <div>
      {messageContext.showMessage && <Alert severity="error">{messageContext.message}</Alert>}
    </div>
  )
}

export default Message;