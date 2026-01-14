import { ReactElement } from "react"

interface HeaderProps {
    children: ReactElement[];
}
function Header(props: HeaderProps) {
  return (
    <header className="px-24 pt-8 pb-23">{props.children}</header>
  )
}

export default Header