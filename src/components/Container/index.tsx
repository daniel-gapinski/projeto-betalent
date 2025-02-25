import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode
}

export default function Container({children}: ContainerProps) {
    return (
        <section className="w-full mx-auto max-w-7xl px-5 py-10">
            {children}
        </section>
    )
}