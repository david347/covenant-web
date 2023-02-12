
import { Button, Divider } from '@mui/material';

import { Link } from 'react-router-dom';

const Header = () =>{
    return (
        <div className='App-header'>
            <h3>Effective Logistic</h3>
            <nav className="block-row">
                <Divider orientation="vertical" flexItem />
                <Link style={{ textDecoration: 'none' }} to="/"><Button variant="text">Home</Button></Link> <Divider orientation="vertical" flexItem />
                <Link style={{ textDecoration: 'none' }} to="/quorum"><Button variant="text">Quorum</Button></Link><Divider orientation="vertical" flexItem />
                <Link style={{ textDecoration: 'none' }} to="/question"><Button variant="text">Preguntas</Button></Link><Divider orientation="vertical" flexItem />
                <Link style={{ textDecoration: 'none' }} to="/new-question"><Button variant="text">Nueva Pregunta</Button></Link><Divider orientation="vertical" flexItem />
            </nav>
        </div>
    );
};

export default Header;