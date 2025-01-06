import { Link } from 'react-router-dom';
export function Logo() {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center">
      <Link to="/" onClick={handleLogoClick} className="flex items-center">
        <img 
          src="/DataHelp.eu.svg" 
          alt="DataHelp.eu"
          className="h-12 md:h-[3.72rem] w-auto"
        />
      </Link>
    </div>
  );
}
