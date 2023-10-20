import { useParams } from "react-router-dom"

export default function BracketPage(){
    const params = useParams();
    const id = params.id;
    return(
        <h1>Bracket page {id}</h1>
    )
}