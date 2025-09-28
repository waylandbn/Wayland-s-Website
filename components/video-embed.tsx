// components/video-embed.tsx
import React from "react";

type Props = { url: string; title?: string };

function parseEmbed(url: string) {
  try {
    const u = new URL(url);
    const host = u.hostname;

    // --- TikTok: turn .../video/<ID> into https://www.tiktok.com/embed/v2/<ID>
    if (host.includes("tiktok.com")) {
      const m = u.pathname.match(/\/video\/(\d+)/);
      const id = m?.[1];
      if (id) {
        return {
          src: `https://www.tiktok.com/embed/v2/${id}`,
          title: "TikTok video",
          allow: "", // TikTok's v2 iframe doesn't need special allows
        };
      }
    }

    // --- YouTube short link: https://youtu.be/<ID>
    if (host.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      if (id) {
        return {
          src: `https://www.youtube.com/embed/${id}`,
          title: "YouTube video",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        };
      }
    }

    // --- YouTube normal link: https://www.youtube.com/watch?v=<ID>[&t=30s]
    if (host.includes("youtube.com")) {
      const id = u.searchParams.get("v");
      if (id) {
        const start = u.searchParams.get("t") || u.searchParams.get("start");
        let qs = "rel=0";
        if (start) {
          const seconds = start.endsWith("s") ? start.slice(0, -1) : start;
          qs += `&start=${encodeURIComponent(seconds)}`;
        }
        return {
          src: `https://www.youtube.com/embed/${id}?${qs}`,
          title: "YouTube video",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
        };
      }
    }
  } catch {
    // fall through to null
  }
  return null;
}

const VideoEmbed: React.FC<Props> = ({ url, title }) => {
  const embed = parseEmbed(url);

  // Graceful fallback if URL can't be parsed
  if (!embed) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        View video
      </a>
    );
  }

  // Responsive 16:9 container without adding Tailwind plugins
  return (
    <div
      className="relative w-full overflow-hidden rounded-xl border border-white/10"
      style={{ paddingTop: "56.25%" }} // 16:9
    >
      <iframe
        src={embed.src}
        title={title || embed.title}
        className="absolute inset-0 w-full h-full"
        frameBorder={0}
        allow={embed.allow || ""}
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default VideoEmbed;
