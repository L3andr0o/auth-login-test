import { useAuth } from "../Context/AuthContext"

export default function Home(){
    const {user, logout, loader} = useAuth();

    console.log(user)

    const handleLogout = async () =>{
        try {
            await logout();
        } catch (e) {
            console.log(e)
        }
    }


    if(loader) return <h1>loading</h1>

    return(
        <div>
            <h1>Welcome {user.displayName || user.email}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
} 