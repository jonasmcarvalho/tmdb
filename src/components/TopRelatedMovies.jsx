import { useEffect, useState } from "react";
import { TopRelatedMoviesItem } from "./TopRelatedMoviesItem";


export function TopRelatedMovies() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=de1fe62e293e7bb93774da73df634cb3&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setRepositories(data))

    }, [])
    console.log(repositories.results)

    return (
        <section className="repository-list">
            <h1>Top Related Movies</h1>
            <ul>
                {repositories.results.map(repository => {
                    return <TopRelatedMoviesItem key={repository.original_title} repository={repository} />
                })}
            </ul>
        </section>
    )
}