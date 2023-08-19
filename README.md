# pages

## Project setup
```
npm install
```

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
https://learnvue.co/articles/deploy-vue-to-github-pages 

