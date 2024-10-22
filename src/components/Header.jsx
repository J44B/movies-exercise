import { Navbar } from './';

export const Header = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <header className="flex flex-row align-center justify-between m-4 p-2 bg-gray-300">
      <img
        className="h-10 w-80"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg"
      />
      <div
        id="search"
        className="flex flex-row flex-nowrap gap-4 items-center border-3 rounded-md"
      >
        <Navbar />
        <input
          type="text"
          id="searchInput"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg p-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          onChange={handleSearchChange}
        />
      </div>
    </header>
  );
};
