import Botw from "./components/Botw";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Character } from "./interfaces/Charcters.ts";


const ParentDiv=styled.div`
    width: 80vw;
    max-width: 1200px;
    margin: auto;
    padding: 20px;
    background-color: #86a5a9;
    border: 5px solid #536f50;
    border-radius: 10px;
    font: bold calc(2px + 1vw) Cursive, fantasy;
`;

export default function App() {
    // useState Hook to store Data.
    const [data, setData] = useState<Character[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            try {
                const rawData = await fetch(
                    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures"
                );
                const json = await rawData.json();  // This gets the entire rawData object
                setData(json.data); // Access the 'data' property of the rawData
            } catch (error) {
                console.error("There was an error fetching the data:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <ParentDiv>
            <h1>Breath of the Wild Creatures</h1>
            <Botw data={data} />
        </ParentDiv>
    );
}

