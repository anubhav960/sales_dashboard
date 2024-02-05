import Nav from "./Nav/Nav"
import "./Siderbar.css"
import { useState } from "react"

let Sidebar = (props)=>{

    let [showDocumentDrop, changeShowDrop] = useState(false);
    
    return (
        <div className="pl-3 pt-1 pr-8 border-r-2 border-grey-400 flex flex-col justify-center text-center">
            <div className="border-b-2 border-grey-400 pb-3 pl-4 flex flex-row">
                <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                <div className="pl-2">
                    <div className="text-sm text-gray-900 text-[19px] font-bold">OnTheGo</div>
                    <div className="text-gray-400 text-sm">sales solution</div>
                </div>
            </div>
            <div style={{height: "65vh"}}>
                <div className="pt-3 border-b-2 border-grey-400 mb-3">
                    <table className="table-fixed w-full text-center">
                        <tbody>
                            <tr>
                                <div className="p-2 pl-6 flex content-center hover:font-semibold hover:rounded-md text-gray-400 text-left mb-2 hover:bg-gray-300 hover:text-gray-900">

                                    <td >
                                        <div className="flex justify-center content-center">
                                            <svg className="text-gray-900" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                        </div>
                                    </td>
                                    <td><div className="text-sm ml-2 text-inherit m-0 p-0">Dashboard</div></td>
                                    <td><div className="text-sm ml-2 text-inherit m-0 p-0"></div></td>
                                </div>
                            </tr>
                            <tr>
                                <div className="p-2 pl-6 flex content-center hover:font-semibold hover:rounded-md text-gray-400 text-left mb-2 hover:bg-gray-300 hover:text-gray-900">
                                    <td >
                                        <div className="flex justify-center content-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-graph-up text-gray-900 font-bold" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                                            </svg>    
                                        </div>
                                    </td>
                                    <td><div className="text-sm ml-2 text-inherit m-0 p-0">Analytics</div></td>
                                    <td></td>
                                </div>
                            </tr>
                            <tr>
                                <div className="p-2 pl-6 flex content-center hover:font-semibold hover:rounded-md text-gray-400 text-left mb-2 hover:bg-gray-300 hover:text-gray-900">
                                    <td>
                                        <div className="flex justify-center content-center">
                                            
                                            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 512 512"><path d="M272 288h-64C163.8 288 128 323.8 128 368C128 376.8 135.2 384 144 384h192c8.836 0 16-7.164 16-16C352 323.8 316.2 288 272 288zM240 256c35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64S204.7 256 240 256zM496 320H480v96h16c8.836 0 16-7.164 16-16v-64C512 327.2 504.8 320 496 320zM496 64H480v96h16C504.8 160 512 152.8 512 144v-64C512 71.16 504.8 64 496 64zM496 192H480v96h16C504.8 288 512 280.8 512 272v-64C512 199.2 504.8 192 496 192zM384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM400 448c0 8.836-7.164 16-16 16H96c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h288c8.836 0 16 7.162 16 16V448z"/></svg>   
                                        </div>
                                    </td>
                                    <td><div className="text-sm ml-2 text-inherit m-0 p-0">Contacts</div></td>
                                    <td></td>
                                </div>
                            </tr>
                            <tr>
                                <div className="p-2 pl-6 flex content-center hover:font-semibold hover:rounded-md text-gray-400 text-left mb-2 hover:bg-gray-300 hover:text-gray-900">
                                <td>
                                    <div className="flex justify-center content-center">     
                                        <svg className="text-gray-900" height={18} width={18} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                    </div>
                                </td>
                                <td><div className="text-sm ml-2 text-inherit m-0 p-0">Requests</div></td>
                                <td></td>
                                </div>
                            </tr>
                            <tr>
                                <div className="p-2 pl-6 flex content-center hover:font-semibold hover:rounded-md text-gray-400 text-left mb-2 hover:bg-gray-300 hover:text-gray-900">
                                    <td>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-folder2 text-gray-900" viewBox="0 0 16 16">
                                            <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 12.5v-9zM2.5 3a.5.5 0 0 0-.5.5V6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5zM14 7H2v5.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V7z"/>
                                        </svg>
                                    </td>
                                    <td><div className="text-sm ml-2 text-inherit m-0 p-0">Projects</div></td>
                                    <td>
                                        
                                    </td>
                                </div>
                            </tr>
                            <tr>
                            <div onClick={(event)=>{
                                        if(showDocumentDrop) {
                                            changeShowDrop(false);
                                        } else {
                                            changeShowDrop(true)
                                        }
                                    }} className="p-2 pl-6 flex content-center hover:font-semibold hover:rounded-md text-gray-400 text-left mb-2 hover:bg-gray-300 hover:text-gray-900">
                                <td>
                                    <svg class="text-gray-900" width={18} height={18} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                </td>
                                <td><div className="text-sm ml-2 text-inherit m-0 p-0">
                                        Document</div></td>
                                <td>
                                    <div className="text-sm ml-8 text-inherit m-0 p-0">
                                        { showDocumentDrop && <svg className="pt-0" height={20} width={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>}
                                        { !showDocumentDrop && <svg className="pt-0" height={20} width={20} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>}
                                    </div>

                                </td>
                                </div>
                            </tr>
                        </tbody>
                    </table>
        

                    {/* <Nav title={"Document"} onclick={(event)=>{
                        if(showDocumentDrop) {
                            changeShowDrop(false);
                        } else {
                            changeShowDrop(true)
                        }
                    }} isOpened = {showDocumentDrop} > 
                    </Nav> */}
                    <div className={`text-left text-gray-400 pl-14 ${!showDocumentDrop && "hidden"}`}>
                        <div className="pb-2">
                            Invoices
                        </div>
                        <div className="pb-2">
                            Extracts
                        </div>
                        <div className="pb-4">
                            Handbills
                        </div>
                    </div>
                </div>
                <Nav title={"Settings"} > 
                    <svg className="w-6 h-6 text-gray-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                </Nav>
            
            </div>
            <div className="text-left pb-5 border-b-2 pl-4 border-gray-200 text-xs">
                <div className="text-gray-400 text-base">Current sales</div>
                <div>
                    <span className="text-gray-900 text-xl font-semibold">$13.4k</span>
                    <span className="text-gray-400">  / 62%</span>
                    <div className="pt-3">
                        <input type="range" value="62"/>
                    </div>
                </div>
            </div>
            <div className="pt-7 pl-1 flex flex-row text-left">
                <svg className="w-11 h-11" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
                <div className="pl-2">
                    <div className="text-sm text-gray-900 text-[19px] font-bold">Jake Gyll</div>
                    <div className="text-gray-400 text-sm">jakegyll@fireart.com</div>
                </div>
            </div>
        </div>
    )
};

export default Sidebar;