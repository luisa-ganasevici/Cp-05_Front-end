import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
            <div className="flex bg-gray-800 p-4 text-white items-center justify-center border-blue-400 border-solid border-b-4">
                <nav className="flex flex-row gap-x-10 text-lg">
                    <Link to="/" className="hover:text-yellow-600">Home</Link>
                    <Link to="/add" className="hover:text-yellow-600">Nova Sessão</Link>
                </nav>
            </div>

            <main>
                <Outlet />
            </main>
        </>
        

        
    )
}