
import { SANCTUM_CSRF_URL } from '../config/api-route';
import { ServiceError } from '../infra/service-error.ts';
import { normalizeMessages } from '../helpers/normalize-messages.ts';


export async function initializeCsrfProtection(): Promise<void> {
    const response = await fetch( SANCTUM_CSRF_URL, {
        method: 'GET',
        credentials: 'include',
    } );
    if (!response.ok) {
        const responseData = await response.json();
        if (!responseData || responseData === '') {
            throw new ServiceError( [`Falha ao inicializar a proteção CSRF (HTTP ${response.status}).`] );
        }
        throw new ServiceError( normalizeMessages(responseData.message) );
    }
}

export function getCsrfToken(): string {
    const tokenCookie = document.cookie
        .split(';')
        .map(cookie => cookie.trim())
        .find(cookie => cookie.startsWith('XSRF-TOKEN='));
    if (!tokenCookie) {
        throw new ServiceError( ['Não foi possível preparar a autenticação. Atualize a página e tente novamente.'] );
    }
    return decodeURIComponent( tokenCookie.substring('XSRF-TOKEN='.length) );
}