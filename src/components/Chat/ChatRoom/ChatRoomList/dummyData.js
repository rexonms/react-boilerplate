// http://blog.slatepeak.com/creating-a-real-time-chat-api-with-node-express-socket-io-and-mongodb/

export const CHAT_USER_EMAIL_ADDRESS = 'rexonms@gmail.com';
export const CHAT_FRIEND_EMAIL_ADDRESS = 'john@mail.com';
// List of all the conversations
// All the conversations
export const conversationList = [
  {
    id: '1',
    authorEmail: CHAT_USER_EMAIL_ADDRESS,
    message: 'hola!',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  {
    id: '2',
    authorEmail: CHAT_FRIEND_EMAIL_ADDRESS,
    message: 'whats up!',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  {
    id: '3',
    authorEmail: CHAT_FRIEND_EMAIL_ADDRESS,
    message: 'Where did you go? Finally, you should probably take a look at this document for a discussion of the three possible schemas for a messaging/commenting database, including the trade-offs for each design: ',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  {
    id: '4',
    authorEmail: CHAT_USER_EMAIL_ADDRESS,
    message: 'Oops sorry! didn\'t se you message',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
  {
    id: '5',
    authorEmail: CHAT_USER_EMAIL_ADDRESS,
    message: 'In addition, you should probably review the links in the \'See Also\' section of that document. I especially recommend the video presentations.\n' +
    '\n' +
    'Finally, you should probably take a look at this document for a discussion of the three possible schemas for a messaging/commenting database, including the trade-offs for each design: ',
    imageURL: 'https://place-hold.it/100',
    imageAltText: 'Alt text of image',
  },
];
