---
id: ways_of_working
title: Cloud Engineering Team Ways of Working
---

## Team principles
* **We put security first.** Security is everybody’s job, not owned by a single team
* **DevOps is a culture, not a team.** You can still be a DevOps engineer while building your product
* **We want to upskill people for the future.** We learn from each other, and everyone has a role to play
* **We will innovate and prove success with data.** We are empowered and protected; we can fail fast, but we are accountable for what we do
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
* [Terraform](https://www.terraform.io/language/syntax/style)
    * `snake_case`  for resource names
* [Python](https://google.github.io/styleguide/pyguide.html)


## Branching strategy
* We create a new feature branch for new pieces of work, and ensure it is reviewed by a peer before it’s merged into main
* Branch names will contain the JIRA or Halo ticket number for the piece of work, e.g. feature/CE-1234-implement-logger
* For new repositories, we tag with [semantic versioning](https://semver.org/) when ready to release into production

## Branch Protection
* main branches are protected to disallow direct commits
* [Squash and merge](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges#squash-and-merge-your-pull-request-commits) preferred in order to keep the git history clean
    * As we test in a test environment before merging to main branch and release based on tag, we rollback to a previous tag rather than a commit in the event of an unforseen issue
    * Squashing commits improves the git history rather than seeing 100 'test' or 'debug' commit messages

## PR process
### For PR Requester
* See this [GitHub template](https://github.com/LBHackney-IT/infrastructure/blob/master/.github/pull_request_template.md) for how we do the majority of PRs
### For PR Reviewer
* Check the assosciated JIRA or Halo ticket with the PR
    * Does the code reflect the requirements in the ticket?
    * Has the acceptance criteria been met (i.e. are appropriate tests shown to be passing, or has evidence been documented)?
    * Does this conform to the standards of the repository?
    * Is the code style consistent with the rest of the repository? It is better to have a consistent style in a repository even if it differs from the normal standards than to have two different stylings, as this can lead to confusion.
* Is the readme of the repository updated in the PR to reflect the change (where applicable)?
## Change and release
* We make sure that our changes to the platform are properly documented, reviewed, and planned
* We do our best to minimise disruption to end users. See the [full process](https://playbook.hackney.gov.uk/Infrastructure-Playbook/change_process) for details 
