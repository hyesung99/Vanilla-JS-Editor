import NotionFetchClient from './NotionFetchClient.js'
import { END_POINTS } from '../constants/api.js'

export const getDocumentTree = async () => {
  const data = await NotionFetchClient.get(END_POINTS.DOCUMENT_TREE)
  return data
}

export const postDocumentBranch = async ({ title, parentId }) => {
  const data = await NotionFetchClient.post(END_POINTS.DOCUMENT_TREE, {
    title,
    parent: parentId,
  })
  return data
}

export const deleteDocumentBranch = async ({ id }) => {
  const data = await NotionFetchClient.delete(END_POINTS.DOCUMENT_DETAIL(id))
  return data
}
