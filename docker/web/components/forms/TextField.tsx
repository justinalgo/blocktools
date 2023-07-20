import { classNames } from "@/utils/strings";
import { ComponentProps } from "react";


type TextFieldProps = ComponentProps<"input"> & {
  label?: string;
  inputPrefix?: string;
  labelClassName?: string;
  wrapperClassName?: string;
}

export default function(props: TextFieldProps) {
  return (
    <>
      {props.label &&
      <label htmlFor={props.id} className={classNames(props.labelClassName ?? '', "block text-sm font-medium leading-6 text-gray-900")}>
        {props.label}
      </label>
      }
      <div className="mt-2">
        <div className={classNames(props.wrapperClassName ?? "", "flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md bg-white")}>
          <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">{props.inputPrefix}</span>
          <input
            type={props.type ?? "text"}
            name={props.name}
            id={props.id}
            autoComplete={props.autoComplete}
            className={classNames(props.className ?? '', "block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6")}
            placeholder={props.placeholder}
            {...props}
          />
        </div>
      </div>
    </>
  )
}