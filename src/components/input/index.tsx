"use client";

import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder?: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;

  options?: { label: string; value: string }[];
}

export function Input({
  name,
  placeholder,
  type,
  register,
  rules,
  error,
  options,
}: InputProps) {
  return (
    <>
      <h1 className="mr-auto text-xl text-blue-500 font-bold mt-5">
        {name?.toUpperCase()}
      </h1>
      {type === "radio" ? (
        <>
          <div className="flex flex-col space-y-2">
            {options?.map((option, index) => (
              <label
                key={Math.random()}
                className="flex items-center cursor-pointer hover:opacity-70 duration-150 text-zinc-950"
              >
                <input
                  type="radio"
                  value={option.value}
                  {...register(name, rules)}
                  className="w-4 h-4 mr-2"
                />
                {option.label}
              </label>
            ))}
          </div>
        </>
      ) : (
        <>
          <input
            className="w-full border-2 rounded-md h-11 px-2 bg-zinc-300"
            placeholder={placeholder}
            type={type}
            {...register(name, rules)}
            id={name}
          />
        </>
      )}
      {error && <p className="text-red-500 my-1">{error}</p>}
    </>
  );
}
