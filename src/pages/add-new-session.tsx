import { useMemo } from "react";
import type { StudySession } from "../types/study-session";
import { StudySessionForm } from "../components/study-session-form";


interface AddNovaSessao {
  studies: StudySession[];
  onAdd: (studySession: StudySession) => void;
}

export function NovaSessao({ onAdd, studies}: AddNovaSessao){
  const studySessionTotal = useMemo(() => {
    return studies.length;
  }, [studies]);

  const studyMinutes = useMemo(() => {
    let studyMinutes: number = 0;

    studies.forEach((studySession) => {
      studyMinutes += studySession.minutes;
    });

    const hours = Math.floor(studyMinutes / 60);
    const minutes = studyMinutes % 60;

    return `${hours}h${minutes}min`;
  }, [studies]);

  return (
    <>
      <h2 className="font-bold text-blue-500 text-xl mb-3">
        Adicionar novo conteúdo de estudos
      </h2>

      <p className="font-bold text-gray-600">
        Total de conteúdos: {studySessionTotal}
      </p>

      <p>Tempo de estudo: {studyMinutes}</p>

      <StudySessionForm onAdd={onAdd} />
    </>
  );  
}