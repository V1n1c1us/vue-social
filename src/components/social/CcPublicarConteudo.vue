<template>
   <div class="row">
      <cc-grid class="input-field" tamanho="12">
         <textarea v-model="conteudo" id="conteudo" class="materialize-textarea"></textarea>
         <label for="conteudo">Que se passa??</label>
      </cc-grid>
      <p>
         <cc-grid v-if="conteudo" class="btn waves-effect waves-light" tamanho="2 offset-s10">Publicar</cc-grid>
      </p>
   </div>
</template>

<script>
	import CcGrid from '@/components/layouts/CcGrid'

	export default {
		name: "CcPublicarConteudo",
        props:[],
		components: {
			CcGrid
		},
        data () {
			return {
               conteudo: ''
            }
        }
	}
</script>

<style scoped>

</style>