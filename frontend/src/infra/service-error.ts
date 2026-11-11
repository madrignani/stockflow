export class ServiceError extends Error {

    private problems: string[];

    constructor(problems: string[]) {
        super(problems[0]);
        this.problems = problems;
    }

    getProblems(): string[] {
        return this.problems;
    }

}