import { ReactNode } from "react"

interface JustifyProps {
    children: ReactNode
}

export default function Justify({ children }: JustifyProps) {
    return (
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4">
            {children}
        </div>
    )
}