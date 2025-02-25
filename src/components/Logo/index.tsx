import logoImg from "../../assets/Logo.png";

export default function Logo() {
    return (
        <div>
            <img src={logoImg} alt="Logomarca da empresa" className="object-fill" />
        </div>
    )
}