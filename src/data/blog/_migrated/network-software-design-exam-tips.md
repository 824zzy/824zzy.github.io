---
author: Zhengyuan Zhu
pubDatetime: 2018-12-26T00:00:00Z
title: "Tips for Examination of Network Software Design"
slug: network-software-design-exam-tips
featured: false
draft: false
tags:
  - notes
description: ""
---

## Question distribution

- 10 choice questions(20%)

- 10 true or false questions(20%)

- 6 essay questions(60%)

## Examation contains three parts: Network & Design & Programming

### Network

- IP address:

- `public address`: an IP address that can be **accessed over the Internet**. And your public IP address is the **globally unique** and **can be found**, and can only be assigned to a unique device.

- `private IP address`: The devices with private IP address will **use your router’s public IP address to communicate**. Note that to allow direct access to a local device which is assign a private IP address, a Network Address Translator(NAT) should be used.

- `how to compute total ip address in a subnet`:

- transform ip address into binary address.

- count zero from tail to first one.

- subtract 2(reserve address and broadcast address)

- Port(some default ports for common protocol):

- **http**: 80

- **https**: 443

- **ntp**: 123

- **ssh/tcp**: 22

- **mongoDB**: 27017

- DNS: 53

- FTP: 21

- Telnet: 23

-

DNS(duplicated):The Domain Name System(DNS) is the **phonebook** of the Internet.

- DNS **translate domain names to IP address** so browsers can load Internet resources.

- DNS is hierarchical with a few authoritative serves at the top level.

- Your router or ISP provides information about DNS server to contact when doing a look up.

- Low level DNS servers cache mappings, which could become stale due to DNS propagation delays.

- DNS results can also be cached by your browser or OS for a certain period of time, determined by the time to live(TTL)

![](/images/blog/ca26ff18ly1fynty6a1xwj20e50vnjt4.jpg)

- CDN(duplicated):

- Definition: **CDN(Content dilivery network/Content distributed network) is a geographically distributed network** of proxy servers and their data centers. The goal is to distribute service spatially relative to end-users to **provide high availability and high performance**.

- Improve performance in two ways:

- Users receive content at **data centers close to them**.

- Your servers do not have to serve requests that the CND fulfills.

- Main routing protocol:

- `OSPF`(Open Shortest Path First): OSPF is an **interior gateway protocal**.

- `IS-IS`(Intermediate System-to-Intermediate System): It is just like OSPF. IS-IS associates routers into areas of intra-area and inter-area.

- `BGP`(Border Gateway Protocol): It is used as the edge of your network. BGP **constructs a routing table of networks** reachable among Autonomous Systems(AS) number defined by the user.

### Design

## - software requirements analysis: not key point

- main principles and key technologies for High concurrency programming.(duplicated)

- `Security`, or correctness, is when a program executes concurrently with the expected results

- The **visibility**

- The **order**

- The **atomic**

- `Activeness`: Program must confront to **deadlocks and livelocks**

- `Performance`: **Less context switching, less kernel calls, less consistent traffic**, and so on.

- generic phases of software engineering

- `Requirements analysis`

- `Software Design`

- `Implementation`

- `Verification/Testing`

- `Deployment`

- `Maintenance`

- Agile Development(duplicated)

- `Agile Values`:

- Individuals and **interactions** over processes and tools

- Working software over **comprehensive documentation**

- **Customer collaboration** over contract negotiation

- **Responding to change** over following a plan

- `Agile Methods`:

- Frequently **deliver small incremental** units of functionality

- **Define, build, test and evaluate cycles**

- Maximize speed of **feedback loop**

### Programming

- MVC(model-view-controller) model:

- MVC is an **architectural pattern** commonly used for developing **user interfaces** and allowing for effcient **code reuse** and **paraller development**.

- Model[probe]: an object carrying data. It can also have logic to **update controller** if its data changes.

- View[frontend]: it can be any **output representation of information**, such as chart or a diagram.

- Controller[backend]: accpet input and converts it to commands for the model or view

- NoSQL database(duplicated):

- NoSQL is `Not only SQL`, it has the advantages below:

- **Not using** the **relational model** nor the SQL language. It is a collection of **data items represented in a key-value store, document-store, wide column store, or a graph database**.

- Designed to run on **large clusters**

- **No schema**

- Open Source

- NoSQL properties in detail:

- **Flexible scalability**

- **Dynamic schema** of data

- **Efficient reading**

- **Cost saving**

- NoSQL Technologies:

- **MapReduce** programming model

- **Key-value** stores

- **Document databases**

- **Column-family stores**

- **Graph databases**

- Websocket(duplicated):

- WebSocket is a **computer communications protocal**, providing **Bidirectional full-duplex communication channels** over a single TCP connection and it is defined in **RFC6445**.

- WebSocket is a different protocol from HTTP. Both protocols are located at **layer 7 in the OSI model** and depend on **TCP at layer 4**.

