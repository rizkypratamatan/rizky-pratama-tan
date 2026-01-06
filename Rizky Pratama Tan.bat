@echo off
title Rizky Pratama Tan
call pm2 list
cmd /k pm2 start cmd --name "rizky-pratama-tan" -- /c "npm run start -- -p 5001"
