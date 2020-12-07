import React,{useEffect,useState} from 'react'
import axios from 'axios'

const UserList=()=> {
  const [users, setUsers]=useState([])
const getUsers = async () => {
  try {
const userUsers = await axios.get("https://jsonplaceholder.typicode.com/users")
    
    setUsers(userUsers.data);  
  
  } catch (err) {
    console.error(err.message);
  }
};
  
  useEffect(()=>{
    
    getUsers()
},[])  
return (
    <div className='projects-container'>
    
       {users.map(user=>(
         <ul  className='project-card' key ={user.id}>
            
            <li> name: {user.name}</li>
            <li> username: {user.username} </li>
            <li> email: {user.email} </li>
            <li> phone: {user.phone} </li> 
         <li>website: {user.website}  </li> 
          <ul> <h6>ADDRESS</h6>
          <li>  street: {user.address.street}  </li>
           
          <li>    suite:  {user.address.suite} </li>
          <li> city: {user.address.city}  </li>
          <li> zipcode: {user.address.zipcode}  </li>
         
          </ul>
          <ul> <h6>GEO</h6>
          <li> lat: {user.address.geo.lat}   </li>
          <li> ing: {user.address.geo.lng}  </li>
   </ul>
           
      
            
            <ul> <h6>COMPANY</h6>
            <li> name: {user.company.name}   </li>
            <li>catchPhrase :{user.company.catchPhrase} </li>
            <li> bs: {user.company.bs}  </li>
           </ul>
           </ul>
       ))}
     
    </div>
  );
}

export default UserList;