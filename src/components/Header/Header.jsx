import './header.scss';

const Header = () => {
  return (
    <header className="w-full h-header transition-all duration-300 ease-out">
      <div className="header-inner container mx-auto flex justify-between items-center">
        <a href="#" className="text-5xl font-bold text-main-color">
          Bakery
        </a>
        <div className="mobile-toggle md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            style={{ fill: 'rgba(0, 0, 0, 1)' }}
          >
            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"></path>
          </svg>
        </div>
        <ul className="nav hidden flex-col md:flex md:flex-row md:block">
          <li className="active">
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Order</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
