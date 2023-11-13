import axios from "axios";
import React, { useState } from "react";
import { getSerialFromNumber } from "../../common/API";
import IconChange from "../../common/iconChange";
// const baseURL = import.meta.env.API_URL;
const baseURL = "http://localhost:3001/api/v1";

const Serials = ({ click }) => {
  const [responceInfo, setResponceInfo] = useState();
  const [form, setForm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`${baseURL}/serial/${form}`);
    // const response = await axios.get(`${baseURL}/serial/${form}`);
    const serial = await getSerialFromNumber(form);
    setResponceInfo(serial);
    // console.log(serial);
  };

  return (
    <div className="flex max-w-[900px]">
      <form
        onSubmit={handleSubmit}
        className="h-[50vh] w-full  bg-white/75 rounded-xl shadow-black shadow-2xl  sm:grid sm:grid-cols-2 flex flex-col self-center"
      >
        <div className="flex justify-center align-middle h-1/2 sm:h-fit p-2 self-center">
          <input
            type="text"
            placeholder="Serie"
            onChange={(e) => setForm(e.target.value)}
            className="px-5 mx-4 w-40 h-1/4 self-center sm:h-14 sm:self-center text-blue-700 font-bold font-mono rounded-md border-blue-500 focus:ring-indigo-600"
          ></input>
          <button className="m-4 h-14 px-6 self-center rounded-lg border border-blue-300 text-white bg-blue-800">
            Buscar
          </button>
        </div>
        <div className="h-1/2 sm:h-full rounded-e-xl shadow-lg shadow-black bg-blue-700 flex flex-col justify-center gap-4">
          <div className="flex justify-center gap-4 align-middle">
            <p className="self-center w-1/4 font-semibold">Principal</p>
            <input
              type="number"
              disabled
              placeholder="Numero Claro"
              value={responceInfo && responceInfo[0]["Numero de datos"]}
              className="self-center p-2 w-2/4 font-mono rounded-md "
            ></input>
          </div>
          <div className="flex justify-center gap-4 align-middle">
            <p className="self-center w-1/4 font-semibold">Secundario</p>
            <input
              type="number"
              disabled
              placeholder="Numero Movistar"
              value={responceInfo && responceInfo[1]["Numero de datos"]}
              className="self-center p-2 w-2/4 font-mono rounded-md"
            ></input>
          </div>
        </div>
      </form>
      <button
        className="relative text-blue-700 sm:text-white bottom-48 right-12"
        onClick={(mode) => click(!mode)}
      >
        <IconChange />
      </button>
    </div>
  );
};

export default Serials;