import { apiVersion,dataset, projectId, useCdn } from 'lib/sanity.api'
import { createClient } from 'next-sanity'

import { fallbackNewsArticles } from '@/lib/news-fallback'

import {
  allCities,
  allNewsArticles,
  allPost,
  allRecipes,
  newsArticleByYearAndSlug,
  newsArticlesByYear,
  Recipebyslug
} from './sanity.queries'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null


export async function getAllPosts() {
  if (client) {
    return (await client.fetch(allPost)) || []
  }
  return []
}

export async function getAllCities() {
  if (client) {
    return (await client.fetch(allCities)) || []
  }
  return []
}

export async function getAllNewsArticles() {
  if (client) {
    const articles = (await client.fetch(allNewsArticles)) || []
    return articles.length ? articles : fallbackNewsArticles
  }
  return fallbackNewsArticles
}

export async function getNewsArticleByYearAndSlug(year: number, slug: string) {
  if (client) {
    const article = (await client.fetch(newsArticleByYearAndSlug, { year, slug })) || null
    if (article) {
      return article
    }
  }
  return fallbackNewsArticles.find((item) => item.year === year && item.slug === slug) || null
}

export async function getNewsArticlesByYear(year: number) {
  if (client) {
    const articles = (await client.fetch(newsArticlesByYear, { year })) || []
    if (articles.length) {
      return articles
    }
  }
  return fallbackNewsArticles.filter((item) => item.year === year)
}

export async function getAllRecipes() {
  if (client) {
    return (await client.fetch(allRecipes)) || []
  }
  return []
}

export async function getRecipebyslug(slug: string) {
  if (client) {
    return (await client.fetch(Recipebyslug, {slug})) || []
  }
  return []
}
