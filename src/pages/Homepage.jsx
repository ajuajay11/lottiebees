 import { useEffect, useState } from "react";
//  import Profilepage from "../components/profilepage";
//  import Hoc from "../components/profilepage";
// import UserContext from "../context/createContext"; // import context
 import UseCallbcl from "../components/useCallback/index"
 import UseReducer from "../components/useReducer/index"
export default function Homepage() {
    // const [user, setUser] = useState([])
    const api = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10'
      useEffect(()=>{
        const fetchData =async()=>{
            const response = await fetch(api);
            console.log(response);
            const data = await response.json()
            console.log(data);
            // if(data.statusCode ==200){
            //     setUser(data.data.data || []); // Ensure it's an array
            // }
        }
        fetchData()
      },[])
    
  return (
    <>
    <UseCallbcl/>
    <UseReducer/>
        {/* <UserContext.Provider value={user}>
           <Profilepage/>
           <Hoc/>
        </UserContext.Provider> */}
    </>
  )
}

// useState and use useEffect

// useState = usestate is like react hook it act as varibale to store data and mutation as well;
// useffect = it is a react hook mainly used for mounting watch if u specify the user or if the user dtaa changes it ll clal the function, and destroy the event;