import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios'

export default function Survey() {

    const { questionNumber } = useParams()
    let numberParam = Number(questionNumber);

    useEffect (() => {
      (async function () {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
        console.log(data)
      })();
      
    }, [])


    return (
        <div>
            <h1>Faire le test 🧮</h1>
            <h2>Question {questionNumber}</h2>
            {questionNumber === "1" ? null : <Link to={"/survey/"+(numberParam-1)}>Precedent</Link>}
            {questionNumber === "10" ? <Link to="/results">resultat</Link> : <Link to={"/survey/"+(numberParam+1)}>Suivant</Link>}
        </div>
    )
}