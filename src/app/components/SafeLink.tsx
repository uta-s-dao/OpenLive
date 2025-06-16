import Link from "next/link";
import { ReactNode } from "react";

interface SafeLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export default function SafeLink({
  href,
  children,
  className = "",
  external = false,
  onClick,
  ...props
}: SafeLinkProps) {
  // URLの検証
  const isValidUrl = (url: string): boolean => {
    if (!url) return false;

    // 内部リンクの場合
    if (url.startsWith("/")) return true;

    // メールリンクの場合
    if (url.startsWith("mailto:")) return true;

    try {
      const urlObj = new URL(url);
      const allowedDomains = [
        "www.google.com",
        "maps.google.com",
        "www.instagram.com",
        "instagram.com",
        "www.youtube.com",
        "youtube.com",
      ];

      return allowedDomains.some(
        (domain) =>
          urlObj.hostname === domain || urlObj.hostname.endsWith("." + domain)
      );
    } catch {
      return false;
    }
  };

  // URLが無効な場合
  if (!isValidUrl(href)) {
    console.warn(`Invalid URL detected: ${href}`);
    return (
      <span className={`cursor-not-allowed opacity-50 ${className}`}>
        {children}
      </span>
    );
  }

  // 外部リンクの場合
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("mailto:") ? "_self" : "_blank"}
        rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  // 内部リンクの場合
  return (
    <Link href={href} className={className} onClick={onClick} {...props}>
      {children}
    </Link>
  );
}
