
export async function fetchEmployees() {
    try {
        const response = await fetch("../db.json");
        if (!response.ok) {
            throw new Error("Erro ao buscar dados dos funcionários");
        }
        return response.json();

    } catch (err) {
        console.log(err);
        return [];
    }
}