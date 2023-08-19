<template>
<div class="publication container">
    <a :href="link">
        <div class="card mb-3">
            <div class="row g-0">
                    <div class="card-body">
                        <div class="card-text font-italic">
                            <p class="card-text left">{{ year }}</p>
                            <p class="card-text right">{{ journal }}</p>
                        </div>
                        <h5 class="card-title mb-2">{{ title }}</h5>
                        <p class="card-subtitle mb-2 text-muted">{{ authors }}</p>
                    </div>  
                <!-- </div> -->
            </div>
        </div> 
   <!-- <div class="card mb-3">
            <div class="row g-0">
                    <div class="card-body">
                        <h5 class="card-title mb-2">{{ title }}</h5>
                        <p class="card-subtitle mb-2 text-muted">{{ authors }}</p>
                        <div class="text-muted font-italic">
                            <small class="card-subtitle left">{{ year }}</small>
                            <small class="card-subtitle right">{{ journal }}</small>
                        </div>
                    </div> 
            </div>
        </div> -->
    </a>
</div>
</template>

<script>

export default {
  name: 'PublicationCard',
  props: {
    title: String,
    link: String,
    authors: String,
    year: String,
    journal: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
    text-decoration: none;
    color: var(--text-regular);
}

a:hover {
    color: var(--text-highlight);
}
.left {
    width: 49%;
    display: inline-block;
}

.right {
    width: 50%;
    text-align: right;
    display: inline-block;
}
</style>
