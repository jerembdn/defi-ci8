/* eslint-disable @next/next/no-img-element */
interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  className?: string;
}

const Image: React.FC<Props> = ({
  src,
  width,
  height,
  alt,
  onClick,
  className,
  ...rest
}: Props) => {
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      onClick={onClick}
      className={className}
      loading={"lazy"}
      draggable={false}
      {...rest}
    />
  );
};

export default Image;
