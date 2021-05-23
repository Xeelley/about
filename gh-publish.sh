git checkout master 
cp ./dist/index.html ./dist/404.html
git subtree split --prefix dist -b gh-pages 
git push -f origin gh-pages:gh-pages 
git branch -D gh-pages 