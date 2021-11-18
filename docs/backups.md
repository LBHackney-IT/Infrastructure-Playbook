---
id: backups
title: Backup module
---

### Our backup service

We use [AWS Backup](https://aws.amazon.com/backup/), which is managed via a Terraform module in the infrastructure repo. 


### What is backed up?

The AWS Backup service creates backups of the following AWS resources:



* Amazon Elastic Compute Cloud (Amazon EC2) instances
* Amazon Elastic Block Store (Amazon EBS) volumes 
* Amazon Relational Database Service (RDS) databases 
* Amazon DynamoDB tables
* Amazon Elastic File System (EFS)

One copy will be held locally in the same account. A second backup will be created in a special account but only where the resource has been created with a Customer-Managed Key. The Vault can only be accessed by the Cloud Engineering team. 


### The default backup policy

The service applies the default policy:



* RPO 24 hours
* RTO 4 hours
* 30-day immutable retention

It is possible to vary the RPO and RTO values but this must be signed off by the Information Asset Owner and documented. See the [Backup Policy](https://docs.google.com/document/d/10rfxfpw48lgwcJkGqsk2G1oWl-k0SnRmFxhocoLIejc/edit) for full details. 


### How to apply the policy

The Terraform tags required are in the Tagging Module. If you have run your Terraform build since early July 2021, they will already be there. The tags required are:


```
        key = "BackupPolicy"
        value = "env"
```


Where “env” is one of “Dev”, “Stg”, or “Prod” depending on the environment you wish to back up. This will apply the default policy. 

If your Terraform does not have these tags, please run the latest build from the Infrastructure repo, or (as an absolute last resort) add them manually. 


### How to retrieve a backup

The backup Vault can only be accessed by the Cloud Engineering team. If you need a backup, post in #ask-devops in Slack for the quickest response.