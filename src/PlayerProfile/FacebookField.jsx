import React from "react";
import { string } from "prop-types";

const FacebookFieldRenderer = props => (
  <a
    href={`https://www.facebook.com/${props.slug}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.id}
  </a>
);

FacebookFieldRenderer.propTypes = {
  slug: string.isRequired,
  id: string.isRequired
};

export default FacebookFieldRenderer;
