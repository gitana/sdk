#!/bin/bash

# secret: gitana-env
kubectl create secret generic gitana-env \
  --from-file=GITANA_ROOT_PROPERTIES=./config/root.properties \
  --from-file=GITANA_PROPERTIES_PRIVATE_KEY=./config/keys/properties.key \
  --from-file=GITANA_LICENSE=PATH_TO_YOUR_LICENSE_FILE

# secret: gitana-api
kubectl create secret generic gitana-api-files \
  --from-file=./config/api/classes/container.properties \
  --from-file=./config/api/classes/gitana-container-context.xml \
  --from-file=./config/api/classes/log4j2-container.xml \
  --from-file=./config/api/setup.sh

# av
kubectl apply -f av.yaml

# activemq
kubectl create configmap activemq-xml --from-file=activemq.xml
kubectl apply -f activemq.yaml

# mongodb
kubectl apply -f mongodb.yaml

# es
kubectl apply -f es.yaml

# gitana api
kubectl apply -f api.yaml

# gitana ui
kubectl apply -f ui.yaml