interface Props {
    title: string
    content: string
    commentsQty: number
    tags: string[]

    category: Category
}

export enum Category {
    TS = "TypeScript",
    JS = "JavaScript",
    P = "Python"
}

export function Destructuring({ title, content, commentsQty, tags, category }: Props) {
    return (
        <div>
            <>
                <h3>{title}</h3>
                <p>{content}</p>
                <p>{commentsQty}</p>
                {tags.map(tag => (
                    <span>#{tag} </span>
                ))}
                <h2>{category}</h2>
            </>
        </div>
    )
}