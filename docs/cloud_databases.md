---
id: cloud_databases
title: Cloud Database Strategy
---
*This document outlines the Database strategy for deploying databases in AWS. It is intended for Architects, Developers, Analysts and anyone keen on deploying a DB instance within HackIT AWS accounts.*

## Scope
Hackney Council already has a preferred Cloud database platform in Amazon Relational Database Service (AWS RDS). This makes it easier for technicians with the appropriate skills set to provision a database, operate, and scale when required. With Amazon RDS in mind, this strategy is limited in scope to:
1. Newly provisioned RDS Instances 
2. Databases (Microsoft SQL Server) hosted on EC2 Instances

This document does not cover on-premises databases.

## Key Components
This strategy centres on the concept of a scalable database environment, flexible enough to handle changing needs of the Authority, but with security at the heart of business operations.

The areas the strategy will cover are:

1. AWS RDS Specifics
   - Engine type
   - Engine version
   - Instance class
   - Required storage
   - Encryption at rest
   - Instance naming convention
   - Authentication - AWS Secrets or use of IAM roles
   - Database logs
   - Backup retention period
   - Protecting resources
   - Monitoring logs
   - DB parameter and options group e.g. vacuum or encoding
   - VPC and Subnets
   - Default Port setting
   - Metrics 
   - Use of Availability Zones
2. Security and network configuration
3. Documenting each database resource, e.g. tagging for cost savings
4. In-house database skills and supporting the cloud databases
5. Databases installed on an EC2 instance

## Automating deployments of an AWS RDS instance
This section outlines the bare minimum requirements for the deployment of an AWS RDS Instance using Terraform. This section does **not** cover databases hosted on an EC2 instance.

