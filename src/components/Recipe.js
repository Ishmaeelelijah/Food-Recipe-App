   import React,{useState}from 'react'
   import RecipeDetails from './RecipeDetails'





   const Recipe = ({recipe}) => {
       const [show, setShow] = useState(false)
       const {label,image,url,ingredients} = recipe.recipe;
       return (
           <div className='recipe'>
             <h2>{label}</h2>
             <img src={image} alt={label} />
             <a href={url} >
                 More Info To The Food
             </a>
             <button onClick={() => setShow(!show)}   >ingredients</button>
           {show && <RecipeDetails ingredients={ingredients} />}
           </div>
       )
   }
   
   export default Recipe
   