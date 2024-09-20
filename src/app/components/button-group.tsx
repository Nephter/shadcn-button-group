import React, { ReactNode } from 'react';
import clsx from 'clsx';

export const ButtonGroup = ({
  children,
  className,
  variant = "outlined",
  size = "large",
  orientation = "horizontal",
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
            <div key={index} className="flex items-stretch">
              <div
                className={clsx(
                  "flex items-center px-3 py-2 transition-all duration-200 ease-out",
                  size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "text-base",
                  variant === "contained"
                    ? "bg-primary text-white hover:bg-primary/90 shadow"
                    : variant === "outlined"
                      ? "bg-transparent text-primary border border-primary/50 hover:border-primary hover:z-20 hover:bg-primary-foreground"
                      : "bg-transparent text-primary border-none hover:text-primary/70", // For text variant
                  orientation === "horizontal" ? "rounded-l-md -mr-[2px]" : "rounded-t-md -mb-[1px]"
                )}
              >
                {button}
              </div>
              {variant === "contained" || "text" && orientation === "horizontal"
                ? <div className={`h-full w-[1px] ${orientation === "horizontal" ? "" : 'bg-primary'}`} />
                : null
              }
            </div>
          );
        }

        // ---------LAST BUTTON----------------
        if (index === buttons.length - 1) {
          return (
            <div key={index}
              className={clsx(
                "px-3 py-2 transition-all duration-200 ease-out",
                size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "text-base",
                variant === "contained"
                  ? "bg-primary text-white hover:bg-primary/90 shadow"
                  : variant === "outlined"
                    ? "bg-transparent text-primary border border-primary/50 hover:border-primary hover:z-20 hover:bg-primary-foreground"
                    : "bg-transparent text-primary border-none hover:text-primary/70", // For text variant
                orientation === "horizontal" ? "rounded-r-md" : "rounded-b-md"
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
                "flex items-center px-3 py-2 transition-all duration-200 ease-out",
                size === "small" ? "px-2 py-1" : size === "large" ? "px-4 py-2.5" : "text-base",
                variant === "contained"
                  ? "bg-primary text-white hover:bg-primary/90 shadow"
                  : variant === "outlined"
                    ? "bg-transparent text-primary border border-primary/50 hover:border-primary hover:z-20 hover:bg-primary-foreground"
                    : "bg-transparent text-primary border-none hover:text-primary/70", // For text variant
                orientation === "horizontal" ? "-mr-[2px]" : "-mb-[1px]"
              )}
            >
              {button}
            </div>

            {variant === "contained" || "text" && orientation === "horizontal"
              ? <div className={`h-full w-[1px] ${orientation === "horizontal" ? "" : 'bg-primary'}`} />
              : null
            }
          </div>
        );
      })}
    </div>
  );
};

// Button component
export const Button = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={clsx("-mx-4 -my-2 px-4 py-2 cursor-pointer hover:bg-secondary/70 hover:text-primary", className)}>
      {children}
    </div>
  );
};
