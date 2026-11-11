export function normalizeMessages(message: unknown): string[] {
    if (typeof message === 'string') {
        return [message];
    }
    if (Array.isArray(message)) {
        return message;
    }
    return ['Ocorreu um erro inesperado.'];
}