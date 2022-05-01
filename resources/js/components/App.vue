<template>
  <div role="main">

    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#" >Comidas</a>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item ">
         <router-link  class="nav-link active" :to='{name: "home"}'> Home</router-link>
         </li>
         <li class="nav-item">
         <router-link  class="nav-link active" :to='{name: "indexProduct"}'> Productos</router-link>
         </li>
         <li class="nav-item">
          <router-link  class="nav-link active" :to='{name: "contact"}'> Contacto</router-link>
         </li>
       </ul>
      </div>
   </nav>


   <router-view></router-view>


  </div>

</template>
