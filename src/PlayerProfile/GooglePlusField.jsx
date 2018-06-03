import React from "react";
import { string } from "prop-types";

const GooglePlusField = props => (
  <a
    href={`https://twitter.com/${props.slug}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    +{props.slug}
  </a>
);

GooglePlusField.propTypes = {
  slug: string.isRequired
};

export default GooglePlusField;
