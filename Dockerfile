FROM nginx:alpine

COPY html/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# site-config.js is deliberately not part of the image (it holds a specific
# receiver's coordinates) - bind-mount your own over
# /usr/share/nginx/html/site-config.js, see README.md.
