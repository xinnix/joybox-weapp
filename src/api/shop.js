import { fetchWithAccessToken, fetchWithAccessTokenV2 } from './fetchKF'

// shop
export const getAllGoods = (page, limit, option) =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2(`/goods?page=${page}&limit=${limit}`, 'get', option)
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve({
            goods: result.data.data,
            totalCount: parseInt(result.header['x-total-items-count'], 10)
          })
        } else {
          resolve({
            goods: [],
            totalCount: 0
          })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })

export const sellCard = data =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/sellCard', 'post', data) // sell card --- '/api/v2/sellCard'
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve(result.data.data)
        } else {
          resolve({})
        }
      })
      .catch((err) => {
        reject(err)
      })
  })

export const buyGood = data =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/buyGood', 'post', data)
      .then((result) => {
        resolve(result)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const revertGood = data =>
  new Promise((resolve, reject) => {
    fetchWithAccessTokenV2('/revertGood', 'post', data)
      .then((result) => {
        resolve(result.data.data)
      })
      .catch((err) => {
        reject(err)
      })
  })

export const getMyBagCards = (page, limit) =>
  new Promise((resolve, reject) => {
    fetchWithAccessToken(`/myBag?page=${page}&limit=${limit}`, 'get') // knapsack page --- 'GET /api/v2/myBag'
      .then((result) => {
        if (result.data && (result.data.code === 'success')) {
          resolve({
            cards: result.data.data.cards,
            totalCount: result.header['x-total-items-count'] || result.data.data.cards.length
          })
        } else {
          resolve({
            cards: [],
            totalCount: 0
          })
        }
      })
      .catch((err) => {
        reject(err)
      })
  })
