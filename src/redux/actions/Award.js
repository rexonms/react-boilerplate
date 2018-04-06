import { GET_AWARD_DATA } from '../types/Award';

export const getAwardData = () => ((dispatch) => {
  const payload = {
    translations: {
      message: 'Award',
    },
    dbData: {
      awards: [
        { awardId: 1, name: 'Kickass Award!' },
      ],
    },
  };
  setTimeout(() => {
    dispatch({
      type: GET_AWARD_DATA,
      payload,
    });
  }, 1000);
});

export const f = 'f';
