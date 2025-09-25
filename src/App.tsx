import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"
import { Home } from "./pages/home"
import { NovaSessao } from "./pages/nova-sessao"
import { NotFound } from "./pages/not-found"

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="/add" element={<NovaSessao/>}/>
            <Route path="*" element={<NotFound />} />
          </Route>

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
