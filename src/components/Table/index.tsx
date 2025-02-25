import React, { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { formatDate, formatPhoneNumber } from "../../utils/utils";

export interface EmployeesProps {
    id: number | string;
    name: string;
    job: string;
    admission_date: Date | string;
    phone: string;
    image: string;
}

interface TableProps {
    employees: EmployeesProps[];
}

export default function Table({ employees }: TableProps) {

    const [isOpen, setIsOpen] = useState<number | null>(null);

    function handleOpen(id: number) {
        setIsOpen(isOpen === id ? null : id);
    }

    return (
        <>
            { /* Table Web */}
            <div className="w-full overflow-x-auto hidden sm:block mt-5 bg-white shadow">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="text-white uppercase ">
                            <th className="px-6 py-3 text-left bg-bluePrimary rounded-tl-lg"><h2>Foto</h2></th>
                            <th className="px-6 py-3 text-left bg-bluePrimary"><h2>Nome</h2></th>
                            <th className="px-6 py-3 text-left bg-bluePrimary"><h2>Cargo</h2></th>
                            <th className="px-6 py-3 text-left bg-bluePrimary"><h2>Data de Admissão</h2></th>
                            <th className="px-6 py-3 text-left bg-bluePrimary rounded-tr-lg"><h2>Telefone</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((func) => (
                            <tr key={func.id} className="border-t text-black-default border-gray10 h-12 bg-white">
                                <td className="px-6 py-3">
                                    <img src={func.image} alt="Foto" className="w-8.5 h-8.5 rounded-full" />
                                </td>
                                <td className="px-6 py-3"><h3>{func.name}</h3></td>
                                <td className="px-6 py-3"><h3>{func.job}</h3></td>
                                <td className="px-6 py-3"><h3>{formatDate(func.admission_date)}</h3></td>
                                <td className="px-6 py-3"><h3>{formatPhoneNumber(func.phone)}</h3></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            { /* Table Mobile */}
            <div className="w-full p-2 overflow-x-auto mt-5 block sm:hidden">
                <table className="min-w-full bg-white">
                    <thead className="bg-bluePrimary">
                        <tr className="text-white uppercase items-center">
                            <th className="px-2 py-3 text-left bg-bluePrimary rounded-tl-lg">
                                <div className="flex items-center gap-4">
                                    <h2>Foto</h2>
                                    <h2>Nome</h2>
                                </div>
                            </th>

                            <th className="px-5 py-5 bg-bluePrimary rounded-tr-lg items-end justify-end">
                                <div className="flex items-end justify-end w-full h-full">
                                    <span className="w-2 h-2 rounded-full bg-white flex"></span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((func, id) => (
                            <React.Fragment key={func.id}>
                                <tr key={func.id} className="border-t border-gray10 h-12 bg-white">
                                    <td className="px-2 py-3">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={func.image}
                                                alt="Foto"
                                                className="w-8.5 h-8.5 min-w-8.5 min-h-8.5 rounded-full object-fill"
                                            />
                                            <h3>{func.name}</h3>
                                        </div>
                                    </td>

                                    <td className="px-2 py-3 flex items-end justify-end">

                                        {isOpen === id ? (
                                            <HiChevronUp
                                                onClick={() => handleOpen(id)}
                                                size="28px"
                                                color="#0500FF"
                                                className="cursor-pointer"
                                            />
                                        ) : (
                                            <HiChevronDown
                                                onClick={() => handleOpen(id)}
                                                size="28px"
                                                color="#0500FF"
                                                className="cursor-pointer"
                                            />
                                        )}

                                    </td>
                                </tr>
                                {isOpen === id && (
                                    <tr key={`${func.id}-details`}>
                                        <td colSpan={3} className="px-4 py-3 bg-white">
                                            <div className="flex flex-col gap-5">
                                                <section className="flex-col pp:flex-row flex justify-between items-center border-b border-gray10">
                                                    <h2>Cargo</h2>
                                                    <h3>{func.job}</h3>
                                                </section>

                                                <section className="flex-col pp:flex-row flex justify-between items-center border-b border-gray10">
                                                    <h2>Data de admissão</h2>
                                                    <h3>{formatDate(func.admission_date)}</h3>
                                                </section>

                                                <section className="flex-col pp:flex-row flex justify-between items-center">
                                                    <h2>Telefone</h2>
                                                    <h3>{formatPhoneNumber(func.phone)}</h3>
                                                </section>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}