import React, { useState } from 'react';

// Components
import Message from './components/Message';
import MessageContext from './contexts/MessageContext';

function App() {
  const [errorMessage, setErrorMessage] = useState({isOpen: false, message: ""})

  return (
    <MessageContext.Provider value={{isOpen: errorMessage.isOpen, errorMessage: errorMessage.message, setErrorMessage: setErrorMessage}}>
      <Message />
    </MessageContext.Provider>
  );
}

export default App;
