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
            <main className="flex items-center justify-center bg-gray-100 mt-4 mb-4">
                <section className="flex flex-col items-center justify-center bg-white p-4 w-1/2 rounded-2xl">
                    <Outlet />
                </section>
            </main>
        </>
        

        
    )
}