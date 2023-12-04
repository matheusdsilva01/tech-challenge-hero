import CreateTask from "./components/CreateTask"

const Header = () => {
  return (
    <header className="flex w-full flex-row justify-between overflow-hidden bg-violet-800 px-24 py-4">
      <CreateTask />
    </header>
  )
}

export default Header
