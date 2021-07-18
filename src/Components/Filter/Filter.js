import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, changeFilter }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" name="filter" value={value} onChange={changeFilter} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
