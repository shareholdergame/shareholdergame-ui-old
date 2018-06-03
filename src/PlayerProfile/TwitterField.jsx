import React from "react";
import { string } from "prop-types";

const TwitterField = props => (
  <a
    href={`https://twitter.com/${props.handle}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    @{props.handle}
  </a>
);

TwitterField.propTypes = {
  handle: string.isRequired
};

export default TwitterField;
