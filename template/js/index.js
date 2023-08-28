import NavbarComponent from "./../components/navbar.js";
import CartComponent from "./../components/cart.js";
import ProductComponent from "../components/product.js";
import productStore from "./../store/productStore.js";

const { createApp } = Vue;
const { createPinia } = Pinia;

const url = 'https://vue3-course-api.hexschool.io/' ;
const pathName = 'rainj' ;

const app = createApp({
  data() {
    return {
      products:{},
    }
  },
  components:{
    NavbarComponent,
    CartComponent,
    ProductComponent
  },
  mounted(){
    this.getProduct();
  },
  methods:{
    getProduct(){
      axios.get(`${url}v2/api/${pathName}/products`)
        .then(res =>{
          this.products = res.data.products
        })
        .catch(err =>{
          alert(err)
        }) ;
    }
  }
}) ;

const pinia = createPinia() ;
app.use(pinia) ;
app.mount('#app') ;