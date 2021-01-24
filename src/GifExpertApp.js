import { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    
    return (
        <>
            <h1>GifExpertApp</h1>
            <CategoryAdd setCategories={ setCategories } />
            <hr/>           

            <ol>
                { categories.map( cat => <GifGrid 
                    key={ cat } 
                    category={ cat }
                     />  
                 ) }             

            </ol>

        </>
        
    );
}

