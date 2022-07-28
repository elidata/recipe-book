import React from "react";
import {useEffect, useState} from "react" ;
import {useParams } from "react-router-dom" ;

import styled from "styled-components" ;


function Searched () {   
    
    const [searchedRecipes, setSearchedRecipes] = useState([]) ;
    let params = useParams() ;

    const getSearched = async(name) => {
        const data = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}`
        ) ;
        const recipes = await data.json() ;
        setSearchedRecipes(recipes.results) ;

    } ;

 

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]) ;

    return (
    <Grid>
        {searchedRecipes.map((item) => {
            return (
                <Card key={item.id}>
                    <img src={item.image} alt="" />
                    <h4> {item.title}</h4>
                </Card>
            )
        })}
    </Grid>)
}
const Grid = styled.div`
display: grid;
` ;
const Card = styled.div`
    img{
        width:100% ;
        border-radius: 2rem;
    }` ;
    

export default Searched ;