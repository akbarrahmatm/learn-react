import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

export default function App() {
  const [carBrand, setCarBrand] = useState();

  return (
    <>
      <div className="bg-slate-700 flex flex-col h-screen">
        <Header />
        <Content>
          <ul className="text-center my-5">
            <li className="inline-block px-2 text-white text-lg font-medium underline">
              <button onClick={() => setCarBrand("Ford")}>Ford</button>
            </li>
            <li className="inline-block px-2 text-white text-lg font-medium">
              <button onClick={() => setCarBrand("Toyota")}>Toyota</button>
            </li>
            <li className="inline-block px-2 text-white text-lg font-medium">
              <button onClick={() => setCarBrand("Hyundai")}>Hyundai</button>
            </li>
          </ul>
          <h1 className="text-center text-md text-white">
            {!carBrand ? "You haven't selected anything !" : carBrand}
          </h1>
        </Content>
      </div>
    </>
  );
}
