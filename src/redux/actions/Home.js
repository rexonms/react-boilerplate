import { GET_HOME_DATA } from '../types/Home';

export const getHomeData = () => ((dispatch) => {
  const payload = {
    translations: {
      message: 'Referral App V2',
      descriptionA: 'Biscuit croissant jelly beans sweet roll pastry chocolate bar pie dragée.',
      descriptionB: 'Sweet roll dessert macaroon gingerbread jujubes. Macaroon chupa chups cake bear claw chocolate bar pastry. Jelly wafer cake pie halvah chocolate marshmallow. Brownie danish lollipop. Dragée chocolate bar cotton candy carrot cake. Jelly gummi bears sweet lemon drops jujubes danish. Gingerbread jujubes lollipop pie muffin wafer pie gingerbread. Chocolate bar caramels croissant candy wafer biscuit wafer chupa chups sweet roll. Sugar plum danish dessert cake chocolate marshmallow tootsie roll. Brownie chocolate chocolate bar cake gingerbread chupa chups. Carrot cake tootsie roll marshmallow pudding cake croissant tootsie roll. Cake lemon drops biscuit gummies donut sweet. Carrot cake chocolate lemon drops icing bonbon fruitcake. Apple pie sugar plum sesame snaps danish.',
      descriptionC: 'Sesame snaps lollipop tootsie roll gingerbread carrot cake biscuit pudding cookie bear claw. Croissant lollipop chocolate ice cream chupa chups. Lollipop biscuit powder. Sweet sweet bonbon macaroon. Powder sweet sesame snaps caramels. Marshmallow candy chocolate cake cake powder apple pie tiramisu. Lemon drops cheesecake macaroon liquorice tiramisu liquorice. Chocolate soufflé halvah chupa chups. Croissant gummies jujubes candy canes brownie brownie. Wafer candy canes croissant pie caramels donut oat cake cupcake. Powder marzipan chocolate. Bonbon jujubes apple pie bear claw pudding brownie sweet marshmallow. Toffee toffee cake powder cupcake gummies jelly-o pie cotton candy.',
    },
    dbData: {
      id: 1,
      firstName: 'Elon',
      lastName: 'Musk',
    },
  };
  setTimeout(() => {
    dispatch({
      type: GET_HOME_DATA,
      payload,
    });
  }, 2000);
});

export const foo = 'bazz';
