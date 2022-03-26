const HomeLogoLink = ({
  height,
  link,
  className,
}: {
  height?: string | number;
  link?: string;
  className?: string;
}) => {
  return (
    <a href={link ? link : "/"} className={className}>
      <svg
        height={height ? height : "20"}
        viewBox="0 0 155 124"
        className="w-full h-full translateYAnimSVG "
        fill="none"
      >
        <path d="M56.6087 0L105.633 93H7.58413L56.6087 0Z" fill="#00E0FF" />
        <path
          d="M115.913 28.3044L149.763 93.0001H82.0628L115.913 28.3044Z"
          fill="#6B00F2"
        />
      </svg>
    </a>
  );
};

export default HomeLogoLink;
