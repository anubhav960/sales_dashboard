let Header = () => {
    return (
        <div className="my-6 pt-4 grid grid-cols-9">
            <div className=" col-span-5 font-bold text-[26px]"> Analytics</div>
            <div className="col-span-1 text-center flex flex-col justify-center">
                <span className="border-r-2 w-full text-sm text-gray-400"> Time Period </span>
            </div>
            <div className="col-span-1 text-center flex flex-col justify-center">
                <span className="w-full text-sm"> 
                    <span className="font-bold">Day </span> 
                    <span className="text-gray-400"> (24 hrs)</span>
                </span>
            </div>
            <div className=" col-span-2 flex justify-end">
                <button className="pt-1.5 bg-black flex flex-row justify-center text-white w-2/3 h-full rounded"> 
                    <span>Export as CVS</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7l4-4m0 0l4 4m-4-4v18" /></svg>
                </button>
            </div>

        </div>
    )
}

export default Header;