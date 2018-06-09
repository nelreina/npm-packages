import React from "react";
import List from "../../src";

const navs = ["Home", "About", "Contact"];
const NavLink = ({ display }) => <li>{display}</li>;

const ListItemProp = ({}) => {
  return (
    <React.Fragment>
      <h3>List with a custom propname</h3>
      <code>
        <pre>{`const navs = ['Home', 'About', 'Contact'];

const NavLink = ({ display }) => <li>{display}</li>;

// just add a custom "propname" prop to List Component

<List of={NavLink} iterator={navs} propname="display" />
            `}</pre>
      </code>
      <ul className="result">
        <List of={NavLink} iterator={navs} propname="display" />
      </ul>
    </React.Fragment>
  );
};

export default ListItemProp;
