<template>
   <!-- vai renderizar só as rotas -->
   <router-view/>
</template>

<script>
	import CcNavBar from "@/components/layouts/CcNavbar";
	import CcFooter from "@/components/layouts/CcFooter";
	import CcGrid from "@/components/layouts/CcGrid";
	import CcCardMenu from "@/components/layouts/CcCardMenu";

	export default {
		name: "app",
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
