import { Routes, Route } from "react-router-dom"
import Movies from "./components/movies/Movies"
import Home from "./components/home/Home"
import Movie from "./components/movie/Movie"
import Layout from "./components/layout/Layout"
import Error from "./components/error/Error"

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>

  )
}

export default App
