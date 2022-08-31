const Header = () => {
  return (
    <header className="bg-stone-400 bg-opacity-95 text-white shadow-md fixed top-0 right-0 left-0 z-50">
      <nav className="flex justify-between items-center">
        <div className="pl-5 py-4">
          <a className="text-2xl font-extrabold text-lime-900" href="./">
            Benza<span className="font-thin text-slate-900">says</span>
          </a>
        </div>
          
        <div
          className="bg-gray-900 p-3"
        >
          <button
            className=""
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navigation"
            aria-controls="navigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
