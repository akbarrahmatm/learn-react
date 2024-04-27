import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  const defaultCar = {
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  };

  const [car, setCar] = useState(defaultCar);

  function handleChangeBrand(event) {
    return setCar((previousState) => {
      return { ...previousState, brand: event.target.value };
    });
  }

  function handleChangeModel(event) {
    return setCar((previousState) => {
      return { ...previousState, model: event.target.value };
    });
  }

  function handleChangeYear(event) {
    return setCar((previousState) => {
      return { ...previousState, year: event.target.value };
    });
  }

  function handleChangeColor(event) {
    return setCar((previousState) => {
      return { ...previousState, color: event.target.value };
    });
  }

  return (
    <>
      <div className="bg-slate-700 flex flex-col h-screen">
        <Header />
        <Content>
          <div className="text-white p-10">
            <h1 className="font-bold">Car From Object State</h1>
            <ul>
              <li>Brand : {car.brand}</li>
              <li>Model : {car.model}</li>
              <li>Year : {car.year}</li>
              <li>Color : {car.color}</li>
            </ul>
          </div>

          <div className="px-10">
            <div className="mb-2">
              <label className="text-white" htmlFor="brand">
                Brand :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name="brand"
                id="brand"
                placeholder="Brand"
                onChange={handleChangeBrand}
                value={car.brand || ""}
              />
            </div>
            <div className="mb-2">
              <label className="text-white" htmlFor="model">
                Model :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name="model"
                id="model"
                placeholder="Model"
                onChange={handleChangeModel}
                value={car.model || ""}
              />
            </div>
            <div className="mb-2">
              <label className="text-white" htmlFor="year">
                Year :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name="year"
                id="year"
                placeholder="Year"
                onChange={handleChangeYear}
                value={car.year || ""}
              />
            </div>
            <div className="mb-2">
              <label className="text-white" htmlFor="color">
                Color :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name="color"
                id="color"
                placeholder="Color"
                onChange={handleChangeColor}
                value={car.color || ""}
              />
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}
