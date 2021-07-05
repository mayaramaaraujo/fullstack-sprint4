import React, { useState } from 'react';

// Components
import Message from './components/Message';
import MessageContext from './contexts/MessageContext';

function App() {
  const [errorMessage, setMessageError] = useState({isOpen: true, message: "oi erro"})

  return (
    <MessageContext.Provider value={{isOpen: errorMessage.isOpen, errorMessage: errorMessage.message, setMessageError: setMessageError}}>
      <Message />
    </MessageContext.Provider>
  );
}

export default App;
