interface ItemProps {
    params: {
        id: string;
    };
}
export default function Item({ params }: ItemProps): JSX.Element {
    const { id } = params;
    return <div>Item {id}</div>;
}