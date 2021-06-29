import Alert from '@material-ui/lab/Alert'
import { useContext } from 'react';
import MessageContext from '../../contexts/MessageContext';

function Message() {
  const messageContext = useContext(MessageContext);

  return <>{messageContext.showMessage && <Alert severity="error">{messageContext.message}</Alert>}</>
}

export default Message;