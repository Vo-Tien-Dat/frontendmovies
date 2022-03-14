
import './FormFilm.scss';

function FormFilm({id, router, name, urlimage}){
    return(
        <a href = {`/thong-tin-phim/${router}/${id}`}>
            <form className = {"Form-Film"} action = {`/thong-tin-phim/${router}/${id}`}>
                <img className = {"Image-Film"} src = {`http://localhost:8081/static/images/${urlimage}`}/>
                
                <div className = {"Name-Film"}>
                    <div className = {`Name`}>
                        {name}
                    </div>
                </div>
            </form>
        </a>
        
        
    )
}

export default FormFilm;