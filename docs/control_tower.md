---
id: control_tower
title: Control Tower
---
## Introduction

Hackney’s environment is set up using [AWS Control tower](https://aws.amazon.com/controltower/).  This gives us the ability to centrally manage a multi-account environment. It also allows us to use SSO to provide a single user account whereby an individual can access resources across the Control Tower environment. 

## Initial set up

Control tower was set up with the default initial account configuration. It was configured in eu-west-1 because at that time Control tower was not available in eu-west-2.

### Core accounts

- Root account - called "HackIT"
- Log Archive
- Audit

It also set up an organisation in the root account and a Core OU which the Log Archive and Audit were deployed to.

## User Authentication

[AWS SSO](https://aws.amazon.com/single-sign-on/) is configured and integrated with the LBH Google User Directory. It is also configured in the eu-west-1 region.

A sync between AWS SSO and the Google directory runs in the root account. [SSO Sync](/sso_sync)

## User Authorisation

Initial access to the [AWS dashboard](https://hackney.awsapps.com/start#/) is granted via membership of a single Google group called "saml-aws-dashboard-access".

Further access to accounts is controlled via occasional individual permissions and Google groups which is outlined in the [Permissions management](/permissions_management) page.

## Organization

We use Organizational Units (OUs) to control which environment within the [hub](/hub) the accounts are added to.

### OUs

- Root
    - Production
    - Staging
    - Development
    - Core
    - Unmanaged

## Guardrails

Multiple [Guardrails](https://docs.aws.amazon.com/controltower/latest/userguide/guardrails.html) are configured against every account based on the OU that account resides in. They allow you to enforce policies or detect violations throughout the Control tower environment.

## AWS Account bootstrap

Initial Account set up information can be found in [account provisioning](/account_provisioning).

## Creating a new AWS account

Under certain circumstances new accounts can be [created for you](/creating_accounts).