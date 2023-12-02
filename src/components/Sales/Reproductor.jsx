import React from "react";
import chartImg from "../../assets/img/images/grafico-final.png";
import SalesTabButton from "./SalesTabButton";
import SalesTabContent from "./SalesTabContent";
import repr from "../../assets/img/reproductor/Recurso 29.png";
import { FaHome } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { useState } from "react";
import Sales from "./Sales";
import gra1 from "../../assets/img/images/grafico-final.png";
import gra2 from "../../assets/img/images/grafico.png";
const Reproductor = () => {
  const music = [
    {
      grafico: gra1,
      img: "https://th.bing.com/th/id/R.028652612efd7538ad56392f5d735cb2?rik=sYRmgsBmp6aefw&pid=ImgRaw&r=0",
      cancion: "Hawái",
      autor: "Maluma",
    },
    {
      grafico: gra2,
      img: "https://th.bing.com/th/id/R.028652612efd7538ad56392f5d735cb2?rik=sYRmgsBmp6aefw&pid=ImgRaw&r=0",
      cancion: "Felices los 4",
      autor: "Maluma",
    },
    {
      grafico: gra1,
      img: "https://th.bing.com/th/id/R.59ec07f620f660c4ecd24f3052c1ccaa?rik=Nk2axs4ZOY98%2bQ&pid=ImgRaw&r=0",
      cancion: "Mi Gente",
      autor: "J Balvin",
    },
    {
      grafico: gra2,
      img: "https://th.bing.com/th/id/R.59ec07f620f660c4ecd24f3052c1ccaa?rik=Nk2axs4ZOY98%2bQ&pid=ImgRaw&r=0",
      cancion: "Ay Vamos",
      autor: "J Balvin",
    },
    {
      grafico: gra1,
      img: "https://www.laut.de/bilder/wortlaut/artists/d/daddy_yankee/artist-image,151065.jpg",
      cancion: "Con Calma",
      autor: "Daddy Yankee",
    },
    {
      grafico: gra2,
      img: "https://www.laut.de/bilder/wortlaut/artists/d/daddy_yankee/artist-image,151065.jpg",
      cancion: "Gasolina",
      autor: "Daddy Yankee",
    },
    {
      grafico: gra1,
      img: "https://th.bing.com/th/id/R.028652612efd7538ad56392f5d735cb2?rik=sYRmgsBmp6aefw&pid=ImgRaw&r=0",
      cancion: "Hawái",
      autor: "Maluma",
    },
    {
      grafico: gra2,
      img: "https://th.bing.com/th/id/R.028652612efd7538ad56392f5d735cb2?rik=sYRmgsBmp6aefw&pid=ImgRaw&r=0",
      cancion: "Felices los 4",
      autor: "Maluma",
    },
    {
      grafico: gra1,
      img: "https://th.bing.com/th/id/R.59ec07f620f660c4ecd24f3052c1ccaa?rik=Nk2axs4ZOY98%2bQ&pid=ImgRaw&r=0",
      cancion: "Mi Gente",
      autor: "J Balvin",
    },
    {
      grafico: gra2,
      img: "https://th.bing.com/th/id/R.59ec07f620f660c4ecd24f3052c1ccaa?rik=Nk2axs4ZOY98%2bQ&pid=ImgRaw&r=0",
      cancion: "Ay Vamos",
      autor: "J Balvin",
    },
    {
      grafico: gra1,
      img: "https://www.laut.de/bilder/wortlaut/artists/d/daddy_yankee/artist-image,151065.jpg",
      cancion: "Con Calma",
      autor: "Daddy Yankee",
    },
    {
      grafico: gra2,
      img: "https://www.laut.de/bilder/wortlaut/artists/d/daddy_yankee/artist-image,151065.jpg",
      cancion: "Gasolina",
      autor: "Daddy Yankee",
    },
  ];
  const [filtro, setFiltro] = useState("");

  const filtrarCanciones = music.filter((cancion) =>
    cancion.cancion.toLowerCase().includes(filtro.toLowerCase())
  );

  const [estadistica, setEstadistica] = useState(gra2);
  const cambiar_grafico=(graficos)=>{
    setEstadistica(graficos);
  }


  const [venta,setventa]=useState(false);
  const chart_info_list = [
    "Contingency: 70%",
    "Business Development: 10%",
    "Investor: 30%",
    "Poland",
    "Legal & Regulation:10%",
    "Czech Republic",
  ];

  return (
    <>
    
    
    <section id="reproductor" className="chart-area chart-bg ">
      <div className="container">
       
        <div className="row">
          <div
            className="col-md-4 justify-content-center cel "
            id="cel_reproductor"
          >
            <div className="row justify-content-center pb-5 pt-3 " id="caja">
              <div className="col-md-8 text-center pt-5">
                <div class="form-group row">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Cancion Favorita"
                    value={filtro}
                    onChange={(e) => setFiltro(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row mx-3">
              <div className="col-md-12" id="scroll">
                {filtro === ""
                  ? music.map((cancion, index) => (
                      <div className="row my-4" style={{ cursor: "pointer"}} onClick={()=>cambiar_grafico(cancion.grafico)}>
                        <div className="col-md-2">
                          <img
                            className="imagenRedonda"
                            src={cancion.img} // Reemplaza con la ruta de tu imagen
                            alt="Descripción de la imagen"
                          />
                        </div>
                        <div className="col-md-7">
                          <b>{cancion.cancion}</b>
                          <br /> {cancion.autor}
                        </div>
                        <div className="col-md-1">
                          <IoHeart color="red" />
                        </div>
                        <div className="col-md-1">
                          {" "}
                          <FiMoreVertical />
                        </div>
                      </div>
                    ))
                  : filtrarCanciones.map((cancion, index) => (
                      <div className="row my-4 " style={{ cursor: "pointer"}}  onClick={()=>cambiar_grafico(cancion.grafico)}>
                        <div className="col-md-2">
                          <img
                            className="imagenRedonda"
                            src={cancion.img} // Reemplaza con la ruta de tu imagen
                            alt="Descripción de la imagen"
                          />
                        </div>
                        <div className="col-md-7">
                          <b>{cancion.cancion}</b>
                          <br /> {cancion.autor}
                        </div>
                        <div className="col-md-1">
                          <IoHeart color="red" />
                        </div>
                        <div className="col-md-1">
                          {" "}
                          <FiMoreVertical />
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            <div className="row justify-content-center" id="btn_fin">
              <div className="col-md-12 text-center">
                <button type="button" class="btn btn-pink px-5">
                  View more song
                </button>
              </div>
            </div>
          </div>
          <div
            className="col-md-8  pc "
            id="pc_grande"
          >
            <div className="row  justify-content-center py-5">
              <div className="col-md-10 mb-3">
                <img src={estadistica} className="mi-imagen" />
              </div>
              <div className="col-md-3">
                <button className="btn btn-verde" onClick={()=>setventa(true)}>Buy</button>
              </div>
              <div className="col-md-3">
                <button className="btn btn-rojo">Sell</button>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
    {
      venta && <Sales />
    }
   
    </>
  );
};

export default Reproductor;
