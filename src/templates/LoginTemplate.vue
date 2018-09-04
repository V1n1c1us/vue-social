<template>
  <span>
     <header>
     <!-- logo, url e cro ,vem do props-->
        <cc-nav-bar logo="Social" url="/" cor="green darken-1">
           <li><router-link to="/">Home</router-link></li>
           <li><router-link to="/login">Login</router-link></li>
           <li><router-link to="/cadastro">Cadastra-se</router-link></li>
        </cc-nav-bar>
     </header>
     <main>
        <div class="container">
           <div class="row">
              <cc-grid tamanho="8">
                 <cc-card-menu>
                  <slot name="menuesquerdo"></slot>
                 </cc-card-menu>
              </cc-grid>
              <cc-grid tamanho="4">
                  <slot name="principal"></slot>
              </cc-grid>
            </div>
         </div>
  </main>

  <footer>
    <cc-footer cor="green darken-1" logo="Social" descricao="Teste de Descrição" ano="2018">
      <li><a class="grey-text text-lighten-3" href="#!">Home</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Teste 2</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
      <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
    </cc-footer>
  </footer>

  </span>
</template>

<script>
	import CcNavBar from "@/components/layouts/CcNavbar";
	import CcFooter from "@/components/layouts/CcFooter";
	import CcGrid from "@/components/layouts/CcGrid";
	import CcCardMenu from "@/components/layouts/CcCardMenu";

	export default {
		name: "LoginTemplate",
		components: {
			CcNavBar,
			CcFooter,
			CcGrid,
			CcCardMenu
		}
	};
</script>

<style>
   * {
      margin: 0;
      padding: 0;
   }
</style>
