

export function formatDate(dateString: any, locale: string = "en-US") {
    const date = new Date(dateString);

    return date.toLocaleString(locale, {
        year: "numeric",
        month: "short",   // "Jul"
        day: "2-digit",   // "18"
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,     // 12-hour clock (2:11 PM)
    });
}
