

const Card = ({name, picture, location, cell, email, handleUser,background}) => {
   
    return (
        <div className='card' style={{background}}>
            <ul>
                <li><h1> {name} </h1></li>
                <li> <img src={picture} alt="" /></li>
                <li><h3><i class="far fa-compass"></i>{location}</h3></li>
                <li><h3><i class="fas fa-mobile-alt"></i>{cell}</h3></li>
                <li><i class="fas fa-envelope"></i>{email}</li>
                <button onClick={handleUser}><i class="fas fa-random"></i></button>
            </ul>
        </div>
    );
};

export default Card;