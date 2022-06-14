import './App.css';
import logo from "./logo512.png";
import Anasayfa from "./Components/Anasayfa";
import Hakkimizda from "./Components/Hakkimizda";
import Iletisim from "./Components/Iletisim";
import Urunler from "./Components/Urunler";
import {Link,Switch,Route,useParams} from 'react-router-dom'

function App() {
  return (
        <div className="App">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                    <img className="logo" src={logo} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link   className="nav-link active"  to="/">Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/Hakkimizda"className="nav-link">Hakkımızda</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to="/Urunler"className="nav-link">Ürünler</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Iletisim"className="nav-link">İletişim</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className={"Container mt-3"}>
                <div className={"row"}>
                    <Switch>
                        <Route path="/" exact><Anasayfa/></Route>
                        <Route path="/Hakkimizda"><Hakkimizda/></Route>
                        <Route path="/Urunler"><Urunler/></Route>
                        <Route path="/Iletisim"><Iletisim/></Route>
                    </Switch>
                    <div className={"col-md-12"}>
                        <div className="alert alert-warning" role="alert">
                            <Switch>
                                <Route path="/:id" children={<Child/>}></Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  );
}

function Child(){
    let {id}=useParams();
    return(
        <div>
            <h3>ID:{id}</h3>
        </div>
    )}

export default App;
