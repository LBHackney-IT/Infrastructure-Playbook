---
id: naming_conventions
title: Naming Conventions
---
*This is a work in progress, with some sections to be completed. Please check back for updates, or [contact us](docs/contact_us.md) with suggestions.*

## General principles
- Elements are sequenced as application-environment-resource, such as `xpress-staging-vpc`
- Hyphen is the delimiter
- In the rare event that a hyphen is not allowed, use `PascalCase`
- Do not use version names; add as a tag if absolutely required 

## AWS resources
### Accounts
- Application-Environment, e.g. Academy-Production
- Initial letters are CAPITALS

### EC2 instances
When creating an EC2, you must give it a human-readable name via a tag. The name tag is auto-generated when the EC2 instance is created via Terraform (using the EC2 module in the infrastructure repo). This should be, as a minimum, application-environment; for example:
- xpress-app-staging
- academy-db-production
- managearrears-temp-db-staging

Note: Because names are generated automatically when the instance is created, all characters are converted to lower case by default in the module. 

## Work in progress
*The following conventions are to be agreed:*
- AWS networking
- GitHub repos and CI
- File types for Python, Javascript, .NET and Go
- Terraform modules and resources

For now, please try to follow the general examples of other names in the repo, or post in #ask-devops on Slack.
