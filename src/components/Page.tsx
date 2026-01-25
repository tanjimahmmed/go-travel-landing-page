import { ReactElement } from "react";

interface PageProps {
  children: ReactElement[];
}

function Page(props: PageProps) {
  return <div>{props.children}</div>;
}

export default Page;
