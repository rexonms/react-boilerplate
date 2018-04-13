// http://blog.slatepeak.com/creating-a-real-time-chat-api-with-node-express-socket-io-and-mongodb/

export const CHAT_USER_DETAILS = {
  email: 'rexonms@gmail.com',
  imageURL: 'https://place-hold.it/100',
  imageAltText: 'image alt text',
};
export const CHAT_FRIEND_DETAILS = {
  email: 'john@mail.com',
  imageURL: 'https://place-hold.it/100',
  imageAltText: 'image alt text',
};
export const CHAT_USER_EMAIL_ADDRESS = 'rexonms@gmail.com';
export const CHAT_FRIEND_EMAIL_ADDRESS = 'john@mail.com';
// List of all the conversations
export const userConversationIdList = [100, 2, 3, 4, 5];

// All the conversations
export const conversationList = {
  1: {
    id: '1',
    isUser: true,
    author: CHAT_USER_DETAILS,
    recipient: CHAT_FRIEND_DETAILS,
    message: 'hola!',
  },
  2: {
    id: '2',
    isUser: false,
    author: CHAT_FRIEND_DETAILS,
    recipient: CHAT_USER_DETAILS,
    message: 'whats up!',

  },
  3: {
    id: '3',
    isUser: false,
    author: CHAT_FRIEND_DETAILS,
    recipient: CHAT_USER_DETAILS,
    message: 'Where did you go?',
  },
  4: {
    id: '4',
    isUser: true,
    author: CHAT_USER_DETAILS,
    recipient: CHAT_FRIEND_DETAILS,
    message: 'Oops sorry! didn\'t se you message',
  },
  5: {
    id: '5',
    isUser: true,
    author: CHAT_USER_DETAILS,
    recipient: CHAT_FRIEND_DETAILS,
    message: 'In addition, you should probably review the links in the \'See Also\' section of that document. I especially recommend the video presentations.\n' +
    '\n' +
    'Finally, you should probably take a look at this document for a discussion of the three possible schemas for a messaging/commenting database, including the trade-offs for each design: ',
  },
};
