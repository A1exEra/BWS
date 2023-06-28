import {
  MouseEventHandler,
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  PromiseLikeOfReactNode,
} from 'react';
import styles from './Button.module.scss';
// import { StyledButton } from './Button.styled';

const Button = (props: {
  className: any;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  children:
    | string
    | number
    | boolean
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal
    | PromiseLikeOfReactNode
    | null
    | undefined;
}) => {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
