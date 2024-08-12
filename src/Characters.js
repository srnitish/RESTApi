import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// const myPara = {
//     display: "inline-flex",
// }

const Characters = () => {
    const [Characters, setCharacters] = useState([]);
    // const [selectedCharacter, setSelectedChar] = useState(null);
    // const [deletedItems, setDeletedItems] = useState([]);

    useEffect(() => {
        const fetchCharacters = async() => {
            try {
                // **** Using Axios ****
                const response = await axios.get('https://rickandmortyapi.com/api/character');
                const data = response.data.results;
                console.log(data);
                setCharacters(data);
            }catch(error){
                console.error('Error fetching characters:', error)
            }
        };
        fetchCharacters();
    }, []);

    // const showDetails = (url) => {
    //     axios.get(url)
    //       .then(response => {
    //         const selectedChar = response.data;
    //         console.log("selChar is:", selectedChar);
    //         setSelectedChar(selectedChar);
    //       })
    //       .catch(error => {
    //         console.error('Error fetching character details:', error);
    //       });
    //   };

    //   const getStatusColor = status => {
    //     return status === 'Alive' ? 'green' : 'red';
    //   };
    if(!Characters){
        return <div>Loading...</div>
    }
    
      return (
        <div className="container-fluid">
            <div className="row">
            <h1>Rick and Morty Characters</h1>
                {Characters.map(character => (
                    <div className="col-lg-3 col-md-3 col-sm-4">
                        <div key={character.id} className="col-lg-12 mt-5 mb-3">
                            <div className="card profile-card-5">
                                <div className="card-img-block">
                                    <img className="card-img-top" src={character.image} alt={character.image} width={100} />
                                </div>
                                <div className="card-body pt-0">
                                    <div><h6 className="card-title">{character.name}</h6></div>
                                    <div> <span className={character.status === 'Alive' ? 'alive' : character.status === 'Dead' ? 'dead' : character.status === 'unknown' ? 'unknown' : ''}>{' '}</span>{character.status}, <span>{character.gender}</span></div>

                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to={`/character/${character.id}`} style={{ textDecoration: 'none' }}>
                                        <button className='btn btn-outline-warning text-dark'>Character Details</button>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>  
                 ))}
           </div>
        </div>
      );
    }

export default Characters;