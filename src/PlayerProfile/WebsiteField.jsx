import React from "react";
import { string } from "prop-types";

const WebsiteField = props => (
  <a
    href={props.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.url}
  </a>
);

WebsiteField.propTypes = {
  url: string.isRequired
};

export default WebsiteField;