Feature | Terraform requirement | Notes
--- | --- | ---
Source module | "terraform-aws-modules/rds/aws" | Use AWS module
DBInstanceIdentifier | identifier | Key identifier. Combination of `application name-db-` plus environment tags module; e.g. `environment = var.your_environment_variable`
Engine | engine | E.g. postgres, mysql. PostgreSQL is the preferred engine type
EngineVersion | engine_version | Version of the engine. AWS has PostgreSQL v13 available in GA. Set default to 12 to make use of the replication and index management features of v12 upwards
Major Engine Version | major_engine_version | Recommend 1 version below GA (13)
DBInstanceClass | instance_class | Indicates the database engine version. Bear in mind cost implications; a good starting point is a 2vCPU 4/8GB RAM such as db.t3.medium/large
Database NAME | name | Use identifier name. Can also be stored in AWS Secrets Manager
MasterUsername | username | Stored in AWS Secrets manager
Database password | password | Stored in AWS Secrets manager
AllocatedStorage | allocated_storage | Depends on application needs. Minimum of 5GB. Can be scaled up as required.
DB Port | port | Depends on engine type. Recommend **not** to use the default, e.g. 5432/3306
multi_az | multi_az | Default should be `True` for PROD but `False` in lower environments
Maintenance Window | maintenance_window | System maintenance time' e.g. minor version upgrade if enabled
Backup Window | backup_window | Daily time range during which automated backups are created. If you don't specify a preferred backup window when you create the DB instance, Amazon RDS assigns a default 30-minute backup window. Ensure time set here is before the Maintenance Window above
DB Timezone | timezone | Set to `UTC`
Backup retention period | backup_retention_period | Set to 30 days. Depending on business needs, lower environments should be set lower or 0. **Note:** There is no additional charge for backup storage up to 100% of your total database storage for a region
Tags | tags | A must-have; use [HackIT defined modules tag](https://github.com/LBHackney-IT/infrastructure/tree/master/modules/tags)
Deletion protection | deletion_protection | Databases cannot be deleted. Set to `True`
Encrypt Storage | storage_encrypted | Set to `True`. Includes the underlying storage for DB instances, its automated backups, read replicas, and snapshots. Also, recommend using General Purpose (SSD) or Provisioned IOPS. Note: db.t2.micro is not supported.
VPC | vpc_security_group_ids | Use Core Security Group Ingress defined
SubnetGroup | subnet_ids | Use Database subnets defined
Performance Insights | performance_insights_enabled | Provides visibility into the health of the DB instances. Set to `True`
IAM Database Authentication | iam_database_authentication_enabled | Off by default. Users don't need to use a password when connecting to a DB instance. Instead, they can use an authentication token. Depends on user application/service or user needs. Useful for RDS Proxy.
Snapshot Identifier | snapshot_identifier | Optional and only to be used if creating a database from a snapshot
final_snapshot_identifier | final_snapshot_identifier | The name of your final DB snapshot when this DB instance is deleted. Use `DBInstanceIdentifier-snapshot`. Must be provided if `skip_final_snapshot = false`
Skip final snapshot | skip_final_snapshot | As above. Set to `false`
Copy tags to snapshot | copy_tags_to_snapshot | Set to `True`. On delete, copy all Instance tags to the final snapshot (if `final_snapshot_identifier` is specified). Also useful for AWS Backups.
Storage AutoScaling | max_allocated_storage | Specify a value so the storage scales

## Security
It is AWS best practice that provisioned DBs must:
- Reside in a VPC
- Ensure subnets in a DB subnet group are set to `private`
- The use of a DB security group to control what IP addresses or Amazon EC2 instances can connect to the database (inbound rules). Firewall prevents any database access except through rules specified by an associated security group.
- Data at rest - encryption to secure DB instances and snapshots at rest. All provisioned DB via RDS must/should be encrypted. Data that is encrypted at rest includes the underlying storage for DB instances, its automated backups, read replicas, and snapshots. By default, this is set to False
- Encrypting Amazon RDS resources and the use of an AWS KMS customer master key (CMK) to encrypt these resources. 
- The use of Secure Socket Layer (SSL) or Transport Layer Security (TLS) from your application to encrypt a connection to any DB instance. SSL/TLS certificates are enabled by default for new DB instances.

AWS recommends that you protect AWS account credentials and set up individual user accounts with AWS Identity and Access Management (IAM). Use managed identity-based policies or IAM groups to effectively manage permissions for multiple users or use of IAM to control what roles can do with an instance e.g. Grant permission to create a DB instance that uses a specific DB engine or explicitly deny permission to create DB instances for certain DB instance classes.

As a good practice, it is recommended that you create multiple roles with specific sets of permissions based on application and access requirements. Then assign the appropriate role to each user. The roles should be used to enforce a least privilege model for accessing database objects. The master user that is created during a PostgreSQL instance creation should be used only for database administration tasks like creating other users, roles, and databases. The master user should not be used by the application.

The use of RDS Proxy to enforce IAM authentication and offload credential management from applications is considered best practice. This ensures database credentials, authentication, and access can be managed through integration with AWS Secrets Manager and AWS Identity and Access Management (IAM).

## Tagging AWS RDS resources
It is important that during provisioning of an instance, we use the default Terraform tagging module to identify all resources per account, application, environment and department; this enables management and departments to track costs, use labels for automating resource tasks, e.g. stop DBs labelled `Dev` during out-of-office hours, or auditing during a disaster recovery exercise. Also, resources that are properly tagged will have the right information copied over when a snapshot is taken (`CopyTagsToSnapshot`), which in turn means all snapshot resources are easily identified in the event of a database restore.

## Monitoring
An RDS instance can be monitored via the portal, but users without the role of an administrator may not necessarily have PowerUserAccess to view metrics via the portal. If that is the case, `enabled_cloudwatch_logs_exports` should be enabled during provisioning. By default, this is set to `FALSE`. This ensures all logs are shipped to Amazon CloudWatch from where fancy metrics can be hooked up to a Dashboard.

For Administrators, Key metrics that are worth monitoring are:
- Storage usage
- CPU Utilization
- Memory usage
- Failed connections (Login failure)
- Slow running SQL statements

## Databases installed on an EC2 instance
- Optimize disk layout 
- Set the NTFS allocation unit size to 64 KB
- Server updates - install latest patches
- Hostname
- Public access disabled
- Create maintenance plans using Ola Hallengren scripts

## In-house database skills for supporting the cloud databases
- Backups, restore and manual dumps of a table
- Autovacuum - when it last run and how often due to CRUD operations
- Creating roles and disabling users
- `Pg_stat_activity` table
- Performance tuning
- Checking size of Indexes and tables
- Monitoring

## Backups
By default, we keep backups for 30 days. See [Backups](docs/backups.md) for more details.
