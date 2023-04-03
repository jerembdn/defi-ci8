import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

import APP from "@/constants/app";

type HeadProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string[];
  thumbnailUrl?: string;
  noIndex?: boolean;
  noFollow?: boolean;
};

const Head: React.FC<HeadProps> = ({
  title,
  subtitle,
  description,
  keywords,
  thumbnailUrl,
  noIndex,
  noFollow,
}: HeadProps) => {
  const { locales, asPath } = useRouter();

  const finalTitle = title
    ? `${subtitle ? `${subtitle} - ` : ""}${title} | ${APP.NAME}`
    : APP.NAME;

  const finalThumbnailUrl =
    thumbnailUrl || "/static/images/open-graph-image.jpg";

  const languageAlternates =
    locales &&
    locales.map((locale) => ({
      hrefLang: locale,
      href: `${APP.URL}/${locale}${asPath}`,
    }));

  return (
    <NextSeo
      title={finalTitle}
      description={description}
      openGraph={{
        title: finalTitle,
        description: description,
        site_name: APP.NAME,
        images: [
          {
            url: finalThumbnailUrl,
            alt: finalTitle,
            type: "image/jpeg",
          },
        ],
      }}
      twitter={{
        handle: "@tonightpass",
        site: "@tonightpass",
        cardType: "summary_large_image",
      }}
      languageAlternates={languageAlternates}
      additionalMetaTags={[
        {
          property: "keywords",
          content: `tonightpass, tonight, pass${
            keywords ? `, ${keywords.join(", ").toLowerCase()}` : ""
          }`,
        },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0",
        },
      ]}
      noindex={noIndex}
      nofollow={noFollow}
    />
  );
};

export type { HeadProps };
export default Head;
