import { ReactElement } from "react"

interface PageProps {
    children: ReactElement;
}
const Page = (props: PageProps) => {
  return (
    <div>{props.children}</div>
  )
}

export default Page