import { useState } from 'react';
import './Header.scss';

function Header(){
    const [input, setInput] = useState('');
    function test_fast(event){
        console.log(input);
        setInput(event.target.value);
        
    }
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="/">nhom7</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <form class="form-inline navbar-light bg-light" action = {`/tim-kiem/${input}`}>
                            <input class="form-control-lg mr-xl-5" onChange={(event) => {test_fast(event)}}  />
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Header;