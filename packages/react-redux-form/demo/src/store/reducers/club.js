const initialState = {
  data: {
    clubName: 'Chess Club',
    member: [
      {
        firstName: 'Marco',
        lastName: 'Stravanov',
        age: '44',
        stars: '3 stars'
      },
      {
        firstName: 'Sue',
        lastName: 'Allen',
        age: '31',
        stars: '2 stars'
      },
      {
        firstName: 'Dan',
        lastName: 'Abramov',
        age: '26',
        stars: '5 stars'
      }
    ]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'typeName':
      return { ...state };

    default:
      return state;
  }
};
