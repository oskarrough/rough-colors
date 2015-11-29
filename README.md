# Rough colors API

An open REST API for finding colors from an image.

## What?

Feed the API an image and it will return JSON with all the colors. It looks like this:

http://46.101.253.25/?url=http://40.media.tumblr.com/d329a025711da3b8cd5ecd62bdb8277c/tumblr_nw85l3EzGd1uubkx7o1_500.jpg

With that, you can build something like this:

http://haku.surge.sh/?url=http://40.media.tumblr.com/d329a025711da3b8cd5ecd62bdb8277c/tumblr_nw85l3EzGd1uubkx7o1_500.jpg

### References

- I can extract colors using https://github.com/josip/node-colour-extractor, which is great
- Deployed on Digital Ocean [tutorial](http://antrikshy.com/blog/deploy-an-expressjs-app-on-digital-ocean-complete-succinct-guide/)
— Synced with [rsync](https://www.digitalocean.com/community/tutorials/how-to-use-rsync-to-sync-local-and-remote-directories-on-a-vps)
