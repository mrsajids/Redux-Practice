import axios from "axios"
import { useState } from "react"

const Navbar = () => {
    const [data, setData] = useState([])
    const handleClick = async () => {
        const response = await axios.get('http://localhost:4000/all')
        setData(response.data)
        document.getElementById('form').style.display = 'none';
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">BlogApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-success" onClick={handleClick}>View all</button>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </nav>
            {
                data.map((element, i) => {
                    return <div className="card m-4" style={{width:"18rem"}} key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{element.name}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{element.email}</h6>
                    </div>
                </div>
                })
            }
        </div>
    )
}
export default Navbar