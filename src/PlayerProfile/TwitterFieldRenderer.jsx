import React from "react";

const TwitterFieldRenderer = props => (
  <a
    href={`https://twitter.com/${props.value}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    @{props.value}
  </a>
);

export default TwitterFieldRenderer;
