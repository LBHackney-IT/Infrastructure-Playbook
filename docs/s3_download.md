---
id: s3_download
title: How to download from an S3 bucket
---

*This document is intended for vendors/users outside of Hackney and/or users who have been assigned programmatic access to an S3 bucket within one of our accounts in the AWS organization.*

### Install AWS CLI 

To check if you have AWS CLI installed run the command:  `aws --version` from the command line prompt

If you do not currently have AWS CLI, follow the [instructions](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html) provided in the AWS documentation to download it to your local machine. 


### Configure Access to the S3 bucket

To set up access to the S3 bucket for the first time, run the following command in your command prompt or terminal: `aws configure`

When prompted, enter the `Access Key ID` as provided to you.

When prompted, enter the `Secret Access Key` as provided to you. 

When prompted, enter `eu-west-2` for the region.

When prompted, enter `JSON `as default output format.


### List all objects in the S3 bucket 

To list objects (files) in the S3 bucket run the following command: 


```bash
aws s3 ls s3://<name of S3 bucket> --recursive
E.g., aws s3 ls s3://example-data- --recursive
```


_NB the name of the S3 bucket in this example is example-bucket


### Download files from the S3 bucket to your local machine

Navigate in the command prompt or terminal to the local directory where you would like to save files.

Use the following command to copy files from the S3 bucket to your local machine:


```bash
aws s3 cp s3://example-data- . --recursive
```


NB the “.” above will copy to the directory you have navigated to. If you would like to copy to another location use the following command, where &lt;path> is the location you would like to copy the files to:


```bash
aws s3 cp s3://example-data-/example_2_Zip.7z <path> --recursive
```


_NB these commands and file names are case sensitive._


### Accessing S3 bucket from an EC2 instance

In order to download data from an EC2 instance, the IAM role for the EC2 instance must have access to the S3 bucket from where the data needs to be downloaded.

To copy files, do the following
```bash
aws s3 ls s3://s3-bucket-name  /destination-folder  --profile=[Profile name]
```
In the EC2 instance with the destination folder, you can use the AWS CLI command aws configure to create a profile named default in the credentials file. The credentials file location would be C:\Users\_USERNAME_\.aws\credentials. Multiple profiles can be added to the credentials file with different profile names.

When you enter aws configure at the command line, you're asked for four pieces of information:



* Access key ID
* Secret access key
* AWS Region
* Output format

The following example shows sample values:
```bash
$ aws configure

AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE

AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY

Default region name [None]: us-west-2

Default output format [None]: json
```