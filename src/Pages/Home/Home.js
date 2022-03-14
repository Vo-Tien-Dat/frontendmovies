
import TypeFilm from '../../Components/TypeFilm';
import './Home.scss';


function Home(){
   var category = [
      {
          typefilm: "hd",
          nametypefilm:"PHIM HÀNH ĐỘNG"
      },
      {
          typefilm:"pl",
          nametypefilm:"PHIM PHIÊU LƯU"
      },
      {
          typefilm: "hh",
          nametypefilm: "PHIM HOẠT HÌNH"
      },
      {
          typefilm: "lm",
          nametypefilm: "PHIM LÃNG MẠN"
      },
      {
          typefilm: "kd",
          nametypefilm: "PHIM KINH DỊ"
      }
  ];
    return(
      <div className = {`Home`}>
        {
          category.map((data, index) => {
            return(
              <div key = {index} className = "container-xl">
                <div className = {`Type-Name`}>
                  {
                    data.nametypefilm
                  }
                </div>
                <div className = "row">
                  {
                    <TypeFilm  typefilm = {data.typefilm}/>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
        
    )
}

export default Home;


