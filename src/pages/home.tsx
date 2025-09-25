import { StudyList } from "../components/study-list";
import type { StudySession } from "../types/study-session";

interface HomeProps {
  studies: StudySession[];
  removeStudy: (id: string) => void;
}

export function Home({ studies, removeStudy }: HomeProps) {
    return (
        <>
            <h2 className="font-bold text-gray-600 text-xl mb-3">
                Página Inicial
            </h2>
            <p className="mb-4">Seus treinos aparecem aqui</p>

            <StudyList removeStudy={removeStudy} StudyList={studies} />
        </>
    );
}
