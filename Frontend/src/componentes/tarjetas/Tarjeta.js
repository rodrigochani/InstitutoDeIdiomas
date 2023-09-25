import React from "react";
import "./tarjeta.css";

export const Tarjeta = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="tarjeta-vertical">
        <p className="lorem-ipsum-is-simply-du">Nuestros Profes</p>
        <img
          src="/imagenes/profesoresGrupo.avif"
          alt="Not Found"
          className="placeholder-image"
        />
        <a href="/listado/profesores" className="welcome-to-burger-bliss">
          contamos en nuestro staff de profesores especializados en cada una de
          las carreras que tenemos para ofrecerte. Conocelos!.
        </a>
      </div>
      <div className="tarjeta-vertical">
        <p className="lorem-ipsum-is-simply-du">exámenes internacionales</p>
        <img
          src="/imagenes/examenes.png"
          alt="Not Found"
          className="placeholder-image"
        />
        <a href="/examenesInternacionales" className="welcome-to-burger-bliss">
          Nuestros cursos en las distntas carreras te preparan también para
          distintos exámenes internacionales. Conocé los que tenemos para
          ofrecerte con importantes descuentos!
        </a>
      </div>
      <div className="tarjeta-vertical">
        <p className="lorem-ipsum-is-simply-du">Nuestro Campus</p>
        <img
          src="/imagenes/instituto.jpg"
          alt="Not Found"
          className="placeholder-image"
        />
        <a href="/instituto" className="welcome-to-burger-bliss">
         Conocé las instalaciones donde pordrás estudiar con todas las comodidades
        </a>
      </div>
      <div className="frame-1">
        <div className="placeholder-image-20">
          <p className="lorem-ipsum-is-simply-du">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <div className="placeholder-image-1">
          <p className="lorem-ipsum-is-simply-du-1">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <div className="placeholder-image-2">
          <p className="lorem-ipsum-is-simply-du-2">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <div className="placeholder-image-3">
          <p className="lorem-ipsum-is-simply-du-3">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <div className="placeholder-image-4">
          <p className="lorem-ipsum-is-simply-du-4">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <div className="placeholder-image-5">
          <p className="lorem-ipsum-is-simply-du-5">
            Lorem Ipsum is simply dummy
          </p>
        </div>
        <div className="placeholder-image-6">
          <p className="lorem-ipsum-is-simply-du-6">
            Lorem Ipsum is simply dummy
          </p>
        </div>
      </div>
    </div>
  );
};
