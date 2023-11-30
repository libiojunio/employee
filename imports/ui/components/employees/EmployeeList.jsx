import React from 'react';
import PropTypes from 'prop-types';

const EmployeeList = (props) => {
  const { dados } = props;

  return (
    <div>
      texto 22222
    </div>
  )
}

EmployeeList.propTypes = {
  dados: PropTypes.array.isRequired
};

export default EmployeeList;
