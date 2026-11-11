import type { LoginView } from './login-view.ts';
import { AuthenticationController } from '../controllers/authentication-controller.ts';


export class LoginViewHtml implements LoginView {

    private controller: AuthenticationController;

    private emailInput = document.getElementById("email") as HTMLInputElement;
    private passwordInput = document.getElementById("password") as HTMLInputElement;
    private form = document.querySelector("form") as HTMLFormElement;

    constructor() {
        this.controller = new AuthenticationController(this);
    }

    initialize(): void {
        this.form.addEventListener( "submit", (event) => {
            event.preventDefault();
            const email = this.emailInput.value.trim();
            const password = this.passwordInput.value;
            this.controller.login(email, password);
        } );
    }

    redirectToIndex(): void {
        window.location.href = './index.html';
    }

    showMessage( messages: string[] ): void {
        const text = messages.join("\n");
        const dialog = document.getElementById("messageModal") as HTMLDialogElement;
        const p = document.getElementById("messageModalText") as HTMLParagraphElement;
        const okButton = document.getElementById("messageModalOk") as HTMLButtonElement;
        p.textContent = text;
        okButton.addEventListener( "click", () => dialog.close() );
        dialog.showModal();
    }

}