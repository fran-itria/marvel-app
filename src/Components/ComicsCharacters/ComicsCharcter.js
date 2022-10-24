import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComicsCharacter } from "../../Actions/actions";
import "./ComicsCharacter.css";

export default function ComicsTheCharacter({ match, history }) {
  const comics = useSelector((state) => state.comics_character);
  const characters = useSelector((state) => state.characters);
  const [character, setCharacter] = useState();
  const dispatch = useDispatch();
  const id = match.params.id;

  useEffect(() => {
    dispatch(getComicsCharacter(id));
  }, []);

  useEffect(() => {
    if (character || !characters) return;
    if (!characters.data) return;
    setCharacter(
      characters.data.results.find((c) => Number(c.id) === Number(id))
    );
  }, [characters]);

  useEffect(() => {
    console.log(comics);
  }, [comics, characters]);

  if (!character) return "Cargando";
  return (
    <div className="bodypercom">
      <div className="contpersonaje">
        <h1 className="personaje">
          Comics del personaje: {character && character.name}
        </h1>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" className="imgperson"/>
      </div>
      {comics && comics.data.total > 0 ? (
        <div className="bloque">
          <ol className="lista">
            {comics.data.results.map((i) => (
              <>
                <li
                  onClick={() => history.push(`/comic/${i.id}/detail`)}
                  className="comic"
                >
                  <button className="botpercom">{i.title}</button>
                </li>
              </>
            ))}
          </ol>
        </div>
      ) : (
        <p className="noc">No tiene comics</p>
      )}
    </div>
  );
}

/* 

function detail(id) {
    history.push(`/comic/${id}/detail`);
  }

<button onClick={() => detail(i.id)} className="tituloc">
   {i.title}
</button>

*/
