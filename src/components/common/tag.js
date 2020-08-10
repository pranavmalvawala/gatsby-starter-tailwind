import React from "react";
import PropTypes from "prop-types";

function Tag({ text }) {
  return (
    <span className="text-sm md:text-xl inline-block border border-neutral-200 dark:border-neutral-700 rounded py-2 px-4 ml-2 mt-2">
      {text}
    </span>
  );
}

Tag.propTypes = {
  text: PropTypes.string,
};

export default Tag;