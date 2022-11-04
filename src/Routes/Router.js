
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from '../Pages/home/Home'
import {Pokedex} from '../Pages/pokedex/Pokedex'



export function RouterComponet() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    )
}