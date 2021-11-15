---
id: creating_accounts
title: Creating a new AWS account
---
## How to request a new AWS account

**This represents the current process to request a new account in AWS. It will change once HaloITSM is in use, see below.**

AWS accounts can only be created by the Cloud Engineering team. Request a new account in the [#ask-devops](https://hackit-lbh.slack.com/archives/C01FX9ERRSL) channel in Slack, with the following details:
- Name of account
- Environment
- Name of team/project and people who should have access


An account will be created for you along with a Google Group to control access to the account.

Once HaloITSM is in use, you must use that to raise your request. 

### Do I need a new account?
You may not need a new account. We try to group similar applications together, such as all housing applications in the Housing account. However, you may want to take into account the following:
Will a third party need access?
Will the application host a large amount of personal and/or sensitive data?

There may be an existing account that is suitable for your application. If in doubt, please check with the team first in [#ask-devops](https://hackit-lbh.slack.com/archives/C01FX9ERRSL)

## Creating a new account (CE team members)

### Create an Account in Service Catalog
- Go to the HackIT account
- Sign in as Administrator or Service Catalog End User
- Go to Service Catalog
- Set Location to Ireland
- Go to Products, select the radio button for Control Tower - Account Factory
- Click Launch Product

Add Provisioned Product Name as per standards
- e.g. Xpress-Staging (delimiter is hyphen)

Account email as per formula:
- rootemail+[account name, including environment, as above]@hackney.gov.uk
- e.g. rootemail+xpress-staging@hackney.gov.uk

Account Name as above: Provisioned Product Name.

Managed Organizational Unit: Select from dropdown, e.g. Staging, Production, etc. 
- SSOUserEmailAddress: saml-aws-devops@hackney.gov.uk
- SSOUserFirstName: Cloud
- SSOUserLastName: Engineering

### Create a password for the root user and set up MFA
Each new account needs to have credentials set up for the root user for that account. 
On initial account creation there will be no password, so you need to create a password.  

- Open an incognito browser and go to the AWS Console
- Add the root user email address [see account email above], do the captcha, then select “Forgot password?”

An email will be sent to the mailbox for the hackney.gov.uk root email address, which, as of November 2021, is accessible to Matt Keyworth, Frank Barnett, Rashmi Shetty, Mirela Georgieva and Selwyn Preston. Please ask one of these users to click the link and create a password for the account. 

- The username and password should be stored in the HackIT_AWS_Root_Credentials vault in 1Password. (The same individuals have access to this vault.)

### Set up MFA for the Account
- Once the password is set up, MFA needs to be configured for the user
- Follow these instructions AND, in addition, when you click on “Show QR code” make sure you screenshot or snip the QR code
- Send the image of the QR code to one of the people listed above for storage in a restricted-access Drive

### Assign Users to the New Account
- Sign into HackIT again as SSO-Admin and select AWS Single Sign On
- Find the newly-created account; assign users as necessary

### Create a Secret in GitHub (if necessary)
- Open the Infrastructure repo in GitHub
- Go to Settings
- Choose Secrets in the left-hand panel
- Choose New Repository Secret
- Add the name as per the naming conventions: all caps, underscore as delimiter, prefixed by AWS_ACCOUNT e.g. AWS_ACCOUNT_ACADEMY_PRODUCTION
- Add the account number as the value and choose Add Secret
