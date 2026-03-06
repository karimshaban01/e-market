import './parts.css';
import { useNavigate } from 'react-router-dom';

const Header = ()=>{
    return (
        <>
           <div className="top-nav">
             <ul className='links'>
                <li>Home</li>
                <li>Search</li>
                <li>Categories</li>
                <li>Cart</li>
                <li>Profile</li>
             </ul>
           </div>
        </>
    );
}

export default Header;