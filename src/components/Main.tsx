import { ReactElement } from "react";

interface MainProps {
    children: ReactElement[];
}

const Main = (props: MainProps) => {
  return (
    <main>{props.children}</main>
  )
}

export default Main