interface TopRelatedMoviesItemProps {
    repository: {        
        title: string;
        overview: string;
        release_date: string;
        vote_average: string;
        poster_path: string;               
    }
}

export function TopRelatedMoviesItem(props: TopRelatedMoviesItemProps) {
    return (
        <li>
            <strong>{props.repository.title}</strong>

            <p>Overwiew: {props.repository.overview}</p>

            <p>Release Data: {props.repository.release_date}</p>

            <p>Nota: {props.repository.vote_average}</p>

            <p>Poster: {props.repository.poster_path}</p>
        </li>
    )
}