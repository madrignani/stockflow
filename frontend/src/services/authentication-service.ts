import { API_URL } from '../config/api-route.ts';
import { ServiceError } from '../infra/service-error.ts';
import { normalizeMessages } from '../helpers/normalize-messages.ts';
import { initializeCsrfProtection, getCsrfToken } from '../infra/csrf.ts';


export class AuthenticationService {

    async authenticate(email: string, password: string): Promise<void> {
        await initializeCsrfProtection();
        const csrfToken = getCsrfToken();
        const response = await fetch( `${API_URL}/login`, {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'Content-Type': 'application/json',
                'X-XSRF-TOKEN': csrfToken
            },
            body: JSON.stringify( { email, password } )
        } );
        if (!response.ok) {
            const responseData = await response.json();
            throw new ServiceError( normalizeMessages(responseData.message) );
        }
    }

    async logout(): Promise<void> {
        await initializeCsrfProtection();
        const csrfToken = getCsrfToken();
        const response = await fetch( `${API_URL}/logout`, {
            method: 'POST',
            credentials: 'include',
            headers: { 
                'X-XSRF-TOKEN': csrfToken
            }
        } );
        if (!response.ok) {
            const responseData = await response.json();
            throw new ServiceError( normalizeMessages(responseData.message) );
        }
    }

}