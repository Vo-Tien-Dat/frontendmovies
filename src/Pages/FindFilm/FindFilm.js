import axios from 'axios';
import {useEffect} from 'react';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import FormFilm from '../../Components/FormFilm';
import '../../Components/TypeFilm.scss';


function FindFilm(){
    const {typename} = useParams();
    const [data, setData] = useState();
    const [listfilm, setListfilm] = useState();
    useEffect(()=>{
        axios.get(`http://localhost:8081/tim-kiem/?name=${typename}`)
        .then((res)=>{
            if(res!=undefined){
                setListfilm(res.data);
            }
        })
        .catch(err => console.log(err));
    },[]);
    return(
        <div className = "container-sm w-100">
            <div className = "TenPhim">{`Từ khóa tìm kiếm ${typename}`}</div>
            <div className = {`List-Film`}>
                {
                    listfilm!=undefined?(
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
                    ):(
                        <h1></h1>
                    )
                    
                }
            </div>
        </div>
    )
}

export default FindFilm;