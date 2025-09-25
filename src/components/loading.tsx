import { RefreshCcw } from "lucide-react";

export function Loading() {
  return (
    <div className="flex flex-col justify-center items-center text-center p-10">
      <p className="animate-pulse text-gray-500">Carregando... </p>
      <RefreshCcw className="animate-pulse text-gray-400 mt-4"/>
    </div>  
  );
}
