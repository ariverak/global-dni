interface DniOptions {
    format: (dni: string) => string;
    validate: (dni: string) => boolean;
    clean: (dni: string) => string;
}

export const CL: DniOptions
export const PE: DniOptions;
export const ES: DniOptions;
export const PY: DniOptions;