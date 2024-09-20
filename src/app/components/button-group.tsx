import React, { ReactNode } from 'react';
import clsx from 'clsx';

export const ButtonGroup = ({
  children,
  className,
  variant = "outlined",
  size = "small",
  orientation = "horizontal",
}: {
  children: ReactNode,
  className?: string,
  variant?: "contained" | "outlined",
  size?: "small" | "medium" | "large",
  orientation?: "horizontal" | "vertical",
}) => {
  const buttons = React.Children.toArray(children);

  return (
    <div className={clsx("flex items-center", className)}>
      {buttons.map((button, index) => {
        // ---------FIRST BUTTON----------------
        if (index === 0) {
          return (
            <div key={index} className="flex items-stretch">
              <div
                className={clsx(
                  "flex items-center px-3 py-2 bg-primary rounded-l-md shadow transition-all duration-300 ease-in-out",
                  size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "text-base",
                  variant === "contained"
                    ? "bg-primary text-white hover:bg-primary/80"
                    : "bg-transparent text-primary border border-primary/50 -mr-[1px] hover:border-primary hover:z-20 hover:bg-primary/10"
                )}
              >
                {button}
              </div>
              {variant === "contained" ? <div className="h-auto w-[1px]" /> : null}
            </div>
          );
        }

        // ---------LAST BUTTON----------------
        if (index === buttons.length - 1) {
          return (
            <div key={index}
              className={clsx(
                "px-3 py-2 bg-primary rounded-r-md shadow transition-all duration-300 ease-in-out",
                size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "text-base",
                variant === "contained"
                  ? "bg-primary text-white hover:bg-primary/80"
                  : "bg-transparent text-primary border border-primary/50 hover:border-primary hover:z-20 hover:bg-primary/10"
              )}
            >
              {button}
            </div>
          );
        }

        // ---------MIDDLE BUTTONS----------------
        return (
          <div key={index} className="flex items-stretch">
            <div
              className={clsx(
                "flex items-center px-3 py-2 bg-primary z-0 shadow transition-all duration-300 ease-in-out",
                size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "text-base",
                variant === "contained"
                  ? "bg-primary text-white  hover:bg-primary/80"
                  : "bg-transparent text-primary border border-primary/50 -mr-[1px] hover:border-primary hover:z-20 hover:bg-primary/10"
              )}
            >
              {button}
            </div>
            {variant === "contained" ? <div className="h-full w-[1px]" /> : null}
          </div>
        );
      })}
    </div>
  );
};

// Button component
export const Button = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={clsx("-mx-4 -my-2 px-4 py-2 cursor-pointer ", className)}>
      {children}
    </div>
  );
};
