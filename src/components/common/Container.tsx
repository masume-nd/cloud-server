import { HTMLAttributes, ReactNode } from "react";

interface CommonContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const CommonContainer = ({ children, ...props }: CommonContainerProps) => {
  return (
    <div className="container mx-auto flex items-center justify-between" {...props}>
      {children}
    </div>
  );
};

export default CommonContainer;