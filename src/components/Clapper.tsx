type Props = {
  size?: number;
};

function Clapper({ size = 80 }: Props) {
  const width = size;
  const bodyHeight = size * 0.5;
  const topHeight = bodyHeight * 0.4;

  return (
    <div
      className="relative inline-block select-none"
      style={{ width, height: bodyHeight + topHeight }}
    >
      {/* TOP PART — ONLY THIS MOVES */}
      <div
        className="absolute left-0 top-0 w-full bg-[repeating-linear-gradient(45deg,black_0px,black_8px,white_8px,white_16px)] transition-transform duration-300 group-hover:-rotate-12"
        style={{
          height: topHeight,
          transformOrigin: "left bottom",
        }}
      />

      {/* BOTTOM PART — STAYS STILL */}
      <div
        className="absolute left-0 border border-white rounded-sm bg-[repeating-linear-gradient(45deg,#111_0px,#111_12px,#444_12px,#444_24px)]"
        style={{
          top: topHeight,
          height: bodyHeight,
          width: "100%",
        }}
      />
    </div>
  );
}

export default Clapper;
