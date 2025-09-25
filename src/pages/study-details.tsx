import { useLocation, useParams } from "react-router-dom";
import { StudyCard } from "../components/study-card";

export function StudyDetails() {
  const { id } = useParams();
  const location = useLocation();

  // se não existir state, garante que não quebre
  const study = location.state?.study;

  if (!study) {
    return (
      <p className="text-red-600">
        Nenhum treino encontrado para o ID {id}.  
        Tente voltar para a lista inicial.
      </p>
    );
  }

  return (
    <>
      <h2 className="font-bold text-gray-600 text-xl mb-3">
        Detalhes do treino - ID {id}
      </h2>

      <StudyCard studies={study} />
    </>
  );
}
