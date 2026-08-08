import { MetadataRoute } from 'next';
import { ARTICLES } from '@/data/articles';
import { CATEGORIES } from '@/data/categories';
import { TOOLS } from '@/data/tools';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://marketlab-india-blog.vercel.app';

  const staticPages = [
    '',
    '/start-here',
    '/categories',
    '/articles',
    '/tools',
    '/newsletter',
    '/youtube',
    '/about',
    '/contact',
    '/editorial-policy',
    '/corrections-policy',
    '/privacy-policy',
    '/terms',
    '/disclaimer',
    '/affiliate-disclosure',
    '/pillars/relative-strength-index-rsi',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const toolPages = TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const articlePages = ARTICLES.map((art) => ({
    url: `${baseUrl}/articles/${art.slug}`,
    lastModified: new Date(art.updatedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categoryPages, ...toolPages, ...articlePages];
}
