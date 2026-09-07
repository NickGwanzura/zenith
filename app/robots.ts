import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function robots(): MetadataRoute.Robots { return {rules:{userAgent:'*',allow:'/'},sitemap:'https://zenith-technologies-zimbabwe.sweet-mug-4574.chatgpt.site/sitemap.xml'}; }
