import React from 'react';
import PropTypes from 'prop-types';

function Saludar({name,emoji = '🧑🏼'}) {
  return <h1>Hello {emoji}, {name}</h1>;
    
  
}

Saludar.propTypes = {
    name: PropTypes.string.isRequired,
};

Saludar.defaultProps = {
    emoji: '👋🏼'
}; //maxima prioridad de default

export default Saludar;
