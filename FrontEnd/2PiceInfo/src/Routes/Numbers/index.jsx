import axios from "axios";
import React, { useState } from "react";
import { getNumberFromSerial } from "../../common/API";
import IconChange from "../../common/iconChange";

const Numbers = ({ click }) => {
  const [responceInfo, setResponceInfo] = useState();
  const [form, setForm] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`${baseURL}/serial/${form}`);
    // const response = await axios.get(`${baseURL}/number/${form}`);
    const number = await getNumberFromSerial(form);

    if (!number) {
      alert("Invalid number");
    }

    setResponceInfo(number);
  };

  return (
    <div className=" flex max-w-[900px]">
      <form
        onSubmit={handleSubmit}
        className="flex h-[50vh] w-full flex-col justify-between  self-center rounded-xl  shadow-2xl  shadow-black backdrop-blur-xl md:grid md:grid-cols-2 "
      >
        <div className=" flex h-1/2 flex-col md:h-full">
          <div className="absolute flex w-[340px] justify-between md:w-[680px]">
            <h3 className=" flex-1 p-4 text-3xl font-bold text-blue-600 ">
              Telefono
            </h3>
            <button
              type="button"
              className=" text-blue-700 md:text-white"
              onClick={() => click((mode) => (mode = false))}
            >
              <IconChange />
            </button>
          </div>

          <div className="flex h-full p-2 ">
            <div className="flex h-full gap-4 self-center">
              <input
                type="text"
                placeholder="Numero"
                onChange={(e) => setForm(e.target.value)}
                className="font-mono mx-4 h-1/4 w-40 self-center rounded-md border-blue-500 px-5 font-bold text-blue-700 focus:ring-indigo-600 sm:h-14 sm:self-center"
              ></input>
              <button className="m-4 h-14 self-center rounded-lg border border-blue-300 bg-blue-800 px-6 text-white">
                Buscar
              </button>
            </div>
          </div>
        </div>
        <div className="flex h-1/2 flex-col rounded-e-xl bg-blue-700/95 p-4 shadow-lg shadow-black  md:h-full">
          {/* <div className=" p-4 h-full flex flex-col gap-4"> */}
          <h3 className="absolute text-3xl font-bold text-white">Serie</h3>
          <div className="flex h-full flex-col justify-center gap-4">
            <div className="flex justify-center gap-4 align-middle">
              <p className="w-1/4 self-center font-semibold">Serie</p>
              <input
                type="number"
                disabled
                placeholder="Serie"
                value={responceInfo && responceInfo[0]["Numero de serie"]}
                className="font-mono w-2/4 self-center rounded-md p-2 "
              ></input>
            </div>
            <div className="flex justify-center gap-4 align-middle">
              <p className="w-1/4 self-center font-semibold">Secundario</p>
              <input
                type="text"
                disabled
                placeholder="Proveedor"
                value={responceInfo && responceInfo[1]["Numero de datos"]}
                className="font-mono w-2/4 self-center rounded-md p-2"
              ></input>
            </div>
          </div>
          {/* </div> */}
        </div>
      </form>
    </div>
  );
};

export default Numbers;
