import { FieldValues, Path, RegisterOptions, UseFormRegister, UseFormResetField } from "react-hook-form";

export type InputType = 'text' | 'email' | 'textarea';

export type InputProps<T extends FieldValues> = {
    type: InputType;
    placeholder: string;
    label: string;
    name: Path<T>;
    register: UseFormRegister<T>;
    value: string;
    resetField: UseFormResetField<T>;
    rules?: RegisterOptions<T>;
    error?: { message?: string; };
};
