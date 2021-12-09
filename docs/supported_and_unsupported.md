---
id: supported_and_unsupported
title: Supported and unsupported services
---

# Supported and unsupported services


## Supported services

All AWS services are supported, except for the services listed below. This does not mean that we have experience with all services and can always help, but we will do our best to support you with any issues you encounter. If you are planning to use a service that is not currently in use by another team, please have a chat with us first so that we are aware. 

The infrastructure pipeline is based on GitHub Actions and we support those pipelines built on our model. 


## Supported OS images

We support the following OS images on EC2:


### Windows Server



* Microsoft Windows Server 2019 Base
* Microsoft Windows Server 2019 with SQL Server 2017 Standard
* Microsoft Windows Server 2019 with SQL Server 2019 Standard
* Microsoft Windows Server 2016
* Microsoft Windows Server 2016 with SQL Server 2016 Standard


### Linux



* Ubuntu 
* Debian
* RedHat

The patching module can be used for scanning and/or patching the EC2 instances for the operating systems mentioned above. Work is in progress to create Hackney-specific AMIs that can be used for deploying EC2 instances. The documentation will be updated when this work is complete. 


## Unsupported services

There are very few unsupported services. Some services are restricted to the Cloud Engineering team only. It should be noted that networking resources in particular are restricted and can only be created by the Cloud Engineering team.

As a general rule, we do not support:



* Oracle databases
* Networking components other than the Hub
* Tooling other than that found in the Infrastructure repo
* CircleCI and other pipelines not built on our GitHub Actions model

This list will be reviewed and amended periodically. 
