import cartStore from "../store/cartStore.js";
const { mapState,mapActions } = Pinia;

export default {
  template:`<div class="bg-info mx-4 py-4">
    <div v-if="!cartList.carts.length" >No item</div>
    <table v-else class="table">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td>
            <a href="#" class="text-dark" @click.pevent="removeCartItem(item.id)">X</a>
          </td>
          <td>
            <img :src="item.product.imageUrl" alt="picture" class="table-image">
          </td>
          <td>{{item.product.title}}</td>
          <td>
            <select class="form-select" :value="item.qty" @change="(event) => setCartQty(item.id,event)">
              <option :value="cnt" v-for="cnt in 10" :key="cnt" >{{cnt}}</option>
            </select>
          </td>
          <td class="text-end">$ {{item.subtotal}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="text-end" colspan="5">$ {{cartList.total}}</td>
        </tr>
      </tfoot>
    </table>
  </div>
  `,
  computed:{
    ...mapState(cartStore,['cartList'])
  },
  methods:{
    ...mapActions(cartStore,['removeCartItem','setCartQty'])
  }
};