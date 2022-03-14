

import axios from 'axios';
import React, {useEffect} from 'react';
import {useState} from 'react';
import { useParams } from 'react-router-dom';
import './VideoFilm.scss';


function VideoFilm(){
    const [listfilm, setListfilm] = useState(undefined);
    const [urlvideo, setUrlvideo] = useState(undefined);
    const [namefilm, setNamefilm] = useState(undefined);
    const {id} = useParams();
    useEffect(()=> {
        axios.get(`http://localhost:8081/ObjectVideoMoviesIdVideo/${id}`).
        then((res) => {
            if(res.data != undefined){
                setUrlvideo(res.data.urlvideo);
                axios.get(`http://localhost:8081/AllVideoMoviesId/${res.data.id}`).then((res1)=>{
                    if(res1.data != undefined){
                        setListfilm(res1.data);
                    }
                })

                axios.get(`http://localhost:8081/ObjectMoviesId/${res.data.id}`).
                then((res1) => {
                    if(res1.data != undefined){
                        setNamefilm(res1.data);
                        console.log(res1.data);
                }
        })
            }  
        })
        .catch((err) => console.log(err));
    },[]);
    return(
        <div className = "Film container-sm w-100">
            {
                urlvideo != undefined ?(
                <video  className = "VideoFilm container-sm w-100 "width="1000" height="500"  controls>
                    <source  src={`http://localhost:8081/static/videos/${urlvideo}`} type="video/mp4"/>
                </video>
                ):
                <h1>loading...</h1>
            }
            <div className = "TenPhim">
                {
                    namefilm != undefined ? namefilm.name : <h1> loading....</h1>
                }
            </div>
            <div className = "TapPhim">
                {
                    listfilm!=undefined ? (
                        <React.Fragment>
                            {
                                listfilm.map((router,index) =>{
                                    return(
                                        <a href = {router.idvideo} >
                                            <button className = "col-sm-1">{router.episode}</button>
                                        </a>
                                    )
                                })
                            }
                        </React.Fragment>
                    )
                    :<h1>loading...</h1>
                }
            </div>
        </div>
    )
}

export default VideoFilm;