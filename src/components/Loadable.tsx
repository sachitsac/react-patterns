import { ReactElement, ReactNode } from "react";

/**
 * May be we can receive a zod schema to validate the data,
 * but thats something i need to think about if its really necessary
 * or maybe overkill / too many responsibility for this component
 */
interface LoadableProps {
  isLoading: boolean;
  isEmpty: boolean;
  renderEmpty: ReactElement;
  children: ReactNode;
}
export const Loadable = ({
  isLoading,
  isEmpty,
  renderEmpty,
  children,
}: LoadableProps): ReactElement => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isEmpty) {
    return renderEmpty;
  }

  return <>{children}</>;
};
