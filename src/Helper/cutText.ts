export function cutText(text: string, offset: number): string {
    text ??= '';
    if (text.length > offset) {
        return text.substring(0, offset) + '...';
    } 
    return text;
}