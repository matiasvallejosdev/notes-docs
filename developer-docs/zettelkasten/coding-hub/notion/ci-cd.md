# CI / CD

**Links**
- [Medium Article](https://medium.com/devops-dudes/what-is-ci-cd-continuous-integration-continuous-delivery-in-2020-988765f5d116) 
- [Github Resources](https://resources.github.com/ci-cd/)
- [Git and Github](git.md)

CI / CD is the abbreviation for the combination of continuous integration (CI) and continuous delivery (CD) practices. CI / CD practices are currently the widely accepted choice to reduce the software development and the delivery cycle time.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTinCCOoVm6bzv_KoI0UkPQ23gK4l6plylqJQ&usqp=CAU">

## What is DevOps?
DevOps is basically a software development strategy which bridges the gap between the dev side and the ops side of the company. In simple terms, you can say that DevOps is, how a developer gets a new feature, an enhancement request, or a change out to production, so that,  when the customers give feedback, the developers can improve based on that feedback.

## What is CI / CD?

### Continuous Integration

**Continuous integration ( CI) helps to ensure that software components are working together. Integration should be completed frequently; on an hourly or daily basis, if possible.**

In CI practice, developers build, run, and test code on their own workstations before they commit code to the version control repository (GitHub, GitLab etc). After changes are made to the repository, a chain of events is set in motion. A typical first step in this chain is the creation of the latest version of the source code. If the build is successful, the unit tests will be carried out. If unit testing is successful, the build is deployed in test environments where system testing is performed (usually by automated testing). The team is notified of the status of this process and is provided with a report to provide details, such as build number, defects, and number of tests. Continuous integration ( CI) helps ensure that the software is fully integrated.

**Typically, the CI pipeline involves the following tasks:**

- Detect changes to the source code repository (new commits appear)
- Analysis of the quality of source code
- Project build
- Perform all unit tests
- Run all integration tests
- Generate deployable artifacts
- Status of report

### Continuous delivery

<img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/07/Cde.png" style="height: 200px;">


**Continuous delivery (CD) picks up where continuous integration is over. While CI is the process to build and test automatically, CD deploys all code changes to the testing or staging environment in the build.**

CD enables builds to be released to the production environment when needed. Allowing the team to deploy on its own, the CD effectively reduces time on the market.

Before deploying software for production, the CD process includes automated system testing, unit testing, and integration testing. The steps from CI to CD are usually completed automatically, including automated unit testing, integration , and system level. As testing can fail at any level and environment, CI / CD must include a feedback channel to quickly report failures to developers.

## Continuous deployment
<img src="https://d1jnx9ba8s6j9r.cloudfront.net/blog/wp-content/uploads/2018/07/Cdep-1.png" style="height: 200px;">

**Continuous deployment is a strategy for software releases wherein any code commit that passes the automated testing phase is automatically released into the production environment, making changes that are visible to the software's users.**

Continuous deployment eliminates the human safeguards against unproven code in live software. It should only be implemented when the development and IT teams rigorously adhere to production-ready development practices and thorough testing, and when they apply sophisticated, real-time monitoring in production to discover any issues with new releases.

## Continuous deployment vs. continuous delivery

Continuous integration, delivery and deployment are collectively referred to as continuous software development, and they are associated with the Agile and DevOps methodologies. Continuous delivery and deployment originate from continuous integration, a method to develop, build and test new code rapidly with automation so that only code that is known to be good becomes part of a software product.

Continuous delivery occurs when developers frequently hand off new code to the quality assurance (QA) and operations teams for testing. Continuous delivery usually involves a production-like staging area, and there is often a time lag between a release and when it is reviewed, when changes are manually accepted and when the new code is released to production.

In contrast, continuous deployment does not require a staging area for code changes to be manually reviewed and verified because automated testing is integrated early in the development process and continues throughout all the phases of the release. One of the main benefits of continuous deployment is that there is no time lag between when a code change passes application- and platform-level testing and when it moves into live production.
