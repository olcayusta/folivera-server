declare global {
    namespace NodeJS {
        interface Global {
            myConfig: {
                name: string;
            }
        }
    }
}
