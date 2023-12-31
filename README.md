# Hosting setup

To get the additional git actions working in Plesk so that the site will rebuild when new code is pushed to main:

- Go to the Domain > Hosting & DNS > Web Hosting Access
- Change Access to the server over SSH to /bin/bash then Apply

Setting up Git in Plesk:

- Go to the Domain > Git repository
- Respository name - evo-drainage.co.uk
- Repository URL - https://github.com/jaceuk/evo-drainage.co.uk
- Make sure to setup the Webhook in Github using the Webhook URL here
- Server path - /
- Enable additional deployment actions

```
rm -rf tmp
(PATH=/opt/plesk/node/17/bin/:$PATH;  npm install && npm run build &> npm-install.log)
mkdir tmp
touch tmp/restart.txt
```

Setting up Git in Plesk:

- Node.js Version - 17.9.1
- Package Manager - npm
- Document Root - /dist
- Application Mode - production
- Application URL - http://www.evo-drainage.co.uk
- Application Root - /
- Application Startup File - node_modules/.bin/astro edit
- Custom environment variables
  - PUBLIC_ENVIRONMENT: production
