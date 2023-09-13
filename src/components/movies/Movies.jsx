import { useState, useEffect } from "react"
import chevron from "./assets/chevron_right.png"
import { Link, useLocation } from "react-router-dom";


export default function Movies() {
    const [movies, setMovies] = useState([])
    const location = useLocation()


    useEffect(() => {
        try {
            fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=d713a396177b4eba2ea208a615ab1016")
                .then(response => response.json())
                .then(data => {
                    setMovies(data.results)
                })
        } catch (error) {
            console.log(error)
        }

    })


    return (
        <section className="md:w-[90%] mx-auto py-12 px-4 md:px-0 bg-[#FFFFFF]">
            {location.pathname === "/movies" &&
                <nav className="mb-8">
                    <ul className="m-0 list-none">
                        <li><Link to="/" className="font-[600] hover:underline text-blue-700 inline-block ">Home</Link></li>
                    </ul>
                </nav>
            }

            <div className="flex justify-between items-center">
                <h2 className="font-[700] text-[36px] leading-[46px] text-[#000000]">Featured Movies</h2>
                <a href="#" className="text-[#BE123C] text-[18px] leading-[24px] font-[400] flex items-center gap-2">See more
                    <img src={chevron} alt="Chevron Right" />
                </a>
            </div>

            <article className="my-8 flex flex-col items-center justify-center">
                <ul className="text-[#000000] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8">
                    {movies.slice(0, 10).map(movie => (
                        <li key={movie.id} data-testid="movie-card">
                            <Link to={`/movies/${movie.id}`} className="flex flex-col items-start gap-2 text-[#111]">

                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className={movie.title} data-testid="movie-poster" />

                                <small className="text-[1rem] leading-4 font-[700]" data-testid="movie-release-date">{movie?.release_date?.slice(0, 4)}</small>

                                <h2 className="font-[700] text-[1.125rem]" data-testid="movie-title">{movie.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    )
}
