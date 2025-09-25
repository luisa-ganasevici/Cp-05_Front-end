import { useMemo } from "react";
import type { StudySession } from "../types/study-session";
import { StudySessionForm } from "../components/study-session-form";

interface AddNovaSessao {
  studies: StudySession[];
  onAdd: (studySession: StudySession) => void;
}

export function NovaSessao({ onAdd, studies }: AddNovaSessao) {
  const studySessionTotal = useMemo(() => {
    return studies.length;
  }, [studies]);

  const totalMinutes = useMemo(() => {
    let minutes = 0;
    studies.forEach((studySession) => {
      minutes += studySession.minutes;
    });
    return minutes;
  }, [studies]);

  const studyMinutes = useMemo(() => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes}min`;
  }, [totalMinutes]);

  const mediaMinutes = useMemo(() => {
    if (studySessionTotal === 0) return 0;
    return totalMinutes / studySessionTotal;
  }, [totalMinutes, studySessionTotal]);

  return (
    <>
      <h2 className="font-bold text-blue-500 text-xl mb-3">
        Adicionar novo conteúdo de estudos
      </h2>

      <p className="font-bold text-gray-600">
        Total de conteúdos: {studySessionTotal}
      </p>

      <p>Tempo total de estudo: {studyMinutes}</p>

      <p className="text-gray-500">Média em minutos de cada conteúdo: {`${mediaMinutes.toFixed(2)} min`}</p>

      <StudySessionForm onAdd={onAdd} />
    </>
  );
}
