import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-col relative z-[2]">
      <header className="bg-transparent py-4 px-6">
        
        <div className="container mx-auto flex justify-between items-center text-white">
          프로젝트 
          <nav>
            <ul className="flex space-x-4 title-small text-white">
              <Link to="/">Home</Link>
              <Link to="blog">Memo</Link>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
}
export default Header;