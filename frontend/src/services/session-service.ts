import { API_URL } from '../config/api-route.ts';
import { ServiceError } from '../infra/service-error.ts';
import { normalizeMessages } from '../helpers/normalize-messages.ts';


export class SessionService {
    async isAuthenticated(): Promise<void> {
        const response = await fetch( `${API_URL}/me`, {
            method: 'GET',
            credentials: 'include',
        } );
        if (!response.ok) {
            const responseData = await response.json();
            throw new ServiceError( normalizeMessages(responseData.message) );
        }
    }
}