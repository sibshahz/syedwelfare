@echo off
:: Start the Docker container
docker start db

:: Wait for a few seconds to ensure the container is up and running
timeout /t 3 /nobreak

:: Change to the server directory and start the server in a new window
start cmd /c "cd /d E:\software\code\syedwelfare-main\apps\server && npm run start"

:: Wait for a few seconds to ensure the server has started before moving to the next step
timeout /t 2 /nobreak

:: Change to the admin directory and start the admin in a new window
start cmd /c "cd /d E:\software\code\syedwelfare-main\apps\admin && npm run start"

:: Wait for a few seconds to ensure the admin app is ready
timeout /t 2 /nobreak

:: Open the default web browser with the specified link
start http://localhost:3000
