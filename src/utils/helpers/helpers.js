export const sortCards = (a, b) => {
   if (a.order > b.order) {
      return 1
   }
   return -1
}
