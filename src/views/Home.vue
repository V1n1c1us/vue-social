<template>
  <site-template>
    <span slot="menuesquerdo">
      <div class="row valign-wrapper">
                       <cc-grid tamanho="4">
                          <img src="https://materializecss.com/images/yuna.jpg" alt="" class="circle responsive-img"> <!-- notice the "circle" class -->
                       </cc-grid>
                       <cc-grid tamanho="8">
                          <span class="black-text">
                             <h5>Vinícius</h5>
                              Add the "circle" class to it to make it appear circular.
                          </span>
               </cc-grid>
            </div>
    </span>

    <span slot="principal">
<cc-publicar-conteudo>

    </cc-publicar-conteudo>
    <cc-card-component
            perfil="https://materializecss.com/images/yuna.jpg"
            nome="Vinícius Diehl de Franceschi"
            data="24/08/2018 01:55">
      <cc-card-detalhe
              img=""
              tiulo=""
              texto="I am a very simple card. I am good at containing small bits of information.
               I am convenient because I require little markup to use effectively.">
      </cc-card-detalhe>
    </cc-card-component>
    </span>

  </site-template>
</template>

<script>
	// @ is an alias to /src
	import CcCardComponent from '@/components/social/CcCardConteudo'
    import CcCardDetalhe from '@/components/social/CcCardDetalhe'
	import CcPublicarConteudo from '@/components/social/CcPublicarConteudo'
	import CcGrid from "@/components/layouts/CcGrid"
    import SiteTemplate from "@/templates/SiteTemplate"

	export default {
  name: 'home',
  components: {
    CcCardComponent,
    CcCardDetalhe,
    CcPublicarConteudo,
    CcGrid,
    SiteTemplate
  }
}
</script>
