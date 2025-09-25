import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import { Home } from "./pages/home"
import { NovaSessao } from "./pages/add-nova-sessao"
import { NotFound } from "./pages/not-found"
import { useCallback, useState } from "react"
import type { StudySession } from "./types/study-session"

function App() {
  const [studies, setStudies] = useState<StudySession[]>([]);

  const removeStudySession = useCallback((id: string) => {
    const studyToDelete = studies.findIndex((value) => {
      return value.id === id;
    });

    const updatedStudies = [...studies];

    updatedStudies.splice(studyToDelete, 1);

    setStudies(updatedStudies);
  }, []);

   // Renderiza somente uma vez
  const addStudySession = useCallback((studySession: StudySession) => {
    setStudies((prev) => [...prev, studySession]);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route
              path="/add"
              element={<NovaSessao onAdd={addStudySession}
              studies={studies}/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
