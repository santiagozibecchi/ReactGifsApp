import React, { useState } from 'react';
import PropTypes from 'prop-types';



const AddCategory = ({setCategories}) => {

      const [inputValue, setinputValue] = useState('');

      // evento para capturar el cambio en el INPUT:
      const handdleInputChange = (e) => {
            setinputValue(e.target.value);
            // console.log(e);
      }

      // evento para subscribir (enter) - EVENTO EN EL FORM
      const handdleSubmit = (e) => {
            e.preventDefault();
            // console.log('Submit hecho');
            // c son las categorias existentes
            if (inputValue.trim().length > 2) {
                  setCategories(c => [ inputValue, ...c ]);
                  setinputValue(' ');
            }
      }

      return (
            <form onSubmit={handdleSubmit}>
                  <input
                        type="text"
                        value={inputValue}
                        // Captura el texto del input
                        onChange={handdleInputChange}
                  />
            </form>
      )
}

AddCategory.propTypes = {
      setCategories: PropTypes.func.isRequired
}

export default AddCategory;