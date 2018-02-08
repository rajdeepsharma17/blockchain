import React from 'react';
import avatar from '../../assets/user.svg';
import add from '../../assets/add.svg';

const Peers = () => {
    return(
        <div>
            <div className = 'tc pa4' >
                <img src={avatar} alt="logo" className="br-100 pa1 ba b--black-10 h3 w3" />
            </div>
            <div className='tc pa4' >
                <img src={add} alt="logo" className="br-100 pa1 ba b--black-10 h3 w3" />
            </div>
        </div>
    );
}

export default Peers;