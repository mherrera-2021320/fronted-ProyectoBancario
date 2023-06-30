import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./page/HomePage"
import { LoginPage } from "./page/LoginPage"
import { RegistredPage } from "./page/RegistredPage"
import { AboutPage } from "./page/AboutPage"
import { NotFound404 } from "./page/NotFound404"
import {ContacPage} from "./page/ContacPage"


export const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={ <HomePage /> }/>
                <Route path="/login" element={ <LoginPage /> }/>
                <Route path="/registrer" element={ <RegistredPage /> }/>
                <Route path="/about" element={ <AboutPage /> }/>
                <Route path="/contact" element={ <ContacPage /> }/>
                <Route path="error404" element={ <NotFound404 /> } />
                <Route path="/*" element={ <Navigate to='/error404' /> } />

            </Routes>
        </>
    )
}
