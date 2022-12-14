import { React, useEffect, useState } from "react";
import styled from 'styled-components' ;
import { useParams  } from "react-router-dom";
//import React from "react";

function Recipe () {
    
    let params = useParams() ;
    const [details, setDetails] = useState({}) ;
    const [activeTab, setActiveTab] = useState("instructions" ) ;

   
        const fetchDetails = async(name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
            ) ;  
        const detailData = await data.json() ;
        console.log(data) ;
        setDetails(detailData) ;
        } ;

    useEffect(() => {

        fetchDetails(params.name) ;

    }, [params]);

    return (
        <div>    
        <h2>{details.title+"(score:"+(details.spoonacularScore ?? "NA")+")"}</h2>
        <DetailWrapper>

        <img src={details.image} alt={details.title}/>
        <Info>
            <Button className={activeTab==='ingredients'? 'active' : ''} onClick={()=>setActiveTab("ingredients")}>Ingredients</Button>
            <Button className={activeTab==='instructions'? 'active': ''} onClick={()=>setActiveTab("instructions")}>Instructions</Button>
            <Button className={activeTab==='more'? 'active': ''} onClick={()=>setActiveTab("more")}>more...</Button>
            <div>
                {activeTab==='ingredients' && <ul> {details.extendedIngredients.map((item) => <li key={item.name}>{item.amount+" "+item.unit+" "+item.name}</li>)} </ul>}
                <h3 dangerouslySetInnerHTML={(activeTab ==='instructions')? {__html: details.instructions} : ((activeTab==='more') ? {__html: details.summary} : {__html:"<p/>"} )}></h3>
            </div>
        </Info>
        </DetailWrapper></div>);
}

const DetailWrapper = styled.div`
    margin-top: 10rem ;
    margin-bottom: 5rem;
    display: flex ;
    h2 {
        margin-bottom:  2rem;
    }
    
    li {
        font-size: 1.2rem;
        line-height: 2.5rem;
    }
    img {
        width: 50% ;
        height: 30rem ;
    }
    ul{
        margin-top: 2rem ;
        list-style-type: none; 
    }`;

    const Button = styled.button`
    padding: 1rem 1rem ;
    color: #313131 ;
    background: white ;
    border: 2px solid black ;
    margin-right:  1rem;
    font-weight: 600;
    .active {
        background: linear-gradient(35deg, #494949, #313131);
        color: white ;
    }
    `;

    const Info = styled.div`
    margin-left: 10rem;
    ` ;

export default Recipe ;