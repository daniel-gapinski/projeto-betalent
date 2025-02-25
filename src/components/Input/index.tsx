import { IconType } from "react-icons";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    icon: IconType;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

export default function Input({ type, placeholder, value, icon: Icon, onChange }: InputProps) {
    return (
        <>
            <div className="relative mt-10 sm:mt-0 w-full">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    className="h-12 w-full sm:w-72 rounded-lg border absolute -top-6 right-0 px-3 border-gray10 bg-white outline-none"
                    onChange={onChange}
                />
                <Icon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            </div>
        </>
    )
}