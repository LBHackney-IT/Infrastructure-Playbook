---
id: sso_sync
title: SSO sync job
---
There is a regular sync job between AWS SSO and the Google Directory running in the root account. When a user is added to the Google Group for AWS, please allow up to four hours for the sync to pull the details in. 

The source code for the sync ins in [this repository](https://github.com/LBHackney-IT/ssosync). It was forked from [AWSLabs](https://github.com/awslabs/ssosync).

We plan to iterate the sync in 2022 to make it faster. 
