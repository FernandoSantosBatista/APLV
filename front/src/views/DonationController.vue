<template>
<body>
  <div class="container-fluid">
    <div class="text-center">
      <h2 ><strong>Área de doação: Relação de Cadastrados</strong></h2> 
      <p>Clique no cadastro mais próximo de sua residência para realizar a doação.</p> 
    </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-3 g-3" >
      <div class="" v-for="item in register" :key="item.id"> 
       <a :href="`mailto: ${item.email}`">
        <div class="card shadow" style="width: 18rem;">
          <ul class="list-group list-group-flush">
            <i class="bi bi-reply-all-fill"></i>
            <li class="list-group-item"> <strong> Nome: </strong> {{item.nome}}</li>
            <li class="list-group-item"> <strong> Bairro: </strong> {{item.bairro}}</li>
            <li class="list-group-item"> <strong> Cidade: </strong> {{item.cidade}}</li>
            <li class="list-group-item"> <strong> Email: </strong> {{item.email}}</li>
            <i class="bi bi-hand-index"></i>
          </ul>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</body>
</template>
<script>

import RegisterMixin from '../mixins/register-mixin';

export default {
  name: "DonationrController",
  mixins:[RegisterMixin],
  components: {
  },

  data() {
    return {
    };
  },
};
</script>
<style>
body {
  margin: 0;
}

.shadow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: left;
  font-family: arial;
  font-size: 16px;
}
.shadow:hover {
  border: 2.5px solid #2196f3;
  width: 30rem;
}
.shadow a {
  text-decoration: none;
}

h2 {
    margin-top: 40px;
}

.container{
  padding: 20px;
}

.bi{
  font-size: 20px;
  color: #2196f3;
  text-align: center;
}
  
</style>
