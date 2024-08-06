const Fonts = ({ activeFont, setActiveFont }) => {
  const handleactiveFont = (item) => {
    setActiveFont(item);
    console.log(activeFont);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl px-6 py-4">
      <h1 className="text-2xl font-extrabold text-gray-900 pb-7">Fonts</h1>
      <div className="flex items-center justify-start gap-4">
        <div
          className={`border rounded-md h-18 w-14 text-center py-1 px-3 border-gray-900 flex items-center flex-col justify-between gap-0 cursor-pointer ${
            activeFont === "lato" ? `bg-slate-800 text-white font-bold` : ``
          } `}
          onClick={() => {
            handleactiveFont("lato");
          }}>
          <p className="text-2xl">Aa</p>
          <p>Sans</p>
        </div>
        <div
          className={`border rounded-md h-18 w-14 text-center py-1 px-3 border-gray-900 flex items-center flex-col justify-between gap-0 cursor-pointer font-serif ${
            activeFont === "serif" ? `bg-slate-800 text-white font-bold` : ``
          } `}
          onClick={() => {
            handleactiveFont("serif");
          }}>
          <p className="text-2xl">Aa</p>
          <p>Serif</p>
        </div>
        <div
          className={`border rounded-md h-18 w-14 text-center py-1 px-3 border-gray-900 flex items-center flex-col justify-between gap-0 cursor-pointer font-mono ${
            activeFont === "mono" ? `bg-slate-800 text-white font-bold` : ``
          } `}
          onClick={() => {
            handleactiveFont("mono");
          }}>
          <p className="text-2xl">Aa</p>
          <p>Mono</p>
        </div>
      </div>
    </div>
  );
};

export default Fonts;
