type Props = {
  url: string;
};

function getEmbedUrl(url: string) {
  try {
    const parsed = new URL(url);

    // Handle youtu.be links
    if (parsed.hostname === "youtu.be") {
      return `https://www.youtube.com/embed/${parsed.pathname.slice(1)}`;
    }

    // Handle youtube.com links
    if (parsed.searchParams.get("v")) {
      return `https://www.youtube.com/embed/${parsed.searchParams.get("v")}`;
    }

    return url;
  } catch {
    return url;
  }
}

function Video({ url }: Props) {
  const embedUrl = getEmbedUrl(url);

  return (
    <div className="w-full max-w-xl aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}

export default Video;
