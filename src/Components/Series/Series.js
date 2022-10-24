import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeries } from "../../Actions/actions";
import "./Series.css"

export default function Series() {
  const series = useSelector((state) => state.series);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSeries());
  }, []);

  useEffect(() => {
    console.log(series);
  }, [series]);

  if (!series) return "Cargando";
  return (
    <div className="centerseries">
      <h1 className="titser">Series de Marvel's</h1>
      <ol className="lisser">
        {series.data.results.map((s) => (
          <div>
            <li className="itemser"> <h3 className="tititemser">{s.title}</h3></li>
          </div>
        ))}
      </ol>
    </div>
  );
}
