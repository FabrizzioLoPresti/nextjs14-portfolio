import { groq } from "next-sanity";

export const getHomeProjects = groq`*[_type == "project"] | order(_createdAt desc) [0..2] {
  _id,
  title,
  description,
  urlGithub,
  urlDeploy,
  "urlImage": image.asset->url,
  tags
}`

export const getAllProjects = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  description,
  urlGithub,
  urlDeploy,
  "urlImage": image.asset->url,
  tags
}`