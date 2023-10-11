import React from "react";
import { useState } from "react";

export const Formulario = () => {
  const [usuario, setUsuario] = useState([]);

  const getDataForm = (e) => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value,
    };
    setUsuario(usuario);
    console.log(usuario);
  };

  const cambiarDatos = (e) => {
    let nameDelInput = e.target.name;
    let usuarioParaModificar = usuario;

    //usuarioParaModificar[nameDelInput] = e.target.value;

    console.log(usuarioParaModificar);
    setUsuario({ ...usuario, [nameDelInput]: e.target.value });
  };

  return (
    <div>
      <h1>Formularios con React</h1>
      {usuario.enviar && (
        <div className="info-usuario label">
          {usuario.nombre} {usuario.apellido} es un {usuario.genero}y su
          biografia es:
          <p>{usuario.bio}</p>
        </div>
      )}

      <form onSubmit={getDataForm}>
        <input
          type="text"
          name="nombre"
          id=""
          placeholder="Nombre"
          onChange={cambiarDatos}
        />
        <input
          type="text"
          name="apellido"
          id=""
          placeholder="Apellido"
          onChange={cambiarDatos}
        />
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea
          placeholder="biografia"
          name="bio"
          onChange={cambiarDatos}
        ></textarea>
        <input type="submit" value="Enviar" name="enviar" />
      </form>
    </div>
  );
};
