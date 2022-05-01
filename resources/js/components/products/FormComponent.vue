<template>
<div>
    <form v-on:submit.prevent="newProduct">
        <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" class="form-control" id="name" v-model="product.nombre">
        </div>
        <div class="form-group">
            <label for="name">Tradicion</label>
            <input type="text" class="form-control" id="tradicion" v-model="product.tradicion">

        </div>
        <div class="form-group">
            <label for="name">Precio</label>
            <input type="text" class="form-control" id="precio" v-model="product.precio">

        </div>
        <button type="submit" class="btn btm-primary">Guardar</button>
    </form>
    {{product}}
    </div>
</template>

<script>

export default {
    name: 'FormComponent',
    data() {
        return {
            product: {
                nombre: '',
                tradicion: '',
                precio: 0.0
            }

        }

    },

    methods: {
        newProduct() {
           axios.post('api/products', this.product).then((response) =>{
               this.$emit('add', response,data.product)
               this.$router.push({name: 'indexProduct'})
           })
        }
    }
          
}
</script>
