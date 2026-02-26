import Clapper from "./Clapper";

function Logo() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* ICON */}
      <div className="transition-transform duration-300 group-hover:-rotate-12 group-hover:-translate-y-1">
        <Clapper size={50} />
      </div>

      {/* TEXT */}
      <p
        className="text-purple-400 text-4xl text-outline-white
                   transition-all duration-300
                   group-hover:scale-110
                   group-hover:drop-shadow-[0_0_15px_#a855f7]"
      >
        Clips
      </p>
    </div>
  );
}

export default Logo;
