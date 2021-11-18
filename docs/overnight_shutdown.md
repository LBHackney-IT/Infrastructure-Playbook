---
id: overnight_shutdown
title: Overnight shutdown module
---

## About

To save cost on running EC2 Instances in Dev and Staging environments, there's a need to power down instances during Out of Office hours (19:00-7:00 Monday-Friday and Saturday and Sunday). This account-wide code seeks to address this.

### What it does

1) Creates an IAM policy that allows the following actions:
   - a) Stop an EC2 Instance
   - b) Start an EC2 Instance
   - c) List EC2 Instance in the AWS accounnt
2) Creates an IAM role to stop/start the Instance. Attached to this role is the policy defined in step 1 above
3) Defines a Lambda function that handles the stop/start of the Instance. This uses a Python script (boto3). The script uses AWS tags to identify the Instance. Any EC2 Instance with a tag `OOOShutdown` with `true` value will be stopped/started at the time defined within the Cloudwatch rules
4) Defines Cloudwatch rules and grants permission to trigger the execution of the Lambda function at the following times:
   - Stop EC2 at 7pm
   - Start EC2 at 7am

### How can I use it?

Ensure your instance has a tag `OOOShutdown` with a value of `true`.

## TODO

Possibly extend this to RDS Instances

The module for overnight shutdown can be found here:
https://github.com/LBHackney-IT/infrastructure/tree/master/platform/instance-scheduler