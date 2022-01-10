---
id: permissions_management
title: AWS Permissions
---

### General Ideas
* **Principle of least privilege applies to all users/groups.** In other words, we only grant permissions access at a level necessary for users to undertake their work.
* **Groups – and as often possible _not_ individuals** – with common access needs should be assigned access to accounts with appropriate permissions. See below for exceptions.
* **No adding teams by default.** We do not assign an entire Hackney team the same access permissions as one another. Instead, those _within_ a team that need access to AWS will get it. Seniority does not mean superior access. 
* **#aws-sso** This Slack channel is the appropriate place for other teams to request access. We ask that requesters provide the following information:
   * the name of the team/project
   * the account(s) they need to access
   * a similar user
   * _their_ full name and Hackney email

### Google / SAML groups
We federate user access from our Google directory. This means users will automatically be able to access an application by logging in with their Hackney Google Account (SSO). Our aim is to organise most access to AWS accounts and AppStream applications via groups of users with similar access needs. This is done via groups created in our Google directory that begin with the prefix `saml-`.

### Types of Users Needing Access
The types of users currently accessing Hackney’s AWS environment can be roughly divided into three categories:
* Those building (in) the platform*;
* Those working with resources that have been built (by others) in the platform;
* Those needing access to a certain service in the platform – e.g. AppStream – in order to do their work.

* _NB Even for those building (in) the platform, the majority of resources should be created using Infrastructure as Code and CI/CD pipelines, which use automated deployment roles rather than individuals’ access permissions. As a result, although it can be argued that those building (in) the platform do require elevated permissions from time to time, their access permission level should still be moderate or limited._

### Creating groups
Currently, we must request that a member of the Service Support team create a group. Soon there is likely to be a new process for requesting groups that is more auditable, provided by Halo. Please request that any new groups’ names follow our guidelines below. 

### Naming conventions for Google (SAML) groups
#### Group Email Identifier 
<table>
  <tr>
   <td><code>&lt;authentication mechanism></code>
   </td>
   <td><code>-</code>
   </td>
   <td><code>&lt;cloud platform></code>
   </td>
   <td><code>-</code>
   </td>
   <td><code>&lt;appstream> </code>
   </td>
   <td><code>-</code>
   </td>
   <td><code>&lt;application/project/service/team name></code>
   </td>
   <td><code>-</code>
   </td>
   <td><code>&lt;special features></code>
   </td>
   <td><code>@hackney.gov.uk</code>
   </td>
  </tr>
  <tr>
   <td><code>e.g. saml</code>
   </td>
   <td>
   </td>
   <td><code>e.g. aws</code>
   </td>
   <td>
   </td>
   <td><code>Where necessary</code>
   </td>
   <td>
   </td>
   <td><code>e.g. hrapplication1 , financeapplication1</code>
   </td>
   <td>
   </td>
   <td><code>Where necessary see below</code>
   </td>
   <td>
   </td>
  </tr>
</table>
 **Note: all group names must be hyphenated and not capitalised. **

### Special Features
Designation for groups with special access privileges or other features worthy of note. General access groups carry no designation.

These suffixes are compoundable with hyphens, e.g., `admin-staging.`

<table>
  <tr>
   <td><strong>Value</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>admin</code>
   </td>
   <td>The group carries out administrative tasks requiring a higher privilege level and access to other associated software not normally available 
   </td>
  </tr>
  <tr>
   <td><code>readonly</code>
   </td>
   <td>The group does not have ordinary access to the application, and cannot change or manipulate data
   </td>
  </tr>
  <tr>
   <td><code>staging</code>
   </td>
   <td>A group configured only for use in a staging environment, to test the application and configurations. 
   </td>
  </tr>
  <tr>
   <td><code>developer</code>
   </td>
   <td>A group specifically tailored to Hackney developers and their work. 
   </td>
  </tr>
</table>

### Group Description
This should always be completed by an Owner/Manager of the google group upon creation. The description should clearly describe:
* what service users will gain access to by being added to the group;
* any special arrangements in place for adding users to the group;
* identify services the application is hosted on and links to relevant documentation.

For example:
> Add general users for financeapplication1 to this group. The application is delivered via AWS AppStream and further documentation can be found here: link.

