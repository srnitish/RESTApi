import React,{useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

function CharacterDetails() {
    const [character, setCharacter] = useState(null);
    const [Characters, setCharacters] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();
    const characterIndex = Characters.findIndex(char => char.id === parseInt(id));

    useEffect(()=>{
        const fetchCharacter = async() => {
            try{
                const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
                const result = response.data;
                setCharacter(result);
            }catch(error){
                console.error('Error fetching characters:', error)
            }

            try {
                // **** Using Axios ****
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                const data = response.data.results;
                console.log(data);
                setCharacters(data);
            }catch(error){
                console.error('Error fetching characters:', error)
            }
        }
        fetchCharacter();
    },[id])

    const goToPreviousCharacter = () => {
        // const previousIndex = characterIndex - 1;
        // const previousCharacterId = previousIndex >= 0 ? Characters[previousIndex].id : Characters[Characters.length - 1].id;
        if(characterIndex > 0){
            const previousCharacterId = Characters[characterIndex -1].id
            navigate(`/character/${previousCharacterId}`);
        }
      };
    
      const goToNextCharacter = () => {
        const nextIndex = characterIndex + 1;
        const nextCharacterId = nextIndex < Characters.length ? Characters[nextIndex].id : Characters[0].id;
        navigate(`/character/${nextCharacterId}`);
      };
    

    if(!character){
        return <div><center>Loading...</center></div>;
    }

    return (
        <div className="container-fluid">
            <div className="row">
            <h1>Characters Details</h1>
                <div className="col-lg-3 col-md-3 col-sm-4">
                <Link to="/">
                    <button className="btn btn-outline-secondary" style={{marginRight: `10px`}}>Home</button>
                </Link>
                <button className="btn btn-outline-primary" onClick={goToPreviousCharacter}>Previous</button>
                <button className="btn btn-outline-primary" style={{marginLeft: `10px`}} onClick={goToNextCharacter}>Next</button>
                    <div key={character.id} className="col-lg-12 mt-5 mb-3">
                        <div className="card profile-card-5">
                            <div className="card-img-block">
                                <img className="card-img-top" src={character.image} alt={character.image} width={100} />
                            </div>
                            <div className="card-body pt-0">
                                <div><h6 className="card-title">{character.name}</h6></div>
                                <div> <span className={character.status === 'Alive' ? 'alive' : character.status === 'Dead' ? 'dead' : character.status === 'unknown' ? 'unknown' : ''}>{' '}</span>{character.status}, <span>{character.gender}</span></div>
                                <div>
                                <p className="card-title">Origin: {character.origin.name}</p>
                                <p className="card-title">Location: {character.location.name}</p>
                                </div>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>  
           </div>
        </div>
    );
}
export default CharacterDetails;