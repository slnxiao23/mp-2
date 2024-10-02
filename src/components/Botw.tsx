import styled from "styled-components";
import {Character} from "../interfaces/Charcters.ts";

const AllCharsDiv=styled.div`
    display: flex;
    flex-flow: row wrap;    
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Papyrus, fantasy;
    text-align: center;
`;

export default function Botw(props : { data:Character[] } ){
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Character) => (
                <SingleCharDiv key={char.id}>
                    <h1>{char.name}</h1>
                    <p>{char.description}</p>
                    <img src={char.image} alt={`Image of ${char.name}`} />
                    <p> ID: {char.id}</p>
                    <p>Category: {char.category}</p>
                    <p>Common Locations: {char.common_locations}</p>
                    <p>Drops: {char.drops}</p>
                    <p>Edible: {char.edible ? "Yes" : "No"}</p>
                </SingleCharDiv>
                ))
            }
        </AllCharsDiv>
    );
}