- The WebSocket protocol enables interaction between a web client and a web server with lower overheads, facilitating real-time data transfer from and to the server.

- working progress

- There are four main functions in Tornado

- `open()`: Invoked when a new websocket is opened.

- `on_message(message)`: Handle incoming messages on the WebSocket

- `on_close()`: Invoke when the WebSocket is closed.

- `write_message(message)`: Sends the given message to the client of this Web Socket.

- Differences between `git` and `svn`:

- Git is a **distrubuted** version control system; SVN is a non-distributed version control system.

- Git has a **centralized** server and repository; SVN has **non-centralized** server and repository.

- The content in Git is stored as **metadata**; SVN stores **files of content**.

- Git branches are **easier** to work with than SVN branches.

- Git does not have the **global revision number** feature like SVN has.

- Git has **better content protection** than SVN,

- Git was developed for **Linux kernel** by Linus Torvalds; SVN was deveploped by **CollabNet**.

## Essay Questions

### Main role of IP address, port, DNS, CDN for network software design

- An internet Protocal address(IP address) is **a numerical label** assigned to each device connected to a computer network that **uses the Internet Protocal for communication**.

- In computer networking, **a port is an endpoint of communication** and **a logical construct that identifies a specific process** or a type of network device.

- **DNS(Domain Name System)** is a **hierarchical decentralized naming system** for computers connected to the Internet or a private network,

- **CDN(Content dilivery network/Content distributed network) is a geographically distributed network** of proxy servers and their data centers. The goal is to distribute service spatially relative to end-users to **provide high availability and high performance**.

### Difference between **git** and **svn**:

- Git is a **distrubuted** version control system; SVN is a non-distributed version control system.

- Git has a **centralized** server and repository; SVN has **non-centralized** server and repository.

- The content in Git is stored as **metadata**; SVN stores **files of content**.

- Git branches are **easier** to work with than SVN branches.

- Git does not have the **global revision number** feature like SVN has.

- Git has **better content protection** than SVN,

- Git was developed for **Linux kernel** by Linus Torvalds; SVN was deveploped by **CollabNet**.

### main principles and key technologies for High concurrency programming

- `Security`, or correctness, is when a program executes concurrently with the expected results

- The **visibility**

- The **order**

- The **atomic**

- `Activeness`: Program must confront to **deadlocks and livelocks**

- `Performance`: **Less context switching, less kernel calls, less consistent traffic**, and so on.

### NoSQL and SQL database

- RDBMS(Relational database management system)

- A relational database like SQL is a collection of **data items organized by tables**. It has features below:

- `ACID` is a set of **properties of relational database transactions**.

- `Atomicity`: Each transaction is all or nothing

- `Consistency`: Any transaction will bring the database from one valid state to server.

- `Isolation`:  Executing transaction has been committed, it will remain so.

-

NoSQL

- NoSQL is `Not only SQL`, it has the advantages below:

- **Not using** the **relational model** nor the SQL language. It is a collection of **data items represented in a key-value store, document-store, wide column store, or a graph database**.

- Designed to run on **large clusters**

- **No schema**

- Open Source

- NoSQL properties in detail:

- **Flexible scalability**

- **Dynamic schema** of data

- **Efficient reading**

- **Cost saving**

- NoSQL Technologies:

- **MapReduce** programming model

- **Key-value** stores

- **Document databases**

- **Column-family stores**

- **Graph databases**

-

SQL VS NoSQL

- Relational data model VS Document data model

- Structured data VS semi-structured data

- strict schema VS dynamic/flexible schema

- relational data VS Non-relational data

### Websocket(working progress)

- WebSocket is a **computer communications protocal**, providing **Bidirectional full-duplex communication channels** over a single TCP connection and it is defined in **RFC6445**.

- WebSocket is a different protocol from HTTP. Both protocols are located at **layer 7 in the OSI model** and depend on **TCP at layer 4**.

- The WebSocket protocol enables interaction between a web client and a web server with lower overheads, facilitating real-time data transfer from and to the server.

- working progress

- There are four main functions in Tornado

- `open()`: Invoked when a new websocket is opened.

- `on_message(message)`: Handle incoming messages on the WebSocket

- `on_close()`: Invoke when the WebSocket is closed.

- `write_message(message)`: Sends the given message to the client of this Web Socket.

### Agile Development and scrum

- Agile Values:

- Individuals and interactions over processes and tools

- Working software over comprehensive documentation

- Customer collaboration over contract negotiation

- Responding to change over following a plan

-

Agile Methods:

- Frequently deliver small incremental units of functionality

- Define, build, test and evaluate cycles

- Maximize speed of feedback loop

-

Scrum is 3 roles:

- Development Team

- Product Owner

- Scrum Master

-

Scrum is 4 events:

- Sprint Planning

- Daily Stand-up Meeting

- Sprint Review

- Sprint Retrospective

-

Scrum is 4 artifacts:

