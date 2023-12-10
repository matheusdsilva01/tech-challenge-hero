import CreateTask from "./components/CreateTask"
import Menu from "./components/Menu"

const Header = () => {
  return (
    <header className="flex w-full flex-none flex-row justify-between overflow-hidden bg-violet-800 px-2 py-4 md:px-8 lg:px-24">
      <Menu />
      <CreateTask />
    </header>
  )
}

export default Header
