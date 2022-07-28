import styled from 'styled-components' ;
import {useState } from 'react' ;
import {FaSearch } from 'react-icons/fa' ;

function Search() {
    const [input,setInput] = useState("") ;

    const submitHandler = (e) => {
        e.preventDefaulkt() ;

    } ;

    return (
        <FormStyle>
            <div>
                <FaSearch></FaSearch>
            <input onChange={(e) =>setInput(e.target.value)}
            type="text"
            value= {input} />
            </div>
        </FormStyle>
    )

}

const FormStyle = styled.form`
margin: 0rem 20rem ;
position: relative ;
width : 100% ;
input {
    border: none ;
    font-size: 1.5rem ;
}`;

export default Search ;