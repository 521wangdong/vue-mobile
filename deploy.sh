# 部署命令是 bash deploy.sh

# 当发生错误时中止脚本
set -e

git add -A
git commit -m "更改了东西"
# 部署到 代码到msater上
git push -f git@github.com:521wangdong/vue-mobile.git master

# 构建
yarn build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'



# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:521wangdong/vue.git master:gh-pages

cd -