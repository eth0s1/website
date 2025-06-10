#!/bin/bash

# Kullanıcıdan GitHub repository URL'sini al
echo "GitHub repository URL'sini girin (örn: https://github.com/kullanici/repo.git):"
read repo_url

# Git'i başlat
git init

# .gitignore dosyası oluştur
echo "node_modules
.next
.env
.env.local
.vercel" > .gitignore

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit"

# Remote'u ekle
git remote add origin $repo_url

# Main branch'i oluştur ve push et
git branch -M main
git push -u origin main

echo "GitHub'a başarıyla push edildi!" 