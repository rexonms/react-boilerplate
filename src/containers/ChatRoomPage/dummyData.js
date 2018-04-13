export const chatterAEmail = 'rexonms@gmail.com';
export const chatterBEmail = 'john@mail.com';

export const CHAT_USER_DETAILS = {
  email: 'rexonms@gmail.com',
  imageURL: 'http://dummyimage.com/mediumrectangle/111111/eeeeee',
  imageAltText: 'image alt text',
};
export const CHAT_FRIEND_DETAILS = {
  email: 'john@mail.com',
  imageURL: 'http://dummyimage.com/mediumrectangle/cccccc/eeeeee',
  imageAltText: 'image alt text',
};

export const dummyMessages = {
  conversations: {
    100: {
      id: '100',
      chatterAEmail,
      chatterBEmail,
      messagesByHash: {
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
      },
    },
  },
};
