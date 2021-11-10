---
id: control_tower
title: Control Tower setup at LBH
---
## Introduction

Hackney’s environment is set up using [AWS Control tower](https://aws.amazon.com/controltower/).  This gave us the ability to centrally manage a multi-account environment. It also allowed us to use SSO to provide a single user account whereby an individual can access resources across the Control Tower environment. 

## Initial set up

Control tower was set up with the default initial account configuration. It was configured in eu-west-1 because at the point it was initially set up Control tower was not available in eu-west-2.

- Root account - called "HackIT"
- Log Archive
- Audit

It also sets up an organisation in the root account and a Core OU which the Log Archive and Audit were deployed to.

## User Authentication

[AWS SSO](https://aws.amazon.com/single-sign-on/) was configured and integrated with the LBH Google User Directory.

It is configured in the eu-west-1 region along with Control tower.

A sync was set up between AWS SSO and the Google directory which runs in the root account. [SSO Sync](/sso_sync)

## User Authorisation

Initial access to the [AWS dashboard](https://hackney.awsapps.com/start#/) is granted via a single Google group called "saml-aws-dashboard-access".

Further access to accounts is controlled via occasional individual permissions and Google groups which is outlined in the [Permissions management](/permissions_management) page.

## Organisation

We use Organisations Units to control which environment within the [hub](/hub) the accounts are added to.

### OUs

- Root
    - Production
    - Staging
    - Development
    - Core

## Guardrails

List the guardrails configured for the OUs?

This may be a moveable thing so perhaps it's not feasibly to do that here?

## Account bootstrap

Initial Account set up information can be found in [Account provisioning](/account_provisioning).