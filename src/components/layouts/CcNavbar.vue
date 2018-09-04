<template>
    <div>
        <nav :class="cor || blue">
            <div class="nav-wrapper container">
                <router-link class="brand-logo" :to="url || '/'"> {{ logo || 'Site'}} </router-link>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <slot></slot>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
  export default {
    name: 'CcNavBar',
    props: ['cor','url','logo'],
    data() {
      return {
      }
    }
  }
</script>

<style scoped>

</style>
