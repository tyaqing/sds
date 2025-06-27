import React from "react";
import { clsx } from "clsx";
import "./basicButtonContained.css";

export interface BasicButtonContainedProps extends Omit<React.ComponentPropsWithoutRef<"button">, "type"> {
  type?: "primary" | "auxillary" | "white";
  size?: "small" | "middle" | "large";
  state?: "normal" | "press" | "disable";
  icon?: boolean;
  text: string;
  ic?: React.ReactNode;
  buttonType?: "button" | "submit" | "reset";
}

export const BasicButtonContained = React.forwardRef<
  HTMLButtonElement,
  BasicButtonContainedProps
>(
  (
    {
      type = "primary",
      size = "middle",
      state = "normal",
      icon = false,
      text,
      ic,
      className,
      buttonType = "button",
      ...props
    },
    ref
  ) => {
    const classNames = clsx(
      "basic-button-contained",
      `basic-button-type-${type}`,
      `basic-button-size-${size}`,
      `basic-button-state-${state}`,
      {
        "basic-button-with-icon": icon,
        "basic-button-without-icon": !icon,
      },
      className
    );

    return (
      <button
        {...props}
        type={buttonType}
        ref={ref}
        className={classNames}
        disabled={state === "disable"}
        data-pressed={state === "press"}
      >
        <div className="basic-button-content">
          {icon && ic && <div className="basic-button-icon">{ic}</div>}
          <span className="basic-button-text">{text}</span>
        </div>
      </button>
    );
  }
);

BasicButtonContained.displayName = "BasicButtonContained"; 