import React from "react";
import { Text } from "native-base";

/*
For displaying string wrapped in a Text component
If child is a falsy value (e.g. null, undefined, ""), returns null
*/
const TextWrapper = props => {
  return props.children ? <Text {...props}>{props.children}</Text> : null;
};

export default TextWrapper;
