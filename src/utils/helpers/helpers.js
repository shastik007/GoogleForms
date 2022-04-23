export const sortCards = (a, b) => {
   if (a.order > b.order) {
      return 1
   }
   return -1
}

export const SaveLocalStorage = (key, data) => {
   const value = JSON.stringify(data)
   return localStorage.setItem(key, value)
}

export const GetLocalStorage = (key) => {
   const localData = JSON.parse(localStorage.getItem(key))
   return localData
}

export const RemoveToLocalStorage = (key) => {
   localStorage.removeItem(key)
}
