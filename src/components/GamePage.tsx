import Video from "./Video";

type Props = {
  title: string;
  videos: string[];
};

function GamePage({ title, videos }: Props) {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
      </div>

      <div className="flex flex-wrap gap-10 justify-center items-center mt-10">
        {videos.map((url, index) => (
          <Video key={index} url={url} />
        ))}
      </div>
    </div>
  );
}

export default GamePage;
