import { apiVersion,dataset, projectId, useCdn } from 'lib/sanity.api'
import { createClient } from 'next-sanity'

import {
  allCities,
  allPost,
  allRecipes,
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