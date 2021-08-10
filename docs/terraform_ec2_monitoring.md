---
id: terraform_ec2_monitoring
title: Monitoring a Windows ec2 instance using the Hackney module
---

## Overview
This module deploys monitoring and alerting of Windows EC2 instances.

It will:
- Save the Cloudwatch Agent configuration into the parameter store
- Create Cloudwatch rules for installing and configuring the Cloudwatch agent on instances
- Create an SNS queue and add a subscription for the provided email address(es)
- Create Cloudwatch alarms for either the default or provided metrics

## Usage
Declare the module and provide the required inputs and optional inputs as needed:
``` terraform
module "monitoring" {
  source = "../../../modules/ec2-monitoring/module"
  tags          = module.tags.values
  ec2_instance_ids = local.ec2_instances
  alert_emails = local.alert_emails
}
```

`ec2_instance_ids` is a list of strings that holds the instance_ids of the instances you want to monitor.

`alert_emails` is a list of strings that holds the email addresses you want to receive alerts. (Any new subscription will need to be confirmed by clicking on the "Confirm Subscription" link in the email that is sent post deployment).

## Default monitors and alerts
By default, the module will alarm for:
- Instance status (when the instance is offline)
- CPU > 80% for 5 minutes
- Free space on C: drive less than 20% for one hour
- Memory above 80% for 5 minutes

## Custom monitoring
Custom monitoring can be implemented by providing the following optional variables:

`ssm_cloudwatch_config_windows_value` is a JSON file which tells the Cloudwatch agent what metrics from the operating system to output to Cloudwatch. Examples can be found https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Agent-Configuration-File-Details.html#CloudWatch-Agent-Configuration-File-Complete-Example 

The default Cloudwatch Agent config for this project can be found [here](module/default-config/AmazonCloudwatch-windows.json).
New Metrics can be either added to the default config if they are likely to be needed across all instances at Hackney, or the file can be copied, amended and provided as an optional value in the `ssm_cloudwatch_config_windows_value` variable.

`alarm_configs` is a YAML file which holds the desired configuration of the alarms that are required.
The default alarm config for this project can be found [here](module/default-config/windows-alarms.yml).
New alarms can be either added to the default config if they are likely to be needed across all instances at Hackney, or the file can be copied, amended and provided as an optional value in the `alarm_configs` variable.

The current default is below:

YAML:
``` yaml
---
cpu:
  alarm_name: "CPU above 80% for 5 mins"
  comparison_operator: GreaterThanOrEqualToThreshold
  metric_name: CPUUtilization
  evaluation_periods: 2
  namespace: AWS/EC2
  period: 360
  statistic: Average
  threshold: 80
  alarm_description: "Reports where CPU is above 80% for 5 minutes"
  treat_missing_data: breaching
  dimensions: []

ec2_status:
  alarm_name: "Instance status failure"
  comparison_operator: GreaterThanOrEqualToThreshold
  metric_name: StatusCheckFailed_Instance
  evaluation_periods: 1
  namespace: AWS/EC2
  period: 60
  statistic: Sum
  threshold: 1
  alarm_description: "Reports whether the instance has passed both the instance status check and the system status check in the last minute."
  treat_missing_data: breaching
  dimensions: []
    
free-space:
  alarm_name: "Free disk space less than 20%"
  comparison_operator: LessThanThreshold
  metric_name: Free_Space
  evaluation_periods: 1  
  namespace: CWAgent
  period: 3600
  statistic: Average
  threshold: 20
  alarm_description: "Reports where free disk space is less than 20%."
  treat_missing_data: breaching
  dimensions:
    objectname: LogicalDisk
    instance: "C:"

memory:
  alarm_name: "Memory usage above 80%"
  comparison_operator: GreaterThanThreshold
  metric_name: RAM_USED
  evaluation_periods: 1  
  namespace: CWAgent
  period: 300
  statistic: Average
  threshold: 80
  alarm_description: "Reports where memory usage is above 80% for 5 mins."
  treat_missing_data: breaching
  dimensions:
    objectname: Memory  
```

### Required Module Variables
See `01-inputs-required.tf`

### Optional Module Variables
See `02-inputs-optional.tf`

### Module Output Variables
See `99-outputs.tf`
