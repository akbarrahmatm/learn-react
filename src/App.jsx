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

  function getKeyFromObject(obj, index) {
    return Object.keys(obj)[index];
  }

  function handleChange(event) {
    return setCar((previousState) => {
      return { ...previousState, [event.target.id]: event.target.value };
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
              <label
                className="text-white"
                htmlFor={getKeyFromObject(defaultCar, 0)}
              >
                Brand :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name={getKeyFromObject(defaultCar, 0)}
                id={getKeyFromObject(defaultCar, 0)}
                placeholder={getKeyFromObject(defaultCar, 0)}
                onChange={handleChange}
                value={car.brand || ""}
              />
            </div>
            <div className="mb-2">
              <label
                className="text-white"
                htmlFor={getKeyFromObject(defaultCar, 1)}
              >
                Model :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name={getKeyFromObject(defaultCar, 1)}
                id={getKeyFromObject(defaultCar, 1)}
                placeholder={getKeyFromObject(defaultCar, 1)}
                onChange={handleChange}
                value={car.model || ""}
              />
            </div>
            <div className="mb-2">
              <label
                className="text-white"
                htmlFor={getKeyFromObject(defaultCar, 2)}
              >
                Year :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name={getKeyFromObject(defaultCar, 2)}
                id={getKeyFromObject(defaultCar, 2)}
                placeholder={getKeyFromObject(defaultCar, 2)}
                onChange={handleChange}
                value={car.year || ""}
              />
            </div>
            <div className="mb-2">
              <label
                className="text-white"
                htmlFor={getKeyFromObject(defaultCar, 3)}
              >
                Color :{" "}
              </label>
              <input
                className="px-2 py-1"
                type="text"
                name={getKeyFromObject(defaultCar, 3)}
                id={getKeyFromObject(defaultCar, 3)}
                placeholder={getKeyFromObject(defaultCar, 3)}
                onChange={handleChange}
                value={car.color || ""}
              />
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}
