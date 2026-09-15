import Image from "next/image";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

const Avatar = ({ src, alt, size = 40, className }: AvatarProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={["rounded-full", className].filter(Boolean).join(" ")}
      referrerPolicy="no-referrer"
    />
  );
};

export default Avatar;
