export function cutText(text: string, offset: number): string {
    if (text.length > offset) {
        return text.substring(0, offset) + '...';
    } 
    return text;
}