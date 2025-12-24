import { Link } from "react-router-dom";

function AdminPanel() {

    return (
        <div className="page" id="adminPage">
            <div className="container">
                <div className="content">
                    <h1 id="adminWelcomeText">Welcome to the Batcave, Admin</h1>
                </div>
                <div className="content">
                    <div className="card">
                        <ul>
                            <li>
                                <Link to="/admin/uploadGpx">Carica nuovo percorso</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminPanel;