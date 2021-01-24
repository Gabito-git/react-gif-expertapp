import { useState } from 'react';
import PropTypes from 'prop-types';


export const CategoryAdd = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (e) =>{

        setInputValue( e.target.value );

    }

    const handleOnSubmit = ( e )=> {

        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [inputValue,...cats ] );
            setInputValue( '' );
        }
    }   

    return (
        <form onSubmit={ handleOnSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputValue }
            />
        </form>
    )
}


CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}