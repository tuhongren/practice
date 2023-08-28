const { defineStore } = Pinia; 
import productStore from "./productStore.js";
// data ,methids, computeds
// state, actions,getters
export default defineStore('cartStore',{
  state:() => ({
    cart:[]
  }),
  actions: {
    addToCart(productId,qty=1){
      const currentCart = this.cart.find((item) => productId === item.productId)
      if(currentCart) {
        currentCart.qty += qty ;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty
        })
      }
    },
    setCartQty(productId,event){
      const currentCart = this.cart.find((item) => productId === item.id) ;
      currentCart.qty = Number(event.target.value) ;
    },
    removeCartItem(productId){
      const index= this.cart.findIndex((item) => productId === item.id)
      this.cart.splice(index,1);
    },
  },
  getters:{
    cartList: ({ cart }) =>{
      const { products } = productStore();
      const carts = cart.map((item) => {
        const product = products.find((product) => product.id === item.productId)
        return {
          ...item,
          product,
          subtotal:product.price*item.qty
        }
      }) ;

      const total = carts.reduce((a,b) => a+b.subtotal, 0)
      return {
        carts,
        total
      }
    }
  }
})