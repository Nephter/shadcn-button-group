import React, { ReactNode } from 'react';
import clsx from 'clsx';

export const ButtonGroup = ({
  children,
  className,
  variant = "text",
  size = "large",
  orientation = "horizontal", // Added orientation prop
}: {
  children: ReactNode,
  className?: string,
  variant?: "contained" | "outlined" | "text",
  size?: "small" | "medium" | "large",
  orientation?: "horizontal" | "vertical",
}) => {
  const buttons = React.Children.toArray(children);

  return (
    <div
      className={clsx(
        "flex",
        orientation === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
    >
      {buttons.map((button, index) => {

        // ---------FIRST BUTTON----------------
        if (index === 0) {
          return (
            <div key={index} className={clsx(
              "flex items-stretch",
              orientation === "horizontal" ? 'flex-row' : 'flex-col'
            )}>
              <div
                className={clsx(
                  "flex items-center transition-all duration-300 ease-in-out",
                  size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "px-3 py-2",
                  variant === "contained"
                    ? "bg-primary text-white hover:bg-primary/80 shadow"
                    : variant === "outlined" ?
                      "bg-transparent text-primary border border-primary/50 hover:border-primary hover:z-20 hover:bg-primary/10"
                      : "bg-transparent text-primary hover:z-20 hover:bg-primary/10",
                  orientation === "horizontal" ? "rounded-l-md -mr-[1px]" : "rounded-t-md -mb-[1px]"
                )}
              >
                {button}
              </div>
              {variant === "contained" ? (
                <div className={clsx(
                  "bg-secondary",
                  orientation === "horizontal" ? "h-auto w-[1px] " : "w-full h-[1px] "
                )} />
              ) :
                variant === "text" ?
                  <div className={clsx(
                    "bg-primary",
                    orientation === "horizontal" ? "h-auto w-[1px] " : "w-full h-[1px] "
                  )} />
                  : null}
            </div>
          );
        }

        // ---------LAST BUTTON----------------
        if (index === buttons.length - 1) {
          return (
            <div key={index}
              className={clsx(
                "transition-all duration-300 ease-in-out",
                size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "px-3 py-2",
                variant === "contained"
                  ? "bg-primary text-white hover:bg-primary/80 shadow"
                  : variant === "outlined" ? "bg-transparent text-primary border border-primary/50 hover:border-primary hover:z-20 hover:bg-primary/10"
                    : "bg-transparent text-primary hover:z-20 hover:bg-primary/10",
                orientation === "horizontal" ? "rounded-r-md" : "rounded-b-md"
              )}
            >
              {button}
            </div>
          );
        }

        // ---------MIDDLE BUTTONS----------------
        return (
          <div key={index} className={clsx(
            "flex items-stretch",
            orientation === "horizontal" ? 'flex-row' : 'flex-col'
          )}>
            <div
              className={clsx(
                "flex items-center transition-all duration-300 ease-in-out",
                size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "px-3 py-2",
                variant === "contained"
                  ? "bg-primary text-white hover:bg-primary/80 shadow"
                  : variant === "outlined" ? "bg-transparent text-primary border border-primary/50 hover:border-primary hover:z-20 hover:bg-primary/10"
                    : "bg-transparent text-primary hover:z-20 hover:bg-primary/10",
                orientation === "horizontal" ? "-mr-[1px]" : "-mb-[1px]"
              )}
            >
              {button}
            </div>
            {variant === "contained" ? (
              <div className={clsx(
                "bg-secondary",
                orientation === "horizontal" ? "h-auto w-[1px] " : "w-full h-[1px] "
              )} />
            ) :
              variant === "text" ?
                <div className={clsx(
                  "bg-primary",
                  orientation === "horizontal" ? "h-auto w-[1px] " : "w-full h-[1px] "
                )} />
                : null}
          </div>
        );
      })}
    </div>
  );
};

export const Button = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={clsx("-mx-4 -my-2 px-4 py-2 cursor-pointer", className)}>
      {children}
    </div>
  );
};
