---
id: account_provisioning
title: Account provisioning
---
## Introduction
AWS accounts are provisioned by the Cloud Engineering team; please request an account via the DM or in #ask-devops on Slack. We are trying to actively reduce the nmumber of accounts we have, so please do not assume that your application will get its own account. 

### Principles
1. We have three Organisational Units, mapped to the Software Development Lifecycle:
   - Development (-dev)
   - Staging (-stg)
   - Production (-prod)

2. All applications will need both `Staging` and `Production`; apps built in-house will additionally have `Development`. 
3. It is **not** permitted to connect different environments directly (e.g. a `Staging` account and `Production` account). This will be treated as a security breach. Please consult the team if you need to transfer data between accounts in different environments. 

See our [Accounts strategy](https://docs.google.com/document/d/1xoO7C2BmTR4rf7H3EMKtXVYf50oZ22XDyrmx71Tlj_Y/edit?usp=sharing) for more information. 
