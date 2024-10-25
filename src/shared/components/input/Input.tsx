import { useRef } from "react";
import { FieldValues, Path } from "react-hook-form";
import classNames from "classnames";
import { Icon } from "@components/icon";
import { uuid } from "@utils";

import { InputProps } from "./index";
import "./input.scss";

const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const {
    type,
    placeholder,
    label,
    name,
    register,
    value,
    resetField,
    rules,
    error,
  } = props;
  const id = uuid();
  const isTextareaElement = useRef<boolean>(type === "textarea");

  const getCssClassMap = () =>
    classNames("input", rules?.required && "input--required");

  const clearInput = (field: Path<T>) => resetField(field);

  return (
    <div className={getCssClassMap()}>
      {label && (
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <div className={classNames("input__wrapper", error && "input__error")}>
        {isTextareaElement.current ? (
          <textarea
            id={id}
            placeholder={placeholder}
            rows={10}
            autoComplete="off"
            {...register(name, { ...rules })}
          ></textarea>
        ) : (
          <input
            id={id}
            type={type}
            placeholder={placeholder}
            autoComplete="off"
            {...register(name, { ...rules })}
          />
        )}
        <Icon
          className={classNames(
            "input__clear-icon",
            value && "input__clear-icon--visible"
          )}
          icon="xmark-solid"
          onClick={() => clearInput(name)}
        />
      </div>
      <small
        className={classNames(
          "input__error-text",
          error?.message && "input__error-text--visible"
        )}
      >
        {error?.message}
      </small>
    </div>
  );
};

export default Input;
