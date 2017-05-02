export const detailRoute = (item) =>{
  return {
    type: 'push',
    route: {
      key: 'detail',
      title: 'Detail',
      serieItem:item
    }
  }
}
