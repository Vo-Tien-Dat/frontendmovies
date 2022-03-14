
import React, {useEffect, useState} from 'react';
import './TypeFilm.scss';
import axios from 'axios';
import FormFilm from './FormFilm';
function TypeFilm(props){
    const [listfilm, setListfilm] = useState(undefined);
    useEffect(()=>{
        axios.get(`http://localhost:8081/AllTypeFilm/${props.typefilm}`)
        .then((res) => {
            if(res.data != undefined){
                setListfilm(res.data);
            }
        })
        .catch((err) => console.log(err));
    },[]);
    if(listfilm != undefined){
        return(
            <div className = {`List-Film`}>
                {
                    listfilm.map((film, index) => {
                        return(
                            <div className={"col-3"} key = {index}>
                                {
                                    <FormFilm 
                                        id = {film.id}
                                        router = {film.router}
                                        name = {film.name}
                                        urlimage = {film.urlimage}
                                    />
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    return(
        <h1>loading...</h1>
    )
    
}


export default TypeFilm;