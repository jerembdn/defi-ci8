import NextLink, { type LinkProps } from "next/link";
import Icon from "../Icon";

interface Props extends LinkProps {
  className?: string;
  children: React.ReactNode;
  [key: string]: any;
}

const Link: React.FC<Props> = ({
  href,
  as,
  className,
  locale,
  children,
  ...rest
}: Props) => {
  const isString = (x: any) => {
    return Object.prototype.toString.call(x) === "[object String]";
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    const hrefString = String(href);
    const targetId = hrefString.substring(hrefString.indexOf("#") + 1);

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isString(href)) {
    href = href as string;
    const internal = /^\/(?!\/)/.test(href);
    if (!internal) {
      return (
        <a
          href={href}
          className={className}
          target={"_blank"}
          rel={"noopener noreferrer"}
          {...rest}
        >
          {children}

          <Icon name={"arrow-right-up"} />
        </a>
      );
    }
  }

  return (
    <NextLink href={href} as={as} locale={locale} legacyBehavior>
      <a className={className} onClick={handleClick} {...rest}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
