import { Link, useParams } from "react-router-dom"
import { Suspense, useEffect, useState } from "react"


export default function Movie() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})


    useEffect(() => {
        try {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d713a396177b4eba2ea208a615ab1016`)
                .then(response => response.json())
                .then(data => {
                    setMovie(data)
                })
        } catch (error) {
            console.log(error)
        }

    })

    const oneMovie = (
        <div data-testid="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} data-testid="movie-poster" />

            <h2 className="font-[700] text-[1.125rem]" data-testid="movie-title">{movie?.title}</h2>

            <small className="flex items-center gap-4 font-[700] text-lg" data-testid="movie-release-date">{movie?.release_date?.slice(0, 4)}</small>

            <small className="font-[600] text-lg" data-testid="movie-runtime">{movie.runtime}mins</small>

            <p data-testid="movie-overview">{movie?.overview}</p>
        </div>
    )


    return (
        <section className="text-[#111827] min-h-screen py-12 px-4">
            <article className="w-full mx-auto max-w-[500px] flex flex-col items-start justify-center gap-4">

                <nav className="mb-8">
                    <ul className="m-0 list-none">
                        <li><Link to="/" className="font-[600] hover:underline text-blue-700 inline-block mb-2 ">Home</Link></li>
                        <li><Link to="/movies" className="font-[600] hover:underline text-blue-700">Movies</Link></li>
                    </ul>
                </nav>

                <Suspense fallback={<h2 className="block text-2xl font-[700] text-[#111827] w-full text-center mt-12">Loading...</h2>}>
                    {oneMovie}
                </Suspense>
            </article>
        </section>
    )
}
