import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getComics } from "../../Actions/actions";
import "./Comics.css";

export default function Comics() {
  const comics = useSelector((state) => state.comics);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getComics());
  }, []);

  useEffect(() => {
    console.log(comics);
  }, [comics]);

  function detail(id) {
    history.push(`/comic/${id}/detail`);
  }

  return (
    <div className="comicbody">
      <div className="titlecenter">
        <h1 className="title"> Comics de Marvel's</h1>
        <p className="comparrafo">
          Haciendo click en los comics se visualizará un detalle de estos, en
          los que podrá ver una lista de creadores, de personajes, una
          descripción, una lista de eventos y de historias, su formato, y su
          serie.
        </p>
        <p className="comparrafo2">
          Los detalles que no aparecen es porque no se dispone de dicha
          informacion
        </p>
      </div>
      <div className="centrar">
        <ol className="listc">
          {comics &&
            comics.data.results.map((i) => (
              <li className="itemc">
                <button onClick={() => detail(i.id)} className="tituloc">
                  {i.title}
                </button>
              </li>
            ))}
        </ol>
      </div>
    </div>
  );
}

/* {creador ? (
  i.creators.available > 0 ? (
    <ul>
      {i.creators.items.map((c) => (
        <li className="creador">{c.name} </li>
      ))}
    </ul>
  ) : (
    <p className="no">No se encontraron los creadores</p>
  )
) : (
  ""
)} */
