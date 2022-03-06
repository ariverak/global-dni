declare function clean(dni: string): string;
declare function validate(dni: string): boolean;
declare function format(dni: string): string;

export const CL = {clean, validate, format}
export const PE = {clean, validate, format}
export const ES = {clean, validate, format}