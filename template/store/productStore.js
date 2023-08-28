const { defineStore } = Pinia; 
// data ,mounted, computed
// state, actions,getters
export default defineStore('productStore',{
  state: () => ({
    products: [
      {
        id:1,
        title:'測試1',
        imageUrl:'https://picsum.photos/200',
        price:80,
      },
      {
        id:2,
        title:'測試2',
        imageUrl:'https://picsum.photos/200',
        price:160,
      },
      {
        id:3,
        title:'測試5',
        imageUrl:'https://picsum.photos/200',
        price:100,
      },
      {
        id:4,
        title:'測試6',
        imageUrl:'https://picsum.photos/200',
        price:560,
      },
    ]
  }),
  getters: {
    sortProducts: ({ products }) => {
      return products.sort((a,b) => a.price-b.price);
    }
  }
})