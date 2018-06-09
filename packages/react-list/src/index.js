import React from "react";
import pt from "prop-types";
import { isObject, assign, map } from "lodash";

const List = ({ iterator, of: Component, propname, keyname, ...rest }) => {
  if (iterator && Component) {
    return map(iterator, (item, key) => {
      const props = assign({}, rest, { [propname]: item, [keyname]: key });
      return <Component key={key} {...props} />;
    });
  } else {
    return '@nelreina/react-list Component require an "iterator" and "of" props';
  }
};
List.propTypes = {
  iterator: pt.oneOfType([pt.array, pt.object]).isRequired,
  of: pt.any.isRequired,
  propname: pt.string,
  keyname: pt.string
};
List.defaultProps = {
  propname: "item",
  keyname: "idx"
};

export default List;
