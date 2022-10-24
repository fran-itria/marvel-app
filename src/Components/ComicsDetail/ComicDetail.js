import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComicDetail } from "../../Actions/actions";
import "./ComicDetail.css";

export default function ComicDetail({ match }) {
  const detail = useSelector((state) => state.comic_detail);
  const dispatch = useDispatch();
  const id = match.params.id;

  useEffect(() => {
    dispatch(getComicDetail(id));
  }, []);

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  if (!detail) return "LOADING";
  const info = detail.data.results[0];
  return (
    <div className="comdetbody">
      <div className="centro">
        <h1 className="titcom"> {info.title} </h1>
        <img
          src={`${info.thumbnail.path}.${info.thumbnail.extension}`}
          alt=""
          className="imgcom"
        />
      </div>

      {/* CREADORES */}
      {info.creators.available > 0 ? (
        <div className="infocen">
          <h4 className="subtitulo">Creadores: </h4>
          <ul className="lisgen">
            {info.creators.items.map((cr) => (
              <li className="lisitem">{cr.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      {/* PERSONAJES */}
      {info.characters.available > 0 ? (
        <div className="infocen">
          <h4 className="subtitulo">Personajes que aparecen: </h4>
          <ul className="lisgen">
            {info.characters.items.map((c) => (
              <li>{c.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      {/* DESCRIPCION */}
      {info.description ? (
        <div className="infocen">
          <h4 className="subtitulo" >Descripción: </h4>
          <p className="textcom">{info.description}</p>
        </div>
      ) : (
        ""
      )}

      {/* EVENTOS */}
      {info.events.available > 0 ? (
        <div className="infocen">
          <h4 className="subtitulo">Eventos: </h4>
          <ul className="lisgen">
            {info.events.items.map((e) => (
              <li>{e.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      {/* FORMATO */}
      {info.format ? (
        <div className="infocen">
          <h4 className="subtitulo">Formato: </h4>
          <p className="textcom">{info.format}</p>
        </div>
      ) : (
        ""
      )}

      {/* SERIES */}
      {info.series.name ? (
        <div className="infocen"> 
          <h4 className="subtitulo">Serie: </h4>
          <p className="textcom">{info.series.name}</p>
        </div>
      ) : (
        ""
      )}

      {/* HISTORIAS */}
      {info.stories.available > 0 ? (
        <div className="infocen">
          <h4 className="subtitulo">Historias: </h4>
          <ul className="lisgen">
            {info.stories.items.map((s) => (
              <li>{s.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}