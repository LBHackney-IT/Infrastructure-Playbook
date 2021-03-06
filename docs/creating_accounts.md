---
id: creating_accounts
title: Creating a new AWS account
---
## How to request a new AWS account

AWS accounts can only be created by the Cloud Engineering team. Request a new account by emailing cloudsupport[at]hackney[dot]gov[dot]uk, with the following details:
- Name of account
- Environment (Production, Staging or Development)
- Name of team/project and people who should have access

An account will be created for you along with a Google Group to control access to the account.

### Do I need a new account?
You may not need a new account. We try to group similar applications together, such as all housing applications in the Housing account. However, you may want to take into account the following:
Is the purpose (development, testing or live) different to existing accounts?
Will a third party need access?
Will the application host a large amount of personal and/or sensitive data?

There may be an existing account that is suitable for your application. If in doubt, please check with the team first in [#ask-devops](https://hackit-lbh.slack.com/archives/C01FX9ERRSL)

## Creating a new account (CE team members)

### Create a new account

Full instructions on how to create a new account are in the [team drive](https://docs.google.com/document/d/1JEaLgCDx5-j9Vo0whBwBYzUd5ZSjV5Q5WauyKLTAB48/edit#) (restricted access). 

New accounts are created using the AWS Service Catalog, but you have to make sure that the location is set to Ireland as our Control Tower is in that instance. 

Make sure that you give the account a human-readable name, using the hyphen as the delimiter (e.g. Housing-Staging, Social-Care-Production).

Every account needs a root user email address and MFA set up. It is important that the QR code for MFA is screen-shot and saved. Speak to Frank, Matt, Mirela, Rashmi, or Selwyn about this. 

### Assign Users to the New Account
- Sign into HackIT again as SSO-Admin and select AWS Single Sign On
- Find the newly-created account; assign users as necessary

#### AWS Role Mapping
TODO: How will AWS roles be mapped to SSO users? Currently done via ad-hoc mapping, but should each account have pre-defined SSO groups?

### Create a Secret in GitHub (if necessary)
- Open the Infrastructure repo in GitHub
- Go to Settings
- Choose Secrets in the left-hand panel
- Choose New Repository Secret
- Add the name as per the naming conventions: all caps, underscore as delimiter, prefixed by AWS_ACCOUNT e.g. AWS_ACCOUNT_ACADEMY_PRODUCTION
- Add the account number as the value and choose Add Secret

### AWS Infrastructure
Currently, teams are fully responsible for their own infrastructure deployments within the accounts. In the future, the expectation is to evolve this so that the core of the AWS platform (Networking, Backups, IAM etc) are enabled and provisioned by Cloud Engineering when an account is boostrapped.

At the moment, this is limited to deploying Backups and provioning the IAM roles required to run GitHub actions. New accounts will require updating https://github.com/LBHackney-IT/infrastructure/tree/master/platform/account-configuration to add the account to the Terraform.
