import { useEffect, useState } from "react";
import { TopRelatedMoviesItem } from "./TopRelatedMoviesItem";

interface Repository {
    results: {
        original_title: string;
        overview: string;
        release_date: string;
        vote_average: string
    }
}

export function TopRelatedMovies() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=de1fe62e293e7bb93774da73df634cb3&language=en-US&page=1')
            .then(response => response.json())
            .then(data => setRepositories(data))


    }, [])

    //let dataRepositories = Array.from(repositories)

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Top Related Movies 2</h1>
            <ul>
                {repositories.map(repository => {
                    return <TopRelatedMoviesItem key={repository.results.original_title} repository={repository} />
                })}
            </ul>
        </section>
    )
}