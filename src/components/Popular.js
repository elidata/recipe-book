import { useEffect, useState } from 'react' ;
import Recipe from '../pages/Recipe';

function Popular() {
    const[popular, setPopular] = useState([]) ;

    useEffect(() => {
        getPopular() ;
    }, [] );

    const getPopular = async () => {

        const check = localStorage.getItem('popular');
        if (check) {
            setPopular(JSON.parse(check)) ;
        }
        else {
            const api = await fetch (
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            ) ;
     
        const data = await api.json() ;
        localStorage.setItem("popular",JSON.stringify(data.recipes)) ;
        setPopular(data.recipes) ;
        console.log(data.recipes) ;
           }
    };

    return (
        <div>
            { popular.map((recipe) => {
            return (<div key={recipe.id}>
                    <h5>{recipe.title}</h5>
                     <img src={recipe.image} alt={recipe.title} />
                     </div>
             ) ;
            })
        }
        </div>
    )
}

export default Popular ;