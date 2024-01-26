# Gitana SDK

Welcome to the Gitana SDK.

This repository contains deployment scripts, sample code, demos and other facilities to help you
getting started using the Gitana platform.

## Gitana Platform

Gitana lets you curate, preview and approve insightful knowledge for training, validation and 
scheduled release to the Foundation Models, private LLMs, vector DBs and API services that 
support your live customers.

The platform streamlines the following:

* Raw data comes in.  
* Editorial and approval teams curate that data into knowledge alongside automated experts.
* That knowledge is taught to foundation models, smart API endpoints and LLMs.
* Once everything is trained up and ready to go, the release goes on-time as scheduled.

The Gitana platform is available as both a cloud-hosted service and self-managed containers.  This allows
customers to own their data, maintain private LLMs and Foundation Models and never cede their
informational competitive advantage.

For more information or to get started, please visit:

    https://gitana.io/

## Contents

### Code Samples

The `code-samples` directory contains samples of how to use our various drivers, REST APIs and middleware
components within your own applications.  These should serve as a basis and a reference for building your 
own applications.

### Containers

The `containers` directory contains guides and source configurations to help self-managed or on-premise
users with deploying Gitana into various container frameworks, including Kubernetes, Amazon ECS and others.

There are examples here for both Gitana 3.2 and Gitana 4.0.

### HTTP Deployment Receiver

The `http-deployment-receiver` directory contains a sample Node.js-based deployment receiver that you can
instantiate to get an idea of how to handle your own deployments.  Content is sent to your listener and you
can use this to potentially update a local database, invalidate cache, populate a search index or more.

### Packager

The `packager` directory contains examples how to use our ETL (Extract, Transform, Load) tool to consume
data from external sources (such as databases, email or file systems) and store that content into Gitana.

### UI Extensions

The `ui-extensions` directory contains sample modules, form components and theme extensions that can be 
applied to the Gitana User Interface (both in the cloud and self-managed) to change the user interface 
and/or introduce new functionality.

### UI Frameworks

The `ui-frameworks` directory contains samples of how to utilize the Gitana APIs from within various
frontend UI frameworks such as Next.js, Nuxt, React and others).

### Web Hook Server

The `webhook-server` directory contains a sample Node.js-based Web Hook server that you can run to get
an idea of how to handle web hooks that are triggered by Gitana's event system.  You can use this to
potentially update a local DB, perform cache invalidation or fire off custom logic as per your needs.

## Drivers

Gitana provides drivers for specific languages that help you to get started building awesome things.
For guidance on these drivers, please see:

[Gitana - C# Driver](https://gitana.io/documentation/gitana/4.0/developers/drivers/csharp.html)
[Gitana - Go Driver](https://gitana.io/documentation/gitana/4.0/developers/drivers/go.html)
[Gitana - Java Driver](https://gitana.io/documentation/gitana/4.0/developers/drivers/java.html)
[Gitana - JavaScript Driver](https://gitana.io/documentation/gitana/4.0/developers/drivers/javascript.html)
[Gitana - PHP Driver](https://gitana.io/documentation/gitana/4.0/developers/drivers/php.html)
[Gitana - Python Driver](https://gitana.io/documentation/gitana/4.0/developers/drivers/python.html)
[Gitana - Ruby Driver](https://gitana.io/documentation/gitana/4.0/developers/drivers/ruby.html)

## Cookbooks

As you learn about Gitana, the following cookbooks offer useful guides on various topics:

[Gitana - Content Modeling Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/content-modeling.html)
[Gitana - C# Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/csharp.html)
[Gitana - Go Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/go.html)
[Gitana - Java Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/java.html)
[Gitana - JavaScript Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/javascript2.html)
[Gitana - Node.js Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/nodejs.html)
[Gitana - PHP Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/php.html)
[Gitana - Python Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/python.html)
[Gitana - REST API Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/rest.html)
[Gitana - Ruby Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/ruby.html)
[Gitana - Scripting Cookbook](https://gitana.io/documentation/gitana/4.0/developers/cookbooks/scripting.html)

## UI Frameworks

We provide some examples of writing code in modern UI frameworks (such as Next.js) that connect to the Gitana
API and surface content.

[Gitana - AngularJS Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/angularjs.html)
[Gitana - cURL Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/curl.html)
[Gitana - Gatsby Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/gatsbyjs.html)
[Gitana - Next.js Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/nextjs.html)
[Gitana - Nuxt.js Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/nuxtjs.html)
[Gitana - Postman Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/postman.html)
[Gitana - React Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/react.html)
[Gitana - SvelteKit Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/sveltekit.html)
[Gitana - Vue.js Guide](https://gitana.io/documentation/gitana/4.0/developers/frameworks/vuejs.html)

## License

Everything in this SDK is licensed under the Apache 2.0 license.  You are free to be inspired or utilize
anything from this repository within your own projects.  Everything here is provided as is and is not
supported by Gitana or any external parties.

For more information, please review the provided [Apache 2.0 License](./LICENSE)

## Questions

If you have any questions, please reach out to Gitana's support org at support@gitana.io.

Enjoy!