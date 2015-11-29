# Rough colors 🌴

An open REST API for finding colors from an image.

## Usage

$.getJSON('colors.oskarrough.com/v1/images/http://exa')

## Snippets (for my self)

ssh oskar@46.101.253.25

#
rsync -azP source/ destination

### References

- I can extract colors using https://github.com/josip/node-colour-extractor, which is great
- Deployed on Digital Ocean [tutorial](http://antrikshy.com/blog/deploy-an-expressjs-app-on-digital-ocean-complete-succinct-guide/)
— Synced with [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps)

## Tutorial

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
