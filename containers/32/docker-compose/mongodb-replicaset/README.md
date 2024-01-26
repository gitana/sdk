# Gitana API Clustered + MongoDB Replica Set

This provides a simple example of running the Gitana API clustered on a MongoDB replica set.

This is provided solely for reference.

## Instructions

### Start the mongo servers first and then initialize the cluster:

    docker login --username {docker-username} --password '{docker-password}'
    docker-compose up -d mongodb1 mongodb2 mongodb3

### initialize the replic set. only have to do this once since the mongo servers persist their state to ./data/mongodbN (see dockercompose.yml)

    mongo localhost:27027 --eval 'rs.initiate( {_id : "cloudcms-replicaset",members: [ { _id: 0, host: "mongodb1:27017" },{ _id: 1, host: "mongodb2:27017" },{ _id: 2, host: "mongodb3:27017" }]})'

### or just run this:

    ./init-replicaset.sh

### If you don't have mongo client then open a shell to one of the mongo nodes and run it from there. The server you run the command on will probably become the PRIMARY so should probably run it on mongodb1

    rs.initiate( {
        _id : "cloudcms-replicaset",
        members: [
            { _id: 0, host: "mongodb1:27017" },
            { _id: 1, host: "mongodb2:27017" },
            { _id: 2, host: "mongodb3:27017" }
        ]
    })

### confirm the replica set is running. Run this command from the mongo shell client:

    rs.conf()

### start the rest of environment 1. wait for it to initialize (~3 minutes)

    docker-compose up -d activemq1 elasticsearch1 api1 ui1

### start environment 2

    docker-compose up -d activemq2 elasticsearch2 api2 ui2

### login to each environment with user: admin and password: admin

    http://localhost:180
    http://localhost:280

### now that environment is initialized you can start/restart the complete environment by running:

    docker-compose up --build --force-recreate --remove-orphans -d

### stop everything

    docker-compose down

## References

For more information, please see the following:
https://www.mongodb.com/docs/v4.2/tutorial/deploy-replica-set/
