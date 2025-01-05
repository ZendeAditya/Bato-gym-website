import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
  tagline: string;
  img: StaticImageData;
}

export const ServicesCard = ({ tagline, img }: ServiceCardProps) => {
  return (
    <div className="min-w-[300px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg hover:shadow-orange-200/10">
      <Image
        src={img}
        alt={tagline}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-white">{tagline}</h3>
        <p className="mt-2 text-gray-300">
          Discover our professional {tagline.toLowerCase()} services designed to
          help you achieve your fitness goals.
        </p>
      </div>
    </div>
  );
};
