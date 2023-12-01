import Button from "../button"

const Header = () => {
  return (
    <header className="flex w-full flex-row justify-between overflow-hidden bg-violet-800 px-24 py-4">
      <Button
        className="ml-auto rounded-xl px-6 py-4 text-xs font-medium"
        color="violet"
      >
        + Novo Card
      </Button>
    </header>
  )
}

export default Header
