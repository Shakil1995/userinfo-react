import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friends.css';

const Friends = (props) => {
 const {id,name,email}=   props.friend;

//  const history =useHistory();
// const handleClick=(friendID) =>{
//     const url= (`/friend/${id}`);
//     history.push(url);
// }

//  console.log(name);

    return (
        <div className="friend-container">
            
            <h4>Name : {name}</h4>
            <p> <b>Email</b> : {email}</p>
          <Link to={`/friend/${id}`}>Show Details </Link> <br/>
          {/* <button onClick={() => handleClick(id)} > Show Full</button> */}
        </div>
    );
};

export default Friends;