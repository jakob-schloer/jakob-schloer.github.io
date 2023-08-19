<template>
  <div class="social-media">
    <a class="social-media" href="https://github.com/jakob-schloer">
      <fa :icon="['fab', 'github']" class="fa-lg"/>
    </a>
    <a class="social-media" href="https://twitter.com/schloer_jakob">
      <fa :icon="['fab', 'twitter']" class="fa-lg"/>
    </a>
  </div>
</template>

<script>

export default {
  name: 'SocialMedia'
}
</script>

<style lang="scss">
.social-media {
  color: var(--social-regular);
  background-color: transparent;
  text-decoration: none;
  padding: 5px;
}

.social-media:hover {
  color: var(--social-highlight);
  background-color: transparent;
  text-decoration: underline;
}
</style>