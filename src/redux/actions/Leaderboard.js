import { GET_LEADERBOARD_DATA } from '../types/Leaderboard';

export const getLeaderboardData = () => ((dispatch) => {
  const payload = {
    error: {
      message: 'Oh shit! something went wrong',
    },
  };
  setTimeout(() => {
    dispatch({
      type: GET_LEADERBOARD_DATA,
      payload,
    });
  }, 3000);
});

export const foo = 'bazz';
