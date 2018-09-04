<template>
   <span>
   <div v-if="img" class="card-image">
      <img :src="img">
      <span class="card-title">{{ titulo || ''}}</span>
   </div>
   <div v-if="texto" class="card-content">
      <p>{{ texto }}</p>
   </div>
   </span>
</template>

<script>
	export default {
		name: "CcCardDetalhe",
        props:['img','titulo','texto'],
        data () {
			return {
            }
        }
	}
</script>

<style scoped>

</style>