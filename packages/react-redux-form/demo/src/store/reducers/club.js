const initialState = {
  data: {
    clubName: "Chess Club",
    member: [
      {
        firstName: "Marco",
        lastName: "Stravanov",
        age: "44"
      },
      {
        firstName: "Sue",
        lastName: "Allen",
        age: "31"
      },
      {
        firstName: "Dan",
        lastName: "Abramov",
        age: "26"
      }
    ]
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "typeName":
      return { ...state };

    default:
      return state;
  }
};
