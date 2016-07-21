# nodejs-oseproxy

Simple Stuff

## Deploying to OpenShift

```
oc new-project nodejs

#add the template..
oc create -f kube/nodejs-template.yaml

#get the docker registry ip
export REGISTRY_IP=$(oc get svc/docker-registry -n default -o json | jq .spec.clusterIP)
oc new-app --template=nodejs-sample -pREGISTRY_IP=${REGISTRY_IP} 

```
