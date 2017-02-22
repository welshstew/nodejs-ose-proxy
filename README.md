# nodejs-oseproxy

Pet project to proxy http requests to services running inside openshift.

## What it does currently..?

- proxies a request, ensures it has HTTP Basic Auth, then forwards the request to an internal service.  Basic Auth via users.htpasswd.


## TODO

- Load config from a JSON file
- Read up on [express](https://expressjs.com/)
- Try [express-http-proxy](https://github.com/villadora/express-http-proxy)
- Proxy to multiple services based on the URI
- Intercept and log/modify http requests (add headers)
- Intercept and log/modify SOAP requests
- Configure alternative forms of authentication - [use passport](http://passportjs.org/)
- Perform LDAP lookups for entitlements (group memberships)

## Deploying to OpenShift

```
oc new-project nodejs

#add the template..
oc create -f kube/nodejs-proxy-template.yaml

#get the docker registry ip
export REGISTRY_IP=$(oc get svc/docker-registry -n default -o json | jq -r .spec.clusterIP)
oc new-app --template=nodejs-ose-proxy -p REGISTRY_IP=$REGISTRY_IP

```

## Stuff to read

- [https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/](https://blog.risingstack.com/node-hero-node-js-authentication-passport-js/)
- [express](https://expressjs.com/)
- [express-http-proxy](https://github.com/villadora/express-http-proxy)
- [use passport](http://passportjs.org/)
