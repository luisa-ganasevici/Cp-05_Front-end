import { Link } from "react-router-dom";
import { Frown } from 'lucide-react';

export function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl mt-10 mb-5 text-red-600">404 - Página não encontrada</h1>

      <Frown className="w-60 h-60 mb-6 text-gray-500" strokeWidth={1.75}/>

      <p className="mb-2">Mas tudo bem</p>

      <Link
        className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600"
        to="/"
      >
        Clique aqui para voltar para a Home
      </Link>
    </div>
  );
}
