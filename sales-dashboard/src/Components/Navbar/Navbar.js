
let Navbar = () => {
  return (
    <nav className="grid grid-cols-12 pt-2 pb-3 pl-5 border-b-2 border-grey-400">
      <svg
        className="w-6 h-6 absolute top-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
      <input
        type="text"
        className="p-2 border-r-2 w-full col-span-8 pl-8 focus:outline-none"
        placeholder="Search for data,user,docs"
      ></input>

      <div className="flex flex-col justify-center col-span-1 text-center">
        <span className=" text-gray-400 border-r-2 text-sm">Team</span>
      </div>
      <div className="flex flex-col justify-center col-span-2 text-center">
        <div className="text-sm flex ml-4 content-center">
          <span className="mr-2 font-bold">Tearaiders</span> <svg className="w-4 h-4 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg> 
        </div>
      </div>
      <div className="col-span-1 flex flex-row justify-end pr-4 mt-2">
        <svg
          className="w-6 h-6 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <svg className="w-6 h-6 mx-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg></div>
    </nav>
  );
};

export default Navbar;
