import { AppRoutes } from "./AppRoutes"
import { HeadApp } from "./HeadApp"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
    return (
        <>
            <UserProvider>
                <a>
                    <img src="./src/assets/img/Titulo.png" className="d-block" alt="..." />
                </a>

                <hr />
                <HeadApp />
                <hr />
                <AppRoutes />
            </UserProvider>

        </>
    )
}
