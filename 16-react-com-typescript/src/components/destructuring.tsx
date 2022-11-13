interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]
}

export function Destructuring({ title, content, commentsQty, tags }: Props) {
    return (
        <div>
            <>
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{commentsQty}</p>
                {tags.map(tag => (
                    <span>#{tag} </span>
                ))}
            </>
        </div>
    )
}