- Product Backlog

- Sprint Backlog

- User Stories

- Scrum Board

### Explain how DNS work

Definition: The Domain Name System(DNS) is the **phonebook** of the Internet.

- DNS **translate domain names to IP address** so browsers can load Internet resources.

- DNS is hierarchical with a few authoritative serves at the top level.

- Your router or ISP provides information about DNS server to contact when doing a look up.

- Low level DNS servers cache mappings, which could become stale due to DNS propagation delays.

- DNS results can also be cached by your browser or OS for a certain period of time, determined by the time to live(TTL)

![](/images/blog/ca26ff18ly1fynty6a1xwj20e50vnjt4.jpg)

### Difference between docker and virtual host

- Virtual Machine definition: Virtualization is the technique of importing a Guest operating system **on top of a Host operating system**.

- Docker definition: A container image is **a lightweight, stand-alone, executable package of a piece of software** that includes everything needed to run it.

- Docker is the service to run **multiple containers on a machine** (node) which can be on a vitual machine or on a physical machine.

- A virtual machine is an **entire operating system** (which normally is not lightweight).

![Difference between docker and virtual machine](/images/blog/ca26ff18ly1fymtosr7vyj20vt0f0whj.jpg)

### Type of software test

-

Black Box testing: Black box testing is a software testing method where testers **are not required to know coding or internal structure** of the software. Black box testing method relies on testing software with various inputs and validating results against expected output.

-

White Box testing: White box testing strategy deals with the **internal logic and structure of the code**. The tests written based on the white box testing strategy incorporate coverage of the code written, branches, paths, statements and internal logic of the code etc.

-

Equivalence Partitioning:Equivalence Partitioning is also known as Equivalence Class Partitioning is a software testing technique and not a type of testing by itself. Equivalence partitioning technique is **used in black box and gray box testing types**. Equivalence partitioning **classifies test data into Equivalence classes as positive Equivalence classes and negative Equivalence classes**, such classification ensures both positive and negative conditions are tested.

### Explain how CDN work

- Definition: **CDN(Content dilivery network/Content distributed network) is a geographically distributed network** of proxy servers and their data centers. The goal is to distribute service spatially relative to end-users to **provide high availability and high performance**.

- Improve performance in two ways:

- Users receive content at data centers close to them.

- Your servers do not have to serve requests that the CND fulfills

To minimize the distance between the visitors and your website’s server, a CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). Each PoP contains a number of caching servers responsible for content delivery to visitors within its proximity.

In essence, CDN puts your content in many places at once, providing superior coverage to your users. For example, when someone in London accesses your US-hosted website, it is done through a local UK PoP. This is much quicker than having the visitor’s requests, and your responses, travel the full width of the Atlantic and back.

![CDN](/images/blog/ca26ff18ly1fymv8bwce7j20d00kqgne.jpg)

## Reference:

- [What is the difference between public and private IP address?](https://www.iplocation.net/public-vs-private-ip-address)

- [Difference Between Git and SVN](http://www.differencebetween.net/technology/software-technology/difference-between-git-and-svn/)

- [Design Patterns - MVC Pattern](https://www.tutorialspoint.com/design_pattern/mvc_pattern.htm)

- [Model-view-controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)

- [IP address](https://en.wikipedia.org/wiki/IP_address)

- [Port(computer networking)](https://en.wikipedia.org/wiki/Port_(computer_networking))

- [Domain Name System](https://en.wikipedia.org/wiki/Domain_Name_System)

- [Content delivery network/Content distributed network](https://en.wikipedia.org/wiki/Content_delivery_network)

- [Websocket wiki](https://en.wikipedia.org/wiki/WebSocket)

- [tornado.websocket — Bidirectional communication to the browser](https://www.tornadoweb.org/en/stable/websocket.html)

- [Common Network Protocols and Port Numbers](https://wenku.baidu.com/view/df90877bf121dd36a22d827d.html)

- [How does DNS work](https://www.cloudflare.com/learning/dns/what-is-dns/)

- [Routing Protocols Types (RIP, IGRP, OSPF, EGP, EIGRP, BGP, IS-IS)](http://freewimaxinfo.com/routing-protocol-types.html)

- [Configure dynamic routing protocols: OSPF, BGP, IS-IS](https://www.virtually-limitless.com/vcix-nv-study-guide/configure-dynamic-routing-protocols-ospf-bgp-is-is/)

- [Docker vs Virtual Machine](https://stackoverflow.com/questions/48396690/docker-vs-virtual-machine)

- [Types of Software Testing](https://www.geeksforgeeks.org/types-software-testing/)

- [white-box-testing](https://www.testingexcellence.com/white-box-testing/)

- [types-of-software-testing-complete-list](https://www.testingexcellence.com/types-of-software-testing-complete-list/)

- [Discussion on High Concurrency Column](https://blog.csdn.net/ITer_ZC/article/details/40748587)
