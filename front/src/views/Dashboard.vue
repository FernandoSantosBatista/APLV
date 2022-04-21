<template>
<body>
  <div class="container-fluid">
    <div class="container-fluid hero-image">
      <div class="hero-text col-xs-12 col-sm-12 col-md-8 col-lg-6">
        <h1>Bem vindo ao apoio a criança APLV</h1> 
      </div>
  </div>

  <div class="sub-titulo">
    <h2 class="display-6 text-center">Conheça mais sobre a alergia <br> ao leite de vaca</h2>
  </div>

  <div class="container sub-titulo">
    <h3 class="col h3 text-center">Nosso Objetivo</h3>
    <p class="text-center">Ajudar....</p>
    <p>O objetivo deste projeto é realizar um grupo de apoio a famílias de 
      crianças que possuem diagnóstico de APLV: são famílias que necessitam 
      de muita ajuda, pois além de se depararem com muitas dúvidas, o indivíduo 
      que sofre com todos os males causados pela alergia é uma criança, o que deixa 
      os responsáveis ainda mais angustiados.
      O foco principal será a realização de um banco de dados com responsáveis
      de crianças com APLV, para que haja o apoio às famílias, por meio de doações de fórmulas por 
      empresas que tenham essa fórmula sobressalente e/ou outras pessoas que se sensibilizarem a fazer a doação.
      Com este cadastro, quem estiver interessado em fazer a doação, filtrará a família mais próxima de sua residência e agendará a entrega em local firmado em comum acordo.</p>
  </div>  
</div>
</body>
</template>
<script>


export default {
  name: "Dashboard",
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
.hero-image {
  background-image: url(~@/assets/images/aplv.jpg);
  background-color: #020202; /* Used if the image is unavailable */
  height: 300px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

.container-fluid {
  padding-right: unset;
  padding-left: unset;
}

.container, .container-lg, .container-md, .container-sm {
    max-width: 960px;
    margin-top: 40px;
}

.hero-text {
  position: absolute;
  padding-left: 50px;
  margin-top: 80px;
  color: rgb(4, 10, 92);
  font-family: Arial, Helvetica, sans-serif;
}

p{
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.title{
  color: rgb(4, 10, 92);
}

.text{
  font-size: 18px;
}

a{
  text-decoration: none;
  color:rgb(18, 18, 19);
}
a:hover {
    text-decoration:none;
    color: #090753;
}

.sub-titulo{
  padding: 20px;
}
</style>
