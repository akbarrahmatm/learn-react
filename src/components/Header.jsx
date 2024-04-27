import { Icon12Hours, IconCar } from "@tabler/icons-react";

export default function Header() {
  return (
    <>
      <header className="text-center content-center grid bg-slate-900 px-10 py-3 shadow-lg">
        <a href="#">
          <div className="flex justify-center gap-x-3 items-center	">
            <IconCar className="text-white w-[3rem] h-[3rem] " />

            <h1 className="text-white text-xl font-bold">Car App</h1>
          </div>
        </a>
      </header>
    </>
  );
}
