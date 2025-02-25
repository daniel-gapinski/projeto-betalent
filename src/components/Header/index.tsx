import Logo from "../Logo";

export default function Header() {
    return (
        <>
        <header className="bg-white w-full shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center h-16 px-5">
                <Logo />
            </div>
        </header>
        </>
    )
}