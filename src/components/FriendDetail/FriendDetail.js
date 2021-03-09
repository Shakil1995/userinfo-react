import React, { useEffect ,useState} from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendID}=useParams();
    const [friend,setFriend]=useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/users/${friendID}`;
         fetch(url)
         .then(res => res.json())
         .then(data => setFriend(data));

    },[])
    return (
        <div>
            <h3>This is friend Components : {friendID}</h3>

            <h1> {friend.name}</h1>
            <p>Email: {friend.email}</p>
            <p>Phone : {friend.phone}</p>
            <p>website : {friend.website}</p>
        </div>
    );
};

export default FriendDetail;