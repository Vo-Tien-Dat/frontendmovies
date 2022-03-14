
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InforFilm.scss';
import axios from 'axios';
function InforFilm(){
    const {id,typename} = useParams();;
    const [inforfilm, setInforfilm] = useState(undefined);
    const [namefilm, setNamefilm] = useState(undefined);
    const [videofilm, setVideofilm] = useState(undefined);

    useEffect(() =>{
        axios.get(`http://localhost:8081/AllInforMoviesId/${id}`).
        then((res) => {
            if(res.data != undefined){
                setInforfilm(res.data);
            }
        })
        .catch((err) => console.log(err));

        axios.get(`http://localhost:8081/ObjectMoviesId/${id}`).
        then((res) => {
            if(res.data != undefined){
                setNamefilm(res.data);
            }
        })
        .catch((err) => console.log(err));

        axios.get(`http://localhost:8081/AllVideoMoviesId/${id}`).
        then((res) => {
            if(res.data != undefined){
                console.log(res.data);
                setVideofilm(res.data);
            }
        })
        .catch((err) => console.log(err));
    },[]);
    

    
    return(
        <div className = {`container-sm w-75`}>
            <div className = "NameFilm">
                { namefilm != undefined ? namefilm.name : <h1>loading...</h1>}
            </div>
            <div className = "Page-infor">
                <div className = "BackgroundFilm">
                    {
                        namefilm!= undefined ? 
                        (<img src = {`http://localhost:8081/static/images/${namefilm.urlimage}`} className = "BackgroundFilm-Image"/>)
                        :(<h1>loading...</h1>)
                    }
                    <ul className = "Control">
                        <li class=" Submit btn btn-danger opacity-100">
                            {
                               videofilm!=undefined ? 
                               <a href = {`/xem-phim/${typename}/${videofilm[0].idvideo}`}>Xem phim</a>:
                               <h1>loading....</h1>
                               
                            }
                        </li>
                    </ul>
                </div>
                {
                    inforfilm!=undefined?(
                        <ul className = "List-Infor-Film">
                            <li>{`Đạo diễn:${inforfilm.director}`}</li>
                            <li>{`Diễn Viên: ${inforfilm.actor}`}</li>
                            <li>{`Nước Sản Xuât: ${inforfilm.country}`}</li>
                            <li>{`Năm Sản Xuất: ${inforfilm.year}`}</li>
                        </ul>
                    ):
                    <h1> loading...</h1>
                }
                
            </div>   
            <div className="ReviewFilm">
                <div className = "">Review phim</div>
                {
                    inforfilm!=undefined?(
                        <div className = "">{inforfilm.description}</div>
                    ):
                    <h1>loading....</h1>
                }
                
            </div>
        </div>
    )
    
}


export default InforFilm;