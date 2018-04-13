const chatterAEmail = 'rexonms@gmail.com';
const chatterBEmail = 'john@mail.com';
export const chatterAImage = 'http://dummyimage.com/mediumrectangle/111111/eeeeee';
export const chatterBImage = 'http://dummyimage.com/mediumrectangle/cccccc/eeeeee';
export const dummyMessages = {
  conversations: {
    1: {
      id: '1',
      chatterAEmail,
      chatterBEmail,
      messages: [
        {
          id: '1',
          message: 'Hello!',
          authorEmail: chatterAEmail,
          recipientEmail: chatterBEmail,
        },
        {
          id: '2',
          message: 'WhatS up!',
          authorEmail: chatterBEmail,
          recipientEmail: chatterAEmail,
        },
        {
          id: '3',
          message: 'How is life?',
          authorEmail: chatterBEmail,
          recipientEmail: chatterAEmail,
        },
        {
          id: '4',
          message: 'Do you know? There are two options, either you should spy on _handleCloneClick of component\'s prototype, before you render the component.',
          authorEmail: chatterBEmail,
          recipientEmail: chatterAEmail,
        },
      ],
    },
  },
};
