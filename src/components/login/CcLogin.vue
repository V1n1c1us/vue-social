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
				  if(response.data.token){
				  	//login com sucesso
					  console.log('login com sucesso');
                  }else if(response.data.status == false){
					  //login não existe
					  console.log('login não existe');
					  alert('Login Inválido!');
                  }else{
					  //erros de validação
					  console.log('erros de validação');

					  let erros = '';
					  for (let erro of Object.values(response.data)){
					  	erros += erro +" ";
                      }
					  alert(erros);
                  }
               })
               .catch(e => {
               	  console.log(e);
				   alert('Erro! Tente Novamente mais tarde');
               })
            }

        }
	}
</script>

<style scoped>

</style>