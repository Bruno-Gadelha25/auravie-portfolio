export type PortfolioVariant = "full" | "clean";

function normalizePortfolioVariant(value: string | undefined) {
  return value?.trim().toLowerCase() === "clean" ? "clean" : "full";
}

function normalizePublicUrl(value: string) {
  return /^https?:\/\//i.test(value) ? value : `https://${value}`;
}

const fallbackSiteUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://brunogadelha-dba.vercel.app";

export const portfolioVariant: PortfolioVariant = normalizePortfolioVariant(
  process.env.NEXT_PUBLIC_PORTFOLIO_VARIANT,
);

export const isCleanVersion = portfolioVariant === "clean";
export const showExternalLinks = !isCleanVersion;

export const publicSiteUrl = normalizePublicUrl(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || fallbackSiteUrl,
);
