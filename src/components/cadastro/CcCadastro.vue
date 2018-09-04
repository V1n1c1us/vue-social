<template>
  <login-template>
     <span slot="menuesquerdo">
      <img src="https://static.quizur.com/i/b/5b035c77702c13.471891555b035c775c3ff9.54480388.png" alt="" class="responsive-img">
     </span>
     <span slot="principal">
           <h2>Cadastro</h2>
           <input type="text" placeholder="Nome" value="">
            <input type="text" placeholder="E-mail" value="">
            <input type="password" placeholder="Senha" value="">
           <input type="password" placeholder="Confirme sua senha" value="">
           <button class="btn">Enviar</button>
           <router-link class="btn blue-grey" to='/login'>Já tenho conta</router-link>
        </span>
  </login-template>
</template>

<script>
	import LoginTemplate from "@/templates/LoginTemplate"
	export default {
		name: "CcCadastro",
        data () {
			return {
            }
        },
        components: {
			LoginTemplate
        }
	}
</script>

<style scoped>

</style>