// http://blog.slatepeak.com/creating-a-real-time-chat-api-with-node-express-socket-io-and-mongodb/

const CHAT_USER = 'rexonms@gmail.com';
const CHAT_FRIEND = 'yi@gmail.com';
// List of all the conversations
export const userConversationIdList = [1, 2, 3, 4, 5];

// All the conversations
export const conversationList = {
  1: {
    id: '1',
    authorEmail: CHAT_USER,
    message: 'hola!',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  2: {
    id: '2',
    authorEmail: CHAT_FRIEND,
    message: 'whats up!',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  3: {
    id: '3',
    authorEmail: CHAT_FRIEND,
    message: 'Where did you go? Finally, you should probably take a look at this document for a discussion of the three possible schemas for a messaging/commenting database, including the trade-offs for each design: ',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  4: {
    id: '4',
    authorEmail: CHAT_USER,
    message: 'Oops sorry! didn\'t se you message',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  5: {
    id: '5',
    authorEmail: CHAT_USER,
    message: 'In addition, you should probably review the links in the \'See Also\' section of that document. I especially recommend the video presentations.\n' +
    '\n' +
    'Finally, you should probably take a look at this document for a discussion of the three possible schemas for a messaging/commenting database, including the trade-offs for each design: ',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
};
