# Microservices

**Useful links**
- [Cloud-Native Microservices Evolves to AWS Serverless Event-driven Architectures](https://medium.com/aws-serverless-microservices-with-patterns-best/cloud-native-microservices-evolves-to-aws-serverless-event-driven-architectures-9a38c473f4f8)


## Guide
- [Microservices](#microservices)
  - [Guide](#guide)
  - [What is a microservice?](#what-is-a-microservice)
    - [Protocol](#protocol)
    - [Benefits](#benefits)

## What is a microservice?

Microservices is an arquitecture that is designed to work with small and autonomous services that work together in the same application. It is a set of rules for writing code that guides you in your decisions. It is a architecture style that allows you to create a web application that can be accessed by other applications.

Every microservice is small and focusing doing one thing in the application. For example, a microservice that is responsible for sending emails to users.

Microservices were born with the philosophy of PAAS (Platform as a Service). They are a an autonomous service that provides a platform for developers to build applications.

Microservices were born with the idea to solve the problems of monolitic applications and to make them more scalable.

<img src="https://miro.medium.com/max/1400/1*SZcOObmoJZbTW2QiEtpoqQ.png" style="width:400px">

### Protocol

Microservices communicate with each other using HTTP protocol. It also use JSON to send and receive data. They also use a API like (REST) to communicate with each other and with the clients.

### Benefits 

Microservices use a lot the solid principle of SRP (Single Responsibility Principle). They are independent of each other and they are easy to test.

The benefits are divded in five different ways:

- Organization

It's better and easier to manage teams of developers.

- Tech stack heterogeneity

Because each service is independent of each other, you could use different tech stacks. For example, you could use AWS, Azure and Google Cloud.

- Resilient

Failures are not in cascade. You can recover from failures. It's easier to track the path of the problems.

- Scaling

With microservices combined with cloud you could scale easy, depending on the needs of the application. It's extremly common to scale critical services on demand.

- Easy to deploy

Deploy by a services is easy. It's easy to deploy because it's small and it's easy to test.




