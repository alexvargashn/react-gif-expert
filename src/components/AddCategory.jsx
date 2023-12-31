import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {
    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({target}) => {
        setinputValue(target.value);
    }

    const onSubmit = () => {
        event.preventDefault();
        if(inputValue.trim().length === 0) return;
        
        //setcategories(categories => [inputValue, ...categories])
        onNewCategory(inputValue.trim());
        setinputValue('');
    }

  return (
    <form onSubmit={onSubmit}>
        <input 
            type="text" 
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
