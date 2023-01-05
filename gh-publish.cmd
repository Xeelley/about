:: b/master should be built before:
::
:: - npm run build
::

git checkout master 
cd dist
copy index.html 404.html /y
cd ..
git add .
git commit -m "rebuild"
git push
git subtree split --prefix dist -b gh-pages 
git push -f origin gh-pages:gh-pages 
git branch -D gh-pages 