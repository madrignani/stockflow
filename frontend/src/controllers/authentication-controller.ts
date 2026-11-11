import { ServiceError } from '../infra/service-error.ts';
import type { LoginView } from '../views/login-view.ts';
import { AuthenticationService } from '../services/authentication-service.ts';


export class AuthenticationController {

    private service = new AuthenticationService();
    private visao: LoginView;

    constructor(visao: LoginView) {
        this.visao = visao;
    }

    async login(login: string, senha: string): Promise<void> {
        try {
            await this.service.authenticate(login, senha);
            this.visao.redirectToIndex();
        } catch (error: any) {
            if (error instanceof ServiceError) {
                this.visao.showMessage( error.getProblems() );
            } else {
                this.visao.showMessage( [`Não foi possível completar o login: ${error.message}`] ); 
            }
        }
    }

}