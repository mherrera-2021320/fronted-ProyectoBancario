import { Link, NavLink } from "react-router-dom"


export const HeadApp = () => {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Inicio </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/about'>
                                    Acerda de . . .
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/login'>
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Home</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                        <Link to="/" className="navbar-brand">Inicio </Link>                                
                                </li>
                                <li className="nav-item">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                        to='/about'>
                                        Cuentas de Ahorro y Corrientes
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    
                                </li>

                                <li className="nav-item dropdown">
                                    
                                </li>
                            </ul>

                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Iniciar Secion
                            </button>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div className="mb-3 form-check">
                                                </div>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" type="submit">
                                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                        to='/login'>
                                        Registrarse
                                    </NavLink>
                                </button>
                            </form>
                        </div>


                    </div>
                </nav>

            </div>





        </>
    )
}
