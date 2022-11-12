import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HdfcHome } from "./HdfcHome";
import { NriHome } from "./NRI/NriHome";
import { NriLogin } from "./NRI/NriLogin";
import { NriRegister } from "./NRI/NriRegister";
import { PersonalHome } from "./Personal/PersonalHome";
import { PersonalLogin } from "./Personal/PersonalLogin";
import { PersonalRegister } from "./Personal/PersonalRegister";


export function HdfcIndex(){
    return(
        <div className="container-fluid">
            <h1 className="text-center bg-dark text-white p-2">HDFC Bank</h1>
            <hr/>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HdfcHome/>}>
                    <Route path="/Personal" element={<PersonalHome/>}>
                        <Route path="plogin" element={<PersonalLogin/>}></Route>
                        <Route path="pregister" element={<PersonalRegister/>}></Route>
                    </Route>
                    <Route path="/nri" element={<NriHome/>}>
                        <Route path="nrilogin" element={<NriLogin/>}></Route>
                        <Route path="nriregister" element={<NriRegister/>}></Route>
                    </Route>
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}