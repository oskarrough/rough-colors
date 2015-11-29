---
title: How to write and deploy a color palette REST API with Express
---

This is a work in progress for http://codesandnotes.com. Keeping it here as my own notes to remember all these commands.

Nevermind the below…

---

1. Change the description
2. Change the chdir folder below
3. Change the port (if you don't use 3000)
4. If `npm start` doesn't start your app, write what does

```
description "Rough Colors"

start on startup
start on filesystem and started networking
stop on shutdown
respawn

chdir /home/username/folder
env NODE_ENV=production
env PORT=3000
exec npm start
```

5. Put it into /etc/init/rough-colors.conf:

sudo nano /etc/init/rough-colors.conf
(paste in)
now you can do:

sudo [start/stop/restart] rough-colors

6. Install graphicsmagick

sudo apt-get graphicsmagick

7. sudo start rough-colors

---

// git clone this repo
rsync -azP --exclude 'node_modules' --exclude '.git' ./ oskar@46.101.253.25:~/rough-colors
cd rough-colors
npm install
npm start
// visit your IP
sudo apt-get update
sudo apt-get install nginx
// visit your IP

sudo restart rough-colors
