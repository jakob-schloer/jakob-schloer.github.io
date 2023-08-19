# VUE github page

## Setup github website
1. Fork repo into githubname.github.io and clone repo
2. Create branch gh-pages
3. ```npm install``` and ```npm install -g @vue/cli```
4. Make one build as described below
5. Setup your github repo pages that it builds from the gh-pages branch

All the steps are described in [this](https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd) great blogpost. 

## Build and compile
1. Checkout to gh-pages branch and merge main
2. ```npm run serve```
3. ```npm run build```
4. ```git add dist && git commit -m 'adding dist subtree' ```
5. ```git subtree push --prefix dist origin gh-pages```

### Lints and fixes files
```npm run lint```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## References

https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd

https://learnvue.co/articles/deploy-vue-to-github-pages 

