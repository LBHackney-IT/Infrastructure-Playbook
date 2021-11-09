---
id: creating_accounts
title: Creating a new account
---
## How to request a new account
### This represents the current process to request a new account in AWS. It will change once HaloITSM is in use, see below.

AWS accounts can only be created by the Cloud Engineering team. Request a new account in the  #ask-devops channel in Slack, with the following details:
- Name
- Environment
- People who should have access

An account will be created for you, with all the correct attachments, etc. 

Once HaloITSM is in use, you must use that to raise your request. 

### Do I need a new account?
You may not need a new account. We try to group similar applications together, such as all housing applications in the Housing account. However, you may want to take into account the following:
- Will a third party need access?
- Will the application host a large amount of personal and/or sensitive data?

There may be an existing account that is suitable for your application. If in doubt, please check with the team first in [#ask-devops](https://hackit-lbh.slack.com/archives/C01FX9ERRSL)

## Creating a new account (CE team members)
New accounts are bootstrapped via Terraform. See the Accounts module in the [Infrastructure repo](https://github.com/LBHackney-IT/infrastructure). Make sure that you follow the [naming convention](https://docs.google.com/document/d/1J8jD18WBWA-GQBQr_BzQuCTqEQzLJcXteH3CpXtprdo/edit). 
