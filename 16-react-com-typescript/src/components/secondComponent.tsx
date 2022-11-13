interface Props {
    name: string
}

export function SecondComponent(props: Props) {
    return (
        <div>
            <h3>{props.name} componente</h3>
        </div>
    )
}