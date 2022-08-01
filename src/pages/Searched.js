import React from "react";
import {useEffect, useState} from "react" ;
import {useParams} from "react-router-dom" ;
import styled from "styled-components" ;
import {Link} from "react-router-dom" ;


function Searched () {   
    
    const [searchedRecipes, setSearchedRecipes] = useState([]) ;
    let params = useParams() ;

    const getSearched = async(name) => {
        const data = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        ) ;
        const recipes = await data.json() ;
        setSearchedRecipes(recipes.results) ;
        console.log(recipes) ;

    } ;

    useEffect(() => {
        console.log(params) ;
        getSearched(params.search);
    }, [params]) ;

    return (
    <Grid>
        {searchedRecipes.map((recipe) => {
            return (
                <Card key={recipe.id}>
                        <Link to={"/recipe/" + recipe.id} >
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient />
                        </Link>   
                </Card>
            )
        })}
    </Grid>)
}

const Grid = styled.div`
     display: grid ;
     grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr)) ;
     grid-row-gap: 3rem ;
     `;

const Card = styled.div`
     img {
        width : 100% ;
        border-radius: 2rem ;
     }
     a { 
        text-decoration: none ;
     }
     h4 {
        text-align: center ;
        padding:1rem;
     }`;

const Gradient = styled.div`
    z-index: 3 ;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
    `;

export default Searched ;