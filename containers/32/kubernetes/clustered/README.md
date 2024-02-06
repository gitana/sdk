# Gitana - Clustered Kubernetes Example

This directory provides sample configuration files for how you might set up Gitana 3.2 to operate within
Kubernetes.

This example shows how to start things up so that the API containers operate in a cluster with strong
data consistency.  A minimum of 3 API members must be active at any one point.

Ensure that your service's deployments strategy maintains at least 3 live members during member
migration or rollouts.  This guarantees strong consistency.

The UI containers are clustered using Redis as a backing DB.

## NOT FOR PRODUCTION USE

These examples are provided for reference only.  They are for use within a DEVELOPMENT environment solely
and are NOT FOR PRODUCTION USE.

For more information, please see:

https://gitana.io/documentation/gitana/3.2/guide/guide/docker/container-frameworks/kubernetes.html