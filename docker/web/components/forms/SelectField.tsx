import { classNames } from "@/utils/strings";
import { ComponentProps } from "react";


type SelectFieldProps = ComponentProps<"select"> & {
  label?: string;
  inputPrefix?: string;
  labelClassName?: string;
}

export default function SelectField(props: SelectFieldProps) {
  return (
    <>
      {props.label &&
      <label htmlFor={props.id} className={classNames(props.labelClassName ?? "", "block text-sm font-medium leading-6 text-gray-900")}>
        {props.label ?? ''}
      </label>
      }
      <div className="mt-2">
        <select
          id={props.id}
          name={props.name}
          className={classNames(props.className ?? "", "block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6")}
          defaultValue={props.defaultValue}
        >
          {props.children}
        </select>
      </div>
    </>
  )
}