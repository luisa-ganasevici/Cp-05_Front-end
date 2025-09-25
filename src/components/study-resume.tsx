import { Link } from "react-router-dom";
import type { StudySession } from "../types/study-session";

interface StudyResumeProps {
    studySession: StudySession;
    removeStudy: (id: string) => void;
}

export function StudyResume({ studySession, removeStudy }: StudyResumeProps) {
    return (
        <div className="w-full rounded-xl shadow px-3 py-4 flex flex-col gap-3 mb-3 bg-gray-800 text-gray-100">
            <div className="flex">
                <div className="flex flex-col flex-1">
                    <h2 className="font-bold text-white">{studySession.subject}</h2>
                    <p className="text-sm text-gray-400">{studySession.notes}</p>
                    <h3 className="text-sm mt-2">Data: {studySession.date}</h3>
                </div>

                <div className="flex flex-col w-32 min-h-16">
                    <Link
                            to={`/studySession/${studySession.id}`}
                            state={{ studySession }}
                            className="flex-1 flex items-center justify-center text-blue-500 hover:underline rounded-t border border-blue-500"
                        >detalhes
                    </Link>

                    <button
                            onClick={() => removeStudy(studySession.id)}
                            className="flex-1 flex items-center justify-center text-xs bg-red-600 text-white border rounded-b"
                        >Remover treino
                    </button>
                </div>
            </div>
        </div>
  );
}
