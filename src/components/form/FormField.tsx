"use client";
import { forwardRef } from "react";

type FormFieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  errors?: { message?: string };
} & React.InputHTMLAttributes<HTMLInputElement>;

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, placeholder, type = "text", errors, ...props }, ref) => {
    const errorMessage = errors?.message;

    return (
      <div className="w-full">
        {/* Label & Error */}
        <div className="flex justify-between mb-2">
          <label
            htmlFor={label}
            className={`text-xs font-bold ${
              errorMessage ? "text-red-500" : "text-black"
            }`}
          >
            {label}
          </label>
          {errorMessage && (
            <span
              role="alert"
              aria-live="polite"
              className="text-xs text-red-500"
            >
              {errorMessage}
            </span>
          )}
        </div>

        {/* Input */}
        <input
          ref={ref}
          id={label}
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-md outline-none transition-colors placeholder:text-gray-300 duration-200
            ${errorMessage ? "border-red-500" : "border-gray-300"}
            focus:border-black
          `}
          {...props}
        />
      </div>
    );
  }
);

FormField.displayName = "FormField";

export default FormField;
