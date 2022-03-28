interface TopRelatedMoviesItemProps {
    repository: {
        results: {
            original_title: string;
            overview: string;
            release_date: string;
            vote_average: string
        }
    }
}

export function TopRelatedMoviesItem(props: TopRelatedMoviesItemProps) {
    return (
        <li>
            <strong>{props.repository.results.original_title}</strong>
            <p>{props.repository.results.overview}</p>

            <p>{props.repository.results.release_date}</p>

            <p>Nota: {props.repository.results.vote_average}</p>


        </li>
    )
}