### Group Permissions
As these groups are used to control access to applications, it’s important that the groups are properly configured to prevent users being added/removed without authorisation. 

<table>
  <tr>
   <td><strong>Option</strong>
   </td>
   <td><strong>Value</strong>
   </td>
  </tr>
  <tr>
   <td>Access Type
   </td>
   <td><code>Restricted</code>
   </td>
  </tr>
  <tr>
   <td>Contact Owners
   </td>
   <td><code>Group Members</code>
   </td>
  </tr>
  <tr>
   <td>View Members
   </td>
   <td><code>Group Managers</code>
   </td>
  </tr>
  <tr>
   <td>View Conversations
   </td>
   <td><code>Group Members</code>
   </td>
  </tr>
  <tr>
   <td>Publish Posts 
   </td>
   <td><code>Group Managers</code>
   </td>
  </tr>
  <tr>
   <td>Add, invite, approve new members
   </td>
   <td><code>Group Managers</code>
   </td>
  </tr>
  <tr>
   <td>Who can join this group
   </td>
   <td><code>Only invited users</code>
   </td>
  </tr>
  <tr>
   <td>Allow members outside your organisation
   </td>
   <td><code>False</code>
   </td>
  </tr>
</table>

### Group Membership
The default Group Owner should be set to a `G Suite (Service Account)` unless there’s a technical reason to use an alternative service account. The Group Owner must not be set to a specific user.

Our aim is to ensure that the management of these groups will quickly pass over to the team leads – preferably Hackney staff – who operationally manage access to the account/application in question. The Group Managers will add new Group Members as needed. 

Once a group has been created, Managers can add Members to the group as described in [this Google documentation](https://support.google.com/groups/answer/2465464?hl=en), section **Add people to your group directly**. 

### Individual Access to an account
Although it is preferable that groups are given access rather than individuals, there are some cases in which giving an individual access may be more secure than giving a group access. Good reasons for granting an individual access to an account:
* If that individual’s access is temporary;
* If, by granting a group access instead of an individual, you would be granting access to other individuals who should **not** have access to that account.

### Syncing a New Group with AWS
Follow the guide for adding a new group to [Parameter Store](https://docs.google.com/document/d/1feFvMXTk26Brw0495DqBjOM0y5ZsVYAgaAVsmRtD600/edit#heading=h.9qr01v8jkz11). 

### Adding members / groups via SCIM
Although it is preferable to simply add users to their respective groups and wait for the SSO Sync to run, it is possible to quickly add groups or add users to existing groups via Postman and SCIM. _Please ask those existing members of the team who have this set up to help._

### Permission Sets
We are currently using a variety of custom and AWS permission sets in order to grant access to different Google groups across Hackney’s AWS environment. The way in which we use these permission sets is likely to change soon. Permission sets consist of both custom/inline and managed policies. [Read more on permission sets here](https://docs.aws.amazon.com/singlesignon/latest/userguide/permissionsetsconcept.html). 

### Custom Permission Sets
We use a range of custom permission sets based around the different types of users listed above.

### AWS Permission Sets
Permission | Usage model | Notes
--- | --- | ---
[AWSReadOnlyAccess](https://eu-west-1.console.aws.amazon.com/singlesignon/home?region=eu-west-1#/accounts/permissionSets/details/ps-568cee9a894e9dcc) | This policy grants permissions to view resources and basic metadata across all AWS services | This permission set can be applied widely with minimal risk.
[AWSPowerUserAccess](https://eu-west-1.console.aws.amazon.com/singlesignon/home?region=eu-west-1#/accounts/permissionSets/details/ps-4fe1d70d7281362b) | Provides full access to AWS services and resources, but does not allow management of Users and groups | This permission set is far too powerful for most users. It should be granted sparingly and preferably in lower environments.
[AWSAdministratorAccess](https://eu-west-1.console.aws.amazon.com/singlesignon/home?region=eu-west-1#/accounts/permissionSets/details/ps-f081f31984ce35a5) | Provides full access to AWS services and resources | This permission set should be granted extremely sparingly in Production environments; preferably those who need it should only be temporarily elevated to this permission set before being demoted to a more safe access level.


