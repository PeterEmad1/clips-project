import { Link } from "react-router-dom";

type Props = {
  title: string;
  imageUrl: string;
  link: string;
};
function Card({ title, imageUrl, link }: Props) {
  return (
    <Link to={link}>
      <div
        className="bg-[hsl(263,37%,60%)] shadow w-100 text-center border-2 border-blue-600 rounded-2xl p- cursor-pointer
                transform transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[hsl(256,75%,13%)] hover:shadow-[0_0_20px_#a855f7] hover:-translate-y-1 text-outline-black"
      >
        <h2 className="text-2xl font-bold text-white m-3">{title}</h2>
        <img className="rounded-b-2xl" src={imageUrl} alt={title} />
      </div>
    </Link>
  );
}

export default Card;
