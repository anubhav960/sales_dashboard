let Nav = (props)=>{

 
    let dummyFunction = ()=>{

    }

    return (
        <div onClick={props.onclick || dummyFunction} className="flex p-2 pl-6 hover:font-semibold hover:rounded-md text-gray-400 text-left mb-2 hover:bg-gray-300 hover:text-gray-900">
            {props.children}
            <div className="text-sm ml-2 text-inherit m-0 p-0">{props.title}</div>
            
            <button className={`${!props.notification && "hidden"}`}>{props.notificaion && `${props.notificaion}`}</button>
            <button className={`r-90 ml-10 ${props.onclick && !props.isOpened && "hidden"}`}>{props.onclick && props.isOpened && <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>}</button>
            <button className={`r-90 ml-10 ${props.onclick && props.isOpened && "hidden"}`}>{props.onclick && !props.isOpened && <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>}</button>
        </div>
    )

};

export default Nav;