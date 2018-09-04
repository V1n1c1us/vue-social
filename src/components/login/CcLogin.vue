<template>
  <login-template>
     <span slot="menuesquerdo">
      <img src="https://static.quizur.com/i/b/5b035c77702c13.471891555b035c775c3ff9.54480388.png" alt="" class="responsive-img">
     </span>
     <span slot="principal">
           <h2>Login</h2>
            <input type="text" placeholder="E-mail" value="" v-model="usuario.email">
            <input type="password" placeholder="Senha" value="" v-model="usuario.password">
           <button class="btn" @click="login()">Entrar</button>
           <router-link class="btn blue-grey" to='/cadastro'>Cadastro</router-link>
        </span>
  </login-template>
</template>

<script>
	/* eslint-disable no-mixed-spaces-and-tabs,no-console */

	import LoginTemplate from "@/templates/LoginTemplate"
    import  axios from 'axios'
	export default {
		name: "CcLogin",
        data () {
			return {
				usuario: {
				  email:'',
                  password:''
                }
            }
        },
        components: {
			LoginTemplate
        },
        methods: {
			login () {
               axios.post(`http://localhost/api-social/public/api/login`, {
               	  email: this.usuario.email,
               	  password: this.usuario.password
               })
               .then(response => {
				  console.log(response);
               })
               .catch(e => {
               	  console.log(e);
               })
            }

        }
	}
</script>

<style scoped>

</style>