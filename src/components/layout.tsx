import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
        
        <div>

            <nav>
                <Link to= "/">Home</Link>
                <Link to= "/add">Nova Sessão</Link>

            </nav>
            <main>
                <Outlet />
            </main>
        </div>
        
    )
}