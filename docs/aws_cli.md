---
id: aws_cli
title: AWS CLI
---

There is nothing custom about the way we use the AWS CLI at Hackney so this document will just refer you to the official AWS documentation for the different ways to use it. There is a [lunch & learn video](https://drive.google.com/file/d/1GnXwOzbw40uyNWk0UZM17ZYrjaIfidFl/view?usp=sharing) available, which usefully points out some of the things that can go wrong.

### Getting started and installing

[Getting started and installing](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

### Configuring the CLI

[Configuring the CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html)

### Configuring the CLI to work with SSO

If you don't want to have to continually copy and paste credentials each time you want to interact with AWS then this is the way to go!

[Configuring CLI to work with SSO](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html)

### Session manager plug-in

This allows you to create sessions in session manager for securely connecting to private EC2 instances and creating tunnels for connecting with private RDS instances.

[Installing the session manager plug-in](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html)

To try this out on an instance, follow [these instructions](../API-Playbook/ec2_access).
