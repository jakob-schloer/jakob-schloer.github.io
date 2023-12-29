# VUE github page

## Prerequisites

1. Install npm and nodejs using snap on Ubuntu
```sudo snap install node --classic```

## Setup github website
1. Fork repo into githubname.github.io and clone repo
2. Use sudo rights to install packages: ```sudo npm install``` and ```sudo npm install -g @vue/cli```
3. Make one build as described below
4. Setup your github repo pages that it builds from the gh-pages branch

All the steps are described in [this](https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd) great blogpost. 

## Build and deploy 
1. Check if the website is running ```npm run serve```
2. Build website ```npm run build``` which creates the folder dist
3. Deploy the ```/dist``` folder to a branch called gh-pages by running the ```deploy.sh``` script.

The deployment is described [here](https://cli.vuejs.org/guide/deployment.html#github-pages).

### Lints and fixes files
```npm run lint```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## References

https://medium.com/@Roli_Dori/deploy-vue-cli-3-project-to-github-pages-ebeda0705fbd

https://learnvue.co/articles/deploy-vue-to-github-pages 

