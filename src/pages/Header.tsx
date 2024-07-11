
export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-4 md:p-6">
      <div className="text-white text-lg font-bold">FitnessBrand</div>
      <nav className="flex space-x-4 md:space-x-6">
        <a href="#about" className="text-white font-medium hover:text-purple-400">About us</a>
        <a href="#products" className="text-white font-medium hover:text-purple-400">Products</a>
        <a href="#blog" className="text-white font-medium hover:text-purple-400">Blog</a>
      </nav>
    </header>
  );
}
