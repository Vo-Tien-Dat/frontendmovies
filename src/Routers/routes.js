

import Home from "../Pages/Home/Home";
import InforFilm from "../Pages/InforFilm/InforFilm";
import VideoFilm from "../Pages/VideoFilm/VideoFilm";
import FindFilm from "../Pages/FindFilm/FindFilm";



const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: 'thong-tin-phim/:typename/:id',
        exact: true,
        main: () => <InforFilm/>
    },
    {
        path: 'xem-phim/:typename/:id',
        exact: true,
        main: () => <VideoFilm/>
    },
    {
        path: '/tim-kiem/:typename',
        exact: false,
        main: () => <FindFilm/>
    },
    {
        path:'',
        exact: false,
        main: () => <Home/>
    }
];


export default routes;