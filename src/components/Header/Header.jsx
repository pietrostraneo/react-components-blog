import styleHeader from './Header.module.css';

export default function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between text-white align-items-center">

                    <div className="logo">
                        <img src="/logo.png" alt="" className="img-fluid" />
                    </div>

                    <div className="nav d-flex gap-4 align-items-center">
                        <ul className="list-unstyled d-flex gap-5 justify-content-center align-items-center">
                            <li>Home</li>
                            <li>Latest</li>
                            <li>Contacts</li>
                            <li>About us</li>
                        </ul>
                        <ul className="list-unstyled d-flex gap-2 justify-content-center align-items-center">
                            <li><i className={`fas fa-magnifying-glass`}></i></li>
                            <li><i className="fas fa-bookmark"></i></li>
                            <li><i className="fas fa-user"></i></li>
                        </ul>
                    </div >
                </div>
            </div>

        </div >

    )
}