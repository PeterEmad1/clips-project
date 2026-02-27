import Card from "../components/Card";
import valorantImg from "../assets/Valorant.png";
import brawlhallaImg from "../assets/Brawlhalla.png";
import BuckShotRouletteImg from "../assets/BuckShotRoulette.png";

function Home() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center min-h-[80dvh]">
      <Card title="Valorant" imageUrl={valorantImg} link="/valorant" />
      <Card title="Brawlhalla" imageUrl={brawlhallaImg} link="/brawlhalla" />
      <Card
        title="Buckshot Roulette"
        imageUrl={BuckShotRouletteImg}
        link="/buckshot"
      />
    </div>
  );
}

export default Home;
