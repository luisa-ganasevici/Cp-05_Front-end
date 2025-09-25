import type { StudySession } from "../types/study-session";

interface StudyCardProps {
  studies: StudySession;
}

export function StudyCard({ studies }: StudyCardProps) {
  return (
    <div className="bg-gray-800 shadow rounded-lg p-4 w-3/5">
      <h2 className="text-lg font-bold text-blue-500">{studies.subject}</h2>
      <p className="text-white">Notas: <span className="text-gray-300">{studies.notes}</span></p>  
      <p className="text-white">Duração: <span className="text-gray-300">{studies.minutes} min</span></p>
      <p className="text-white">Data: <span className="text-gray-300">{studies.date}</span></p>
    </div>
  );
}
