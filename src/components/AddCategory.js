import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState(''); // ''

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
        //console.log('Handle change activated')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Handle Submit called', inputValue)
        if ( inputValue.trim().length > 2 ) {
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }

    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
