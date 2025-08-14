import { useContext } from "react";
import UserContext from "../context/createContext";
export default function profilepage(){
    const userData = useContext(UserContext)
    return (
        <>
         {console.log(userData,'useContext') }
         {userData.map((user, i)=>(
            <div key={i}>
                {user.email}
            </div>
         ))}
         </>
    )
}

// useContext i didnt use much , mainly use redux, in somecase i used this before , we can set the data globally and access it in any component under the Provider, and we can avoid prop drilling as well if we use usecontext;
// if i use api call on homepage if ll acces only after mounted on homepage 

// Prop drilling happens when you pass data through multiple layers of components, even if intermediate components don’t need it, just so a deeply nested child can access it.

// Example:

// function App() {
//   const user = { name: "John" };
//   return <Parent user={user} />;
// }

// function Parent({ user }) {
//   return <Child user={user} />;
// }

// function Child({ user }) {
//   return <GrandChild user={user} />;
// }

// function GrandChild({ user }) {
//   return <p>{user.name}</p>; // only this component actually needs the data
// }