import { ReactElement, JSXElementConstructor } from "react";

// template for contact buttons
export default function ContactButton(props: {
  className: string;
  button: string | ReactElement<string, string | JSXElementConstructor<string>>;
}): JSX.Element {
  return <div className={props.className}>{props.button}</div>;
}
