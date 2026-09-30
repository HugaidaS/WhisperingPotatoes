import { Link } from "@tanstack/react-router"

const Header = () => {
  return (
    <header className="flex gap-2.5 bg-gray-500 p-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/career">Career</Link>
    </header>
  )
}
export default Header
