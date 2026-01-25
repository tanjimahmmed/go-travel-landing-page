import { ReactElement } from "react";

interface MainProps {
  children: ReactElement[];
}

export default function Main(props: MainProps) {
  return <main>{props.children}</main>;
}
