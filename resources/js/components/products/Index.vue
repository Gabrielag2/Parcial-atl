<template>
    
   <div>
       <div class="container">
           <div class="row">
              <div class="offset.md-3 col-md-6">
                 <h3>Ingresar nueva comida</h3>
                <form-component></form-component>
                </div>
            </div> 
        </div>

        
        <div class="album py-5 bg--light">
            <div class="container">
               
                <div class="row">
                <div class="col-md-4">
                    <div class="col-md-4 box-shadow">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                         <h3> {{product.nombre}} </h3>
                       <p class="card-text"> {{product.descripcion}} </p>
                       <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <router-link class="btn btn-danger" :to='{name :"editProduct", params: {id: product.id}}'>Editar</router-link>
                          <button type="button" class="btn btn-danger">Editar</button>
                          <button @click="deleteProduct(product.id)" type="button" class="btn btn-warning">eliminar</button>
                       </div>
                       <small class="text-muted"> {{product.precio}} dolar</small>
                    </div>
                </div>
               
           
   
   
            </div>


        </div>

    </div>


</template>
       
<script>
import { defineComponent } from '@vue/composition-api'
       
export default {

    name: 'indexProducts',
    data(){
        return{
            products: [
              /*  {
                    id: 1,
                    nombre:'Pavo',
                    tradicion:'En El Salvador se acostumbra a desgustar con la familia un pavo horneado con salsa típica en la epoca de navidad',
                    Precio: 20,
                    imagen: 'http://assets.kraftfoods.com/recipe_images/opendeploy/128173_MXM_K60613V0_OR1_CR_640x428.jpg'
                },
                {
                    id: 2,
                    nombre:'Tortas',
                    tradicion:' En semana santa las personas tienen como tradición hacer tortas de pescado o de camarón',
                    Precio: 20,
                    imagen: 'http://assets.kraftfoods.com/recipe_images/opendeploy/128173_MXM_K60613V0_OR1_CR_640x428.jpg'
                }*/
                    
            ]
        }
    },
    moounted(){
      this.showProducts
    },
    methods: {
        deleteProduct(productId) {
            axios.delete('api/products/'+ productId).then((response) => {
                let pos = this.products.map(function(product) { return product.id }).indexOf(productId)
                this.products.splice(pos, 1)
            })
            },
        showProducts() {
            axios.get('api/products').then((response) => {
                this.products = response.data.products
            })
        }
    }
}
 



</script>
       
        



 