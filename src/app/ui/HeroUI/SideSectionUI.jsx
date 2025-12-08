function SideSectionUI({ text, children }) {
  return (
    <div className="flex justify-center gap-6 flex-col items-center px-10 py-20  bg-linear-to-r from-orange-800 to-orange-300 ">
      <p className="text-2xl lg:w-[60%] text-white lg:text-5xl text-center font-semibold">
        {text}
      </p>
      {children}
    </div>
  );
}
export default SideSectionUI;
