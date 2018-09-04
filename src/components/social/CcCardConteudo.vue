<template>
   <div class="row">
   <div class="card">
      <div class="card-content">
         <div class="row valign-wrapper">
            <cc-grid tamanho="1">
               <img :src="perfil" :alt="nome" class="circle responsive-img"> <!-- notice the "circle" class -->
            </cc-grid>
            <cc-grid tamanho="11" class="col-xl-3">
      <span class="black-text">
      <strong>{{ nome }}</strong> - <small> {{ data }}</small>
      </span>
            </cc-grid>
         </div>

         <slot/>

      </div>
      <div class="card-action">
         <p>
            <i class="material-icons">favorite_border</i>
            <i class="material-icons">insert_comment</i>
         </p>
      </div>
   </div>
   </div>
</template>

<script>
	import CcGrid from '@/components/layouts/CcGrid'

	export default {
		name: "CcCardConteudo",
        props:['perfil','nome','data'],
		components: {
			CcGrid
		}
	}
</script>

<style scoped>

</style>