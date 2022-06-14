import React from "react";
import {Link,Route,Switch,useParams,useRouteMatch} from "react-router-dom";

const veri=[
    {
        id:0,
        kategori:"Anakart",
        urun:"MSI",
        fiyat:6000,
        aciklama:"MSI anakart 3 adet DDR5 Slot vb..."
    },
    {
        id:1,
        kategori:"Harddisk",
        urun:"Western Digital",
        fiyat:5000,
        aciklama:"Western Digital 4 adet 500gb ..."
    },
    {
        id:2,
        kategori:"Ekran Kartı",
        urun:"Nvidia",
        fiyat:15000,
        aciklama:"8gb hafıza..."
    },
];

function Urunler() {
    let {path,url}=useRouteMatch();
    return(
        <div className="Container">
            <div className="alert alert-primary" role="alert">
                <h3 className="text-center">Ürünler sayfasına hoş geldiniz</h3>
                <div className="container">
                    <div className="row">{
                            veri.map((linkler)=>{
                                return(
                                    <div className="col-md-6 mt-3">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{linkler.kategori}</h5>
                                                <p className="card-text">{linkler.urun}</p>
                                                <Link to={`${url}/${linkler.id}`} className="btn btn-primary">Detaya git</Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                        )}
                    </div>
                </div>
            </div>
            <Switch>
                <Route path={path} exact></Route>
                <Route path={`${path}/:urunId`}><Urun/></Route>
            </Switch>
        </div>
    )
}

function Urun(){
    let {urunId}=useParams();
    let dizi=veri.filter((data)=>{
        return data.id==urunId
    });

    return(
        <div>
            <div className="alert alert-primary" role="alert">
                <h3>
                    Kategori:{dizi[0].kategori}
                </h3>
                <h3>
                    Ürün:{dizi[0].urun}
                </h3>
                <h3>
                    Açıklama:{dizi[0].aciklama}
                </h3>
            </div>
        </div>
    )
}


export default Urunler
