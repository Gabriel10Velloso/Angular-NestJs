
# Como barrar o envio do package-lock.json pelo gitignore?
````
git rm --cached package-lock.json
git update-index --assume-unchanged package-lock.json
git update-index --no-assume-unchanged package-lock.json
````