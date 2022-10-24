import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getCharacters } from "../../Actions/actions";
import "./Personajes.css";

export default function Personajes() {
  const personajes = useSelector((state) => state.characters);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  useEffect(() => {
    if (personajes) console.log(personajes);
  }, [personajes]);

  function viewComics(id) {
    history.push(`/personaje/${id}/comics`);
  }

  return (
    <div className="body">
      <h1 className="titulo"> Personajes de Marvel's</h1>
      <div className="cparrafo">
      <p className="parrafo">
        Haciendo click en el nombre del personaje podràs ver una lista de los
        comics en los cuales aparece dicho personaje
      </p>
      </div>
      <div className="contelista">
      <ul className="listOne">
        {personajes && personajes.data.results.map((i) => (
          <div>
              <li>
                {<button onClick={() => viewComics(i.id)} className="boton" >
                  {i.name}
                </button>}
              </li>
          </div>
        ))}
      </ul>
      </div>
    </div>
  );
}