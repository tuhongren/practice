const { mapState } = Pinia ;
import cartStore from "../store/cartStore.js";

export default {
  template:`<nav class="navbar bg-warning">
    <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">電商</span>
        <button type="button" class="btn btn-danger">
          購物車<span class="badge bg-secondary text-white">{{ cartList.carts.length }}</span>
        </button>
    </div>
  </nav>
  `,
  computed:{
    ...mapState(cartStore,['cartList'])
  }
};