import React from "react";
import List from "../../src";

const data = ["one", "two", "three"];
const Button = ({ item }) => <button>{item}</button>;

const ListItemProp = ({}) => {
  return (
    <React.Fragment>
      <h3>List with an "item" prop</h3>
      <code>
        <pre>{`const data = ['one', 'two', 'three'];
const Button = ({ item }) => <button>{item}</button>;

// Use List Component
// Notice the button component has an "item' prop
// By default List component expect an item prop

<List of={Button} iterator={data} />
            `}</pre>
      </code>
      <div className="result">
        Will render: <List of={Button} iterator={data} />
      </div>
    </React.Fragment>
  );
};

export default ListItemProp;
