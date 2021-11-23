---
id: ways_of_working
title: Cloud Engineering Team Ways of Working
---

## Team principles



* **We put security first. **Security is everybody’s job, not owned by a single team
* **DevOps is a culture, not a team.** You can still be a DevOps engineer while building your product
* **We want to upskill people for the future.** We learn from each other, and everyone has a role to play
* **We will innovate and prove success with data. **We are empowered and protected; we can fail fast, but we are accountable for what we do
* **We use open-source, community-driven solutions.** They are documented and simple to understand so they can be easily reused and iterated by anyone


## Team values



* We follow best practices. We automate, and deploy as frequently as possible
* We’re not afraid to ask for help. We know we don’t know it all
* We learn. This team is a learning experience and we share our knowledge
* We celebrate our achievements. We listen and give feedback
* We trust each other. We know what our roles are, and value everyone’s contribution


## Preferred tooling



* We use open-source tools where possible to avoid vendor lock-in
* We use Terraform by Hashicorp for Infrastructure as Code
* We use native AWS tools where that is appropriate


## Coding standards



* Terraform: link to be provided
* Python: see this [guide](https://google.github.io/styleguide/pyguide.html)


## Branching strategy



* We create a new development branch for new pieces of work, and ensure it is reviewed by a peer before it’s merged into Master
* Where possible, branch names will start with the JIRA ticket number for the piece of work, e.g. CE-1234
* We apply branch protection and code owners


## PR process



* See this [GitHub template](https://github.com/LBHackney-IT/infrastructure/blob/master/.github/pull_request_template.md) for how we do the majority of PRs


## Definition of Done



* We use a Definition of Done appropriate for the task, but which includes documentation (link to be inserted when available)


## Change and release



* We make sure that our changes to the platform are properly documented, reviewed, and planned
* We do our best to minimise disruption to end users. See the [full process](https://playbook.hackney.gov.uk/Infrastructure-Playbook/change_process) for details 