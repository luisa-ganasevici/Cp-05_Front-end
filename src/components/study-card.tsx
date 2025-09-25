import type { StudySession } from "../types/study-session";

interface StudyCardProps {
  studies: StudySession;
}

export function StudyCard({ studies }: StudyCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-4 w-3/5">
      <h2 className="text-lg font-bold text-blue-600">{studies.subject}</h2>
      <p className="text-gray-600">Duração: {studies.minutes} min</p>
      <p className="text-gray-600">Notas: {studies.notes}</p>
      <p className="text-gray-600">Data: {studies.date}</p>
    </div>
  );
}
