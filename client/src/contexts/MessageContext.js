import React from 'react';

const MessageContext = React.createContext({showMessage: true, message: "Erro ao carregar serviço"});

export default MessageContext;