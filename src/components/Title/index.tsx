
interface TitleProps {
    title: string
}

export default function Title({ title }: TitleProps) {
    return (
        <>
            <h1 className="text-blackDefault">{title}</h1>
        </>
    )
}