import productStore from "../store/productStore.js";
import cartStore from "../store/cartStore.js";
const { mapState,mapActions } = Pinia ;

export default {
  template:`<div class="row row-cols-3 mx-4 bg-warning">
  <div class="col" v-for="product in sortProducts" :key="product.id">
    <div class="card m-4">
    <div>{{product.id}}</div>
      <img :src="product.imageUrl" class="card-img-top" :alt="'card-image'+product.id">
      <div class="card-body">
        <h6 class="card-title">{{product.title}}<span class="float-end">{{product.price}}</span></h6>
      </div>
      <a href="#" class="btn btn-outline-success w-100" @click.prevent="addToCart(product.id)">Go somewhere</a>
    </div>
  </div>
</div>
  `,
  computed: {
    ...mapState(productStore,['sortProducts'])
  },
  methods:{
    ...mapActions(cartStore,['addToCart'])
  }
};