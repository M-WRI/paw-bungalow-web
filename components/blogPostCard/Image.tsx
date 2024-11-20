import { Image as NextImage } from "next-sanity/image";

export const Image = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="h-44 relative">
      <NextImage src={src} alt={alt} fill style={{ objectFit: "cover" }} />
    </div>
  );
};
