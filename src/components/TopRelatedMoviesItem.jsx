export function TopRelatedMoviesItem(props) {
    return (
        <li>
            <strong>{props.repository.original_title}</strong>
            <p>{props.repository.overview}</p>

            <p>{props.repository.release_date}</p>
        </li>
    )
}