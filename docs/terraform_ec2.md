---
id: terraform_ec2
title: Creating an ec2 instance
---

## Overview
This module deploys EC2 instances in the opionated way that we use them in Hackney. It supports the deployment of a Bastion host for external access and is also pre-configured to enable connection to AppStream.

## Usage
Declare the module and provide the required inputs and optional inputs as needed:
``` terraform
module "ec2s" {
  source = "../../modules/aws-ec2-lbh/module"
  tags          = module.tags.values
  vpc_id        = "vpc-xxxx"
  subnet_ids    = ["subnet-xxxxxa", "subnet-xxxxxb", "subnet-xxxxxc"]
  ec2_instances = local.ec2_instances
}
```

The `ec2_instances` is a `map` variable that defines the required EC2 configuration. This could be read from external YAML or JSON files, using `yamldecode()` or `jsondecode()` functions:

``` terraform
locals {
  ec2_instances = yamldecode(file("path/to/ec2.yml"))
}
```

Alternatively, the variable can be defined inside a `tfvars` file or constructed dynamically. Below are some example configurations:

HCL
```terraform
ec2_instances = {
  "app" = {
    "allow_appstream" = true

    "ami" = "ami-0c6043f6e8a4652bc"

    "ebs_block_devices" = {
      "/dev/sdb" = 3000

      "/dev/sdc" = 500
    }

    "egress_rules" = ["all-all"]

    "ingress_cidr_blocks" = ["0.0.0.0/0"]

    "ingress_rules" = ["http-80-tcp", "all-icmp"]

    "instance_count" = 1

    "instance_type" = "c4.2xlarge"

    "root_block_device_volume_size" = 100

    "user_data" = "#! /bin/bash echo \"HelloWorld\"\n"
  },
  "db" = {
    "ami" = "ami-0c6043f6e8a4652bc"

    "ingress_rules" = ["http-80-tcp", "all-icmp"]

    "instance_count" = 1

    "instance_type" = "c4.2xlarge"

    "root_block_device_volume_size" = 100
  }
}
```

YAML:
``` yaml
---
app:
  # Required
  ami: ami-0c6043f6e8a4652bc
  # Required
  instance_type: c4.2xlarge
  # Required
  root_block_device_volume_size: 100
  # Required
  ingress_rules:
    - http-80-tcp
    - all-icmp
  # Optional - defaults to ["0.0.0.0/0"]
  ingress_cidr_blocks:
    - 0.0.0.0/0
  # Optional - defaults to ["all-all"]
  egress_rules:
    - all-all
  # Optional - defaults to false
  allow_appstream: true
  # Optional defaults to []
  ebs_block_devices:
    /dev/sdb: 3000
    /dev/sdc: 500
  # Optional - defaults to empty  -
  user_data: >
        #! /bin/bash
        echo "HelloWorld"


db:
  # Required
  ami: ami-0c6043f6e8a4652bc
  # Required
  instance_type: c4.2xlarge

  # Required
  root_block_device_volume_size: 100
  # Required
  ingress_rules:
    - http-80-tcp
    - all-icmp
```

JSON
```json
{
  "app": {
    "allow_appstream": true,
    "ami": "ami-0c6043f6e8a4652bc",
    "ebs_block_devices": {
      "/dev/sdb": 3000,
      "/dev/sdc": 500
    },
    "egress_rules": [
      "all-all"
    ],
    "ingress_cidr_blocks": [
      "0.0.0.0/0"
    ],
    "ingress_rules": [
      "http-80-tcp",
      "all-icmp"
    ],
    "instance_count": 1,
    "instance_type": "c4.2xlarge",
    "root_block_device_volume_size": 100,
    "user_data": "#! /bin/bash echo \"HelloWorld\"\n"
  },
  "db": {
    "ami": "ami-0c6043f6e8a4652bc",
    "ingress_rules": [
      "http-80-tcp",
      "all-icmp"
    ],
    "instance_count": 1,
    "instance_type": "c4.2xlarge",
    "root_block_device_volume_size": 100
  }
}
```

### Required Module Variables
See `01-inputs-required.tf`

### Optional Module Variables
See `02-inputs-optional.tf`

### Module Output Variables
See `99-outputs.tf`
