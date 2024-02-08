import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import dayjs from "dayjs";
import "./index.css";
interface Movie {
  title: string;
  overview: string;
  release_date: string;
  original_language: string;
  vote_average: number[];
  adult: boolean;
}

interface MovieItems {
  movie: Movie;
}
export default function BasicDoc({ movie }: MovieItems) {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="modal">
      <Button
        label="+ Detalhes"
        icon="pi pi-external-link"
        onClick={() => setVisible(true)}
        style={{ borderRadius: "10px" }}
      />
      <Dialog
        header={movie.title}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        focusOnShow={false}
        className="modal-details"
      >
        <ul>
          <li>
            <p className="overview">{movie.overview}</p>
          </li>
          <li>
            <p className="lowlight">
              Date: {dayjs(movie.release_date).format("DD/MM/YYYY")}
            </p>
            <p className="lowlight">
              Language:{" "}
              {movie.original_language.toUpperCase() === "EN"
                ? "English"
                : movie.original_language.toUpperCase()}
            </p>
          </li>
          <li>
            <p className="lowlight">Rating: {movie.vote_average} /10</p>
            <p className="lowlight">Category: {movie.adult ? "+18" : "Free"}</p>
          </li>
        </ul>
      </Dialog>
    </div>
  );
}
