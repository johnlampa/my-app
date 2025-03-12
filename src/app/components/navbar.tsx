import { FaBars } from 'react-icons/fa';

export default function Navbar() {
    return (
      <>
      <div className='row-flex navbar'>
        <h1 className="pokedex">Pokedex</h1>
        <div className="hamburger-icon">
          <FaBars size={30} color="white" />
        </div>
      </div>
        
      </>
    );
  }