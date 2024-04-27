export default function Content({ children }) {
  return (
    <>
      <section className="w-[70%] h-[100%] m-auto bg-slate-600 shadow-2xl ">
        {children}
      </section>
    </>
  );
}
