<template>
  <footer class="text-center text-white" style="background-color:#F8F9FA;">
  <div class="container pt-4">
    <div class="mb-4 text-center text-dark">
        <p href="">
          <br>
          Compartilhe essa idéia!!! <br>
            <a href="mailto:?subject=http://localhost:8080/doar%20" class="bi bi-share-fill"></a>
          <br>
          Desenvolvido por Projeto Integrador
        </p>

      </div>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        ><i class="bi bi-facebook"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="bi bi-twitter"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="bi bi-instagram"></i
      ></a>

      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="bi bi-linkedin"></i
      ></a>
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="https://github.com"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="bi bi-github"></i
      ></a>
  </div>

  <div class="text-center text-dark p-3" style="background-color: #F8F9FA;">
    © 2022 Copyright: All rights reserved
    <a class="text-dark" href=""></a>
  </div>
</footer>
</template>

<script>

export default {
    name:"Footer",
    data(){
        return{

        }
    },
    methods:{
                  
        }
    }

</script>
<style  scoped >

.bi{
  text-decoration: none;
  color:#212529;
  font-size: 1.7rem;
}
.bi:hover {
    text-decoration:none;
    color: #0D6EFD;
}



</style>