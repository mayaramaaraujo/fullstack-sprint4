import React from 'react';

const MessageContext = React.createContext({
  showMessage: false,
  message: null
})

export default MessageContext;