# Gitana API via Postman / Newman

The *postman* folder contains a Postman **Collection** of example API calls. 
Including automatic authentication.

For more information, please visit:

[Using Postman with the Gitana API](https://gitana.io/documentation/gitana/4.0/developers/frameworks/postman.html)

## Run with Postman

Steps:

1. Open Postman
2. Import the collection cloudcms-api.json
3. Set Authentication variables in Postman
4. Run the collection in Postman

## Run using newman

Please read through:
https://learning.postman.com/docs/running-collections/using-newman-cli/command-line-integration-with-newman/

Steps:

1. Edit env.json with data from gitana.json
2. run 'newman run cloud-cms.json -g env.json'

