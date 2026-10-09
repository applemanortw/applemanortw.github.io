import type { ImageMetadata } from 'astro';
import site from '../data/site.json';
import products from '../data/products.json';

export type Spec = { label: string; value: string };
export type Extra = { title: string; text: string };
export type Product = {
  id: string;
  slug: string;
  category: string;
  name: string;
  summary: string;
  description: string[];
  specs: Spec[];
  extras?: Extra[];
  note?: string;
  color: string;
  alt: string;
};
export type Category = (typeof site.categories)[number];

export { site, products };
export const allProducts = products as Product[];

/** 把站內路徑加上 base（GitHub Pages 子路徑用） */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (path.startsWith('http')) return path;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

const productImages = import.meta.glob<{ default: ImageMetadata }>('/src/assets/products/*.webp', { eager: true });

/** 商品圖（build 時由 Astro 產生多種尺寸） */
export function productImage(p: Product): ImageMetadata {
  const mod = productImages[`/src/assets/products/${p.slug}.webp`];
  if (!mod) throw new Error(`找不到商品圖：src/assets/products/${p.slug}.webp`);
  return mod.default;
}

export function categoryBySlug(slug: string): Category | undefined {
  return site.categories.find((c) => c.slug === slug);
}

export function productsIn(category: string): Product[] {
  return allProducts.filter((p) => p.category === category);
}
