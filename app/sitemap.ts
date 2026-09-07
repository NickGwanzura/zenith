import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
export default function sitemap(): MetadataRoute.Sitemap { const base='https://zenith-technologies-zimbabwe.sweet-mug-4574.chatgpt.site'; const paths=['','solutions','smart-home','security','smart-lighting','smart-access','voice-automation','products','projects','developers','about','contact']; return paths.map(path=>({url:base+'/'+path,lastModified:new Date()})); }
