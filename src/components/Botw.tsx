import styled from "styled-components";
import {Character} from "../interfaces/Charcters.ts";



const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px #536f50 solid;
    text-align: center;
    background-color: #fdffe0;
    
`;




const StyledDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;    
    padding: 20px;
    background-color: #86a5a9;
`;

const StyledHeader = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 10px;
    text-align: center;

`;


const StyledParagraph = styled.p`
    font-size: 1rem;
    margin-bottom: 8px;
    text-align: center;
`;

export default function Botw(props : { data:Character[] } ){
    return (
        <StyledDiv >
            {
                props.data.map((char: Character) => (
                <SingleCharDiv key={char.id}>
                    <StyledHeader>{char.name}</StyledHeader>
                    <StyledParagraph>{char.description}</StyledParagraph>
                    <img src={char.image} alt={`Image of ${char.name}`} />
                    <StyledParagraph> ID: {char.id}</StyledParagraph>
                    <StyledParagraph>Category: {char.category}</StyledParagraph>
                    <StyledParagraph>Common Locations: {char.common_locations}</StyledParagraph>
                    <StyledParagraph>Drops: {char.drops}</StyledParagraph>
                    <StyledParagraph>Edible: {char.edible ? "Yes" : "No"}</StyledParagraph>
                </SingleCharDiv>
                ))
            }
        </StyledDiv>
    );
}
