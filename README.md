echo "# yeates-painting" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/castrogabe/yeates-painting.git
git push -u origin main

npm install react-router-dom
npm install bootstrap
npm install react-toastify bootstrap

FRONTEND
folder: components
Header.jsx > added
Footer.jsx > added

folder: pages
Home.jsx > added
Gallery.jsx > added
Problems.jsx > added
Testimonials.jsx > added
Contact.jsx > added

index.jsx > added
main.jsx > updated

steps for second commit, ect: Open new terminal or command prompt in VSCode for the project root

git add . (space between add .)
git status (shows staged files ready to commit in green)
git commit -m "2nd Commit add static data and steps for second commit" (I copy and paste this)
git status (tells us that everything is committed "working tree clean" on main branch)
git push
Now you can check repository for updated code.

START:
cd frontend > nvm use 20 > npm run dev

# update vite.config

git add .
git commit -m "Add GitHub Pages deployment"
git push

# Add Github pages workflow in root

new file: .github/workflows/deploy.yml

git commit -m "Add GitHub Pages workflow"
git push

# 4 git commit -m "Add GitHub Pages workflow"

# 5 update main.jsx

git add .
git commit -m "Fix React Router basename for GitHub Pages"
git push
