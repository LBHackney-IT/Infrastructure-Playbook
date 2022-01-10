---
id: certificates
title: Certificate module
---
We use AWS Certificate Manager for all certificates. Where a certificate is issued by AWS, it is renewed automatically, and for this reason we should reduce usage of the wildcard. There is a [Certificates Module](https://github.com/LBHackney-IT/infrastructure/tree/master/modules/aws-acm-lbh) in Terraform for this.
