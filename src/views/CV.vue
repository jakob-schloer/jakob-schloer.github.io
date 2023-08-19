<template>
  <div class="cv">
    <div style="position: relative; 
      width: 100%; height: 0; padding-top: 141.4286%; padding-bottom: 0;
      box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
      border-radius: 8px; will-change: transform;">
      <iframe loading="lazy" style="position: absolute; width: 100%; 
      height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
        src="https://www.canva.com/design/DAFsBPtqQac/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
      </iframe>
    </div>
    <a href="https://www.canva.com/design/DAFsBPtqQac/view?utm_content=DAFsBPtqQac&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Resume</a> by Jakob Schlör
  </div>
</template>

<script>

export default {
  name: 'CV'
}
</script>

<style scoped lang="scss">

.container {
  max-width: 768px;
  margin: auto;
  overflow: auto;
  padding: 20px 10px;
}
a {
  text-decoration: none;
  color: var(--text-navbar);
}
a.hover {
  color: var(--text-highlight);
}
</style>
