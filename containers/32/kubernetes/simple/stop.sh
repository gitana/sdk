#!/bin/bash

# ui
kubectl delete -f ui.yaml

# api
kubectl delete -f api.yaml

# es
kubectl delete -f es.yaml

# mongodb
kubectl delete -f mongodb.yaml

# av
kubectl delete -f av.yaml

# activemq
kubectl delete -f activemq.yaml
kubectl delete configmap activemq-xml --ignore-not-found

# secrets
kubectl delete secret gitana-env
kubectl delete secret gitana-api-files
