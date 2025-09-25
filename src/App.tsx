import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import { lazy, Suspense, useCallback, useState } from "react"
import type { StudySession } from "./types/study-session"
import { Fallback } from "./components/fallback"
import { ErrorBoundary } from "react-error-boundary"
import { Loading } from "./components/loading"

const Home = lazy(() =>
  import("./pages/home").then((m) => ({ default: m.Home }))
);

const NotFound = lazy(() =>
  import("./pages/not-found").then((m) => ({ default: m.NotFound }))
);

const NovaSessao = lazy(() =>
  import("./pages/add-new-session").then((m) => ({ default: m.NovaSessao }))
);

const StudyDetails = lazy(() =>
  import("./pages/study-details").then((m) => ({ default: m.StudyDetails }))
);

function App() {
  const [studies, setStudies] = useState<StudySession[]>([]);

  const removeStudySession = useCallback((id: string) => {
    const studyToDelete = studies.findIndex((value) => {
      return value.id === id;
    });

    const updatedStudies = [...studies];

    updatedStudies.splice(studyToDelete, 1);

    setStudies(updatedStudies);
  }, [studies]);

   // Renderiza somente uma vez
  const addStudySession = useCallback((studySession: StudySession) => {
    setStudies((prev) => [...prev, studySession]);
  }, []);

  

  return (
    <>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={Fallback}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route
                index element={
                  <Home studies={studies} removeStudy={removeStudySession}/>}/>
                <Route
                  path="/add"
                  element={<NovaSessao onAdd={addStudySession}
                  studies={studies}/>}/>
                <Route path="/session/:id" element={<StudyDetails />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
