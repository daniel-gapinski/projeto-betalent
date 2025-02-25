
export function formatDate(date: string| Date) {
    const newDate = new Date(date).toLocaleDateString('pt-BR');
    return newDate;
}

export function formatPhoneNumber(phone: string) {
    const code = phone.substring(0, 2);
    const areaCode = phone.substring(2, 4);
    const firstPart = phone.substring(4, 9);
    const secondPart = phone.substring(9);

    return `+${code} (${areaCode}) ${firstPart}-${secondPart}`;
}
