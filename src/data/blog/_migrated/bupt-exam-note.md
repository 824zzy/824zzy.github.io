---
author: Zhengyuan Zhu
pubDatetime: 2018-02-20T00:00:00Z
title: "BUPT Reexamination Written Test Review"
slug: bupt-exam-note
featured: false
draft: false
tags:
  - notes
description: ""
---

>

These are notes I made while reviewing. Students who need them can browse briefly, but the most important thing is to practice with past exam questions.

# Subject 1: Software Engineering

## Introduction: Software Development Process: 6 Points

- What to do: Requirements analysis

- How to do it: System design

- Concrete implementation: System development

- Check if correct: Testing personnel

- Let users use it: Engineering implementation personnel

- System maintenance: System maintenance personnel

## Overview of Software Engineering

>

Definition of software: Software = Programs + Data + Documentation

### Software Classification

- System software: Operating systems, device drivers, communication processors

- Middleware software: Various middleware, application servers

- Application software: A type of software developed in specific domains to serve specific purposes

### Three Elements of Software Engineering

- **Methods**: Technical know-how

- **Tools**: Software support environment

- **Process**: Integrating software engineering methods and tools

### Eight General Principles

>

1. Abstraction 2. Information hiding 3. Modularity 4. Localization 5. Determinism 6. Consistency 7. Completeness 8. Verifiability

## Software Life Cycle Models

- Waterfall model: Sequential serial stages

- Prototyping method: Adding features to small prototype software

- Evolutionary model: Combining waterfall model and prototyping, two rounds of development

- Incremental model: Build prototype then incremental updates

- Spiral model: Introduces explicit risk management with four quadrants (planning, risk analysis, engineering implementation, customer evaluation)

- Fountain model: Zen development, no rules

- Build-and-assemble model: Modular component development

- Rapid application development model: Rapid incremental development

- Unified process model: Drawing on the strengths of various approaches

-

Agile model: **An attitude, not a methodology**

>

Extreme programming: Latest theoretical results

- Small releases with rapid iteration

- Simple design

- Pair programming

- Collective code ownership

## System Requirements Analysis and Feasibility Analysis

>

Purpose of system requirements analysis and feasibility analysis: Clarify whether the system is worth doing to avoid investment losses.

- Requirements specification document: Basis for software acceptance (**does not include feasibility study**); shared understanding of what software should do; basis for software design

### Feasibility analysis: **Economic**, **Technical**, **Legal**, **Implementation**

### Technical feasibility analysis: **Development risks**, **Resource availability**, **Technical conditions**

## Software Requirements Analysis

### Operational Principles of Requirements Analysis

- The information domain of the problem must be represented and understood, i.e., **data model** (ER diagram)

- The work the software will perform must be defined, i.e., **functional model** (data flow diagram)

- Software behavior must be represented, i.e., **behavioral model** (state transition diagram)

## Structured Requirements Analysis

>

Data modeling: Entity-Relationship diagram (ER diagram) - a conceptual model established to express user data requirements

- First normal form: Each attribute value is the smallest indivisible data unit (extremely detailed)

- Second normal form: Non-primary attributes **fully depend** on the key (non-primary attributes start to be separated)

- Third normal form: Non-primary attributes are mutually independent, eliminating functional dependencies (relationships connected through foreign keys, forming multiple relation sets)

## Software Design

>

Overall design includes: **Processing method** design; **Data structure** design; **Reliability** design

### Modularity:

- Three basic attributes of modules: **Function**, **Logic**, **State**

- Measurement criteria: Coupling between modules and cohesion within modules

- Cohesion: Measure of module functional strength. Lowest is **coincidental cohesion**, highest is **functional cohesion**

- Coupling: Relative independence between modules

- Best to use data coupling

- Never use content coupling

- Use less control coupling

## Structured Design Methods

- Fan-in: The number of upper-level modules that directly call this module. Large fan-in indicates **high reusability** of the module.

- Fan-out: The number of lower-level modules this module directly calls. Large fan-out indicates **high complexity** of the module.

>

Use case diagram - functional requirements model - use case model - domain model - identify system - system operation contract

## Object-Oriented Basic Idea: Everything is Seen as Objects

>

Object-oriented = Objects + Classes + Inheritance + Communication

- Object: Instance of a class

- Class:

- Association and link

- Inheritance/generalization

- Aggregation

### Several Classic Object-Oriented Analysis and Design Methods

- OOA/OOD (Object-Oriented Analysis, Object-Oriented Design): Clear concepts, simple and easy to learn

- Booch method: Four main diagrams (entities) and two auxiliary diagrams (states)

- Object Modeling Technique (OMT)

- Object-Oriented Software Engineering method (OOSE)

### Unified Modeling Language UML (Similar to state diagrams)

- Static diagrams:

- Use case diagram

- Class diagram

- Object diagram

- Component diagram

- Deployment diagram

- Dynamic diagrams:

- Sequence diagram

- Collaboration diagram

- State diagram

- Activity diagram

## Object-Oriented Analysis

### Overview

>

Use case diagram -> functional requirements model -> use case model -> domain model -> identify system operations -> establish system operation contracts

- Use case modeling

- Create domain types

- Draw system sequence diagrams

- Create system operation contracts

## Object-Oriented Design

### Model Hierarchy

### Object-Oriented Design Principles

- Single Responsibility Principle (SRP): For a class, there should be only one reason for it to change

- Open-Closed Principle: Software entities should be extensible but not modifiable

- Liskov Substitution Principle: Subtypes can replace parent types and appear anywhere the parent type can appear

- Dependency Inversion Principle: High-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details; details should depend on abstractions

- Interface Segregation Principle: Using multiple interfaces is better than using one interface to cover multiple business methods

- Composition/Aggregation Reuse Principle: Use some existing objects within a new object, making them part of the new object (to achieve reuse)

- Law of Demeter (Principle of Least Knowledge): An object should know as little as possible about other objects

### Design Use Case Implementation Schemes

## Software Implementation

- Programming languages and integrated development environments

- Programming methods

- Structured programming methods: Top-down, stepwise refinement

- Three basic control structures: **Sequence, selection, repetition**

- Object-oriented programming methods

- Programming style

- Program efficiency
>

Refers to program execution speed and memory storage space occupied

## Software Testing

- Software testing basics: **Discover errors, not prove software correctness**

- Software correctness: Software product achieves expected functionality

- Software testing **does not include code debugging**

### Software Testing Methods and Techniques

- Static testing

- Dynamic testing

- Black-box testing: Purely from external perspective

- Equivalence partitioning

- Boundary value analysis

- Error guessing

- Cause-effect graphing

- White-box testing: Proves internal operations and internal workflow

- Basic path testing: **Strongest**

- Statement coverage: **Weakest**

- Decision coverage

- Condition coverage

- Decision-condition coverage

- Condition combination coverage

### Software Testing Process

- Unit testing: Primarily white-box, supplemented with black-box testing

- Integration testing: Testing the system composed of all modules

- Validation testing: Verifying software validity

-

System testing: Testing in different actual operating environments

- Recovery testing

- Stress testing

- Performance testing

- Security testing

-

When to stop testing: Number of failures within a certain testing period

### Non-key topics

#### Object-Oriented Testing Methods

#### Program Static Analysis Methods

#### Software Debugging Methods

#### Software Testing Tools

#### Software Reliability

# Subject 2: Compiler Principles

## Compilation Overview

- Concepts of compilation, interpretation, and translation

- Compilation: **The process of converting a source program into an equivalent target program** (high -> low)

- Interpretation: **Interprets and executes the source program without generating a target program** (Python)

- Translation: **A program that converts a program written in one language into a program in another language form** (high -> high, low -> low)

- Compilation stages, tasks, typical structure

- Analysis phase:

- Lexical analysis: **Reading source program character by character from left to right**

- Syntax analysis: **Combining word sequences into various syntactic phrases**

- Semantic analysis: **Examining context-related properties of structurally correct source programs**

- Synthesis phase: **Obtaining a target program equivalent to the source program**

- Intermediate code generation: An abstract machine program that is easy to generate and translate (three-address code, etc.)

- Code optimization

- Target code generation: Transforming intermediate code into machine-dependent target code

- Symbol table management

- Error diagnosis and handling

- Companion tools & passes of the compiler

- Preprocessor: First pass finds all identifiers

- Assembler: Second pass translates opcodes into machine code

- Linker and loader

## Lexical Analysis

### Role of Lexical Analyzer

>

Role of lexical analyzer: Scanning the character stream of the source program to recognize word symbols

### Tokens, Patterns

>

Token: Encoding of a certain class of word symbols (identifier as id, number as num)
Pattern: Word formation rules for a certain class of word symbols

### State Transition Diagram of Lexical Analyzer

## Syntax Analysis

### Syntax Analyzer: Inputs token sequence, outputs parse tree

### Chomsky grammar:

- Type 0 grammar: Unrestricted grammar (Turing machine recognition)

- Type 1 grammar: Context-sensitive grammar (linear bounded automaton recognition)

- Type 2 grammar: Context-free grammar (pushdown automaton acceptance)

- Type 3 grammar: Regular grammar (finite state automaton)

### Derivation and Reduction

Rightmost derivation is canonical derivation, leftmost reduction is canonical reduction

### A. Top-down analysis method: Building parse tree from root to leaves

-

For deterministic analysis, the grammar must be free of left recursion and backtracking

- Eliminate left recursion: Avoid infinite loops

- Eliminate backtracking: Extract common left factors, determine if it's LL(1) grammar; improve analysis efficiency

-

LL(k) grammar:

- Leftmost derivation

- Scan source program from left to right

- Look ahead k characters each time

-

Predictive analysis method: Construction of predictive analysis table, reverse entry onto stack

### B. Bottom-up analysis method: Building parse tree from leaves to root

- Reducible strings are handles in **canonical reduction analysis**, and leftmost simple phrases in **operator precedence analysis**

-

Operator precedence analysis

- First set and Follow set

- Phrase: Symbol string composed of leaf nodes in different levels of syntax tree

- Direct (simple) phrase: Nodes in different levels of syntax tree that no longer contain other nodes with subtrees

- Handle: Leftmost direct phrase

- Sentential form: Large set of leaf nodes

-

LR(k) analysis technique:

- Context-free grammar: G(V, sigma, R, S) [non-terminals, terminals, start variable, rules/productions]

- L indicates scanning input symbol string from left to right

- R indicates reverse process of rightmost derivation

- k indicates number of input symbols

- LR(0) analysis

- Indicates recognition state of viable prefix, divided into reduction, shift, wait-for-reduction, and accept items

- If there are no shift-reduce conflicts and reduce-reduce conflicts, it's LR(0) grammar

- SLR(1) analysis

- Based on LR(0) analysis, looks ahead one input symbol to avoid blind reduction

- LR(1) analysis
Reduction only occurs when input symbol is search symbol

## Syntax-Directed Translation Techniques

>

Input symbol string -> parse tree -> dependency graph -> calculation order of semantic rules -> calculation results

- Tasks of semantic analysis: Static semantic checking, performing actual translation (generating intermediate code and target code)

- Common intermediate codes: Reverse Polish notation, triples, quadruples

### Syntax-Directed Definitions

- S-attributed definitions

- L-attributed definitions (**restriction conditions** that inherited attributes should satisfy)

### Translation Schemes

- Constructing translation schemes for S-attributed definitions (semantic actions placed at right end of production)

- Constructing translation schemes for L-attributed definitions (semantic actions inserted within production)

## Semantic Analysis

- Concept of semantic analysis

- An important task of compilation, checking semantic legality

- Establishment and management of symbol table

- Semantic checking

- Symbol table

- Operations: Retrieval, insertion, positioning, repositioning

# Subject 3: Database Principles

## Introduction

### Four Basic Concepts

- Data: Basic objects stored in database

- Database: **Long-term storage**, **organized**, **sharable** large data collection

- Database Management System: Data management software between users and operating system

- Database System: Includes database management system and database

### Data Model = Data Structure + Data Operations + Integrity Constraints

- Conceptual model

- Logical model and physical model

### Common Data Models

- Formatted model

- Hierarchical model (tree)

- Network model (graph)

- Relational model (table)

- Object-oriented model

- Object-relational model

### Database System Architecture

- Single-user DBS

- Master-slave DBS

- C/S architecture DBS

- Distributed DBS

### Three-Schema Structure of Database Systems: (1:1:n)

- Schema: Description of **logical** structure and characteristics of all data in database (one database has only one schema)

- External schema: Schema of local data used by database **users** (one database has only one external schema)

- Internal schema: Description of data **physical** structure and storage methods

## Relational Databases

### Relational Data Structure and Formal Definition

- Domain: Set of values of the same data type

- Cartesian product: Intersection of multiple domains

- Relation: Two-dimensional table

- Attribute: One column of two-dimensional table

- Key: Attribute set that can uniquely identify a tuple

- Candidate key: Attribute set that can uniquely identify a tuple and contains no redundant attributes

- Primary key: One of multiple candidate keys

- Primary attribute: Attribute of primary key

- Foreign key: Not primary key of table one, but is primary key of table two

## Relational Data Theory

### Formal Definition of Relational Schema

>

R(U, D, DOM, F) // R: relation name U: attribute name set D: domain from which attributes come DOM: mapping set of attributes to domains F: data dependency relationship set between attributes

### Functional Dependencies

- Functional dependency: x can uniquely determine y

- Full functional dependency: x1 or x2 alone cannot uniquely determine y, but (x1, x2) can fully determine y

- Partial functional dependency: Either x1 or x2 alone can uniquely determine y

### Normal Forms

- 1NF: All attributes of relational schema are indivisible basic data items

- 2NF: Every non-primary attribute fully functionally depends on the key (eliminates partial dependency of non-primary attributes on primary key)

- 3NF: Every non-primary attribute neither partially depends on nor transitively depends on the key (eliminates transitive dependency of non-primary attributes on primary key)

- 4NF: Eliminates any transitive dependencies and partial dependencies of attributes on the key

### Relational Operations

- Query: Selection, projection, join, division, union, intersection, difference, Cartesian product

- Update: Insert, delete, modify

### Relational Algebra

- Union: Intuitively takes union

- Difference: Intuitively takes complement of former

- Intersection: Intuitively takes intersection

- Cartesian product: Union of tuples from both

- Selection: `where`

- Projection: Take several sub-relations from a relation to form new relation (select multiple columns)

- Join: Select some tuples from Cartesian product of two relations

- Division: Obtain attribute sets that satisfy relation groups

### Relational Integrity

- Entity integrity: If attribute A is a primary attribute of basic relation R, attribute A cannot take null values

- Referential integrity:

- Reference between relations

- Foreign key: Let F be one or a group of attributes of basic relation R, but not the key of relation R. If F corresponds to the primary key Ks of basic relation S, then F is called a foreign key of basic relation R

- Referential integrity rule

- User-defined integrity: `NOT NULL`/`UNIQUE`/`CHECK`

## SQL

### Data Query

```
1
2
3
4
5
6
7
8
9
10
11
12
13
14

```

```
#Query specified columns
SELECT Sno, Sname
FROM Student
WHERE Sdept = 'CS'
ORDER BY Grade DESC;
#Query all columns
SELECT *
FROM Student
WHERE Sage < 20
ORDER BY Sdept ASC, Sage DESC;
#Eliminate duplicate values
SELECT DISTINCT Sno
FROM SC
WHERE Grade < 60;

```

Aggregate functions:

- where: Conditions for filtering data in table

- group by: How to group filtered data

- having: Conditions for filtering grouped data

- order by: What order to view returned data in

## Database Protection

### Authorization and Revocation

- Authorization

```
1
2
3
4

```

```
#Grant query/all privileges on Student table to user U1/all users
GRANT SELECT/ALL PRIVILEGES
ON TABLE Student
TO U1/PUBLIC;

```

- Revocation

```
1
2
3
4

```

```
#Revoke user U4's privilege to modify student number
REVOKE UPDATE(Sno)
ON TABLE Student
FROM U4;

```

- Triggers: Event-driven

## Database Recovery Techniques

- **Transactions**

- Atomicity: All operations in a transaction either execute completely or not at all

- Consistency: Database is consistent before and after transaction execution

- Isolation: Each transaction feels like no other transactions are executing in the system

- Durability: After successful transaction execution, modifications to database are permanent

- Data locking:

- Data inconsistency includes: **Concurrent operations destroying transaction isolation**

- Lost update

- Non-repeatable read

- Reading "dirty" data

- Locking

- Exclusive lock (X lock): Other transactions cannot read or modify A

- Shared lock (S lock): Other transactions can only read A but cannot modify A

# Subject 4: Computer System Architecture

## Concepts

- Virtual machine: Abstract computer, implemented by software, all have instruction sets and use different storage areas

- Transparency: Something or attribute that actually exists appears not to exist from a certain perspective

- Factors influencing system architecture development:

- Locality of program memory access:

- Locality of data access: Temporal locality & spatial locality

- Most commonly used method in system architecture design: Principle of optimizing for high-probability events

- Portability:

- Using computer families

- Simulation and emulation

- Unified high-level language

-

Technical approaches to improving parallelism:

- Time overlap

- Resource duplication

- Resource sharing

-

Pipeline performance metrics

- Throughput: $$P = \frac{n}{T_k}=\frac{n}{(k+n-1)\Delta T}$$

- Speedup: $$ S = \frac{T_0}{T_k} = \frac{k*n}{k+n-1}$$

- Efficiency: $$E = \frac{effective\ task\ area}{corresponding\ total\ area}= \frac{n}{k+n-1} $$

## Pipeline Technology

- Static pipeline (same time, same function) & dynamic pipeline (same time, different methods)

- Linear pipeline (serial connection, no feedback) & nonlinear pipeline (added feedback loops)

## Vector Processors + Interconnection Networks + Array Machines

- Vector processor: In pipelined processors, setting vector data representation and corresponding vector instructions makes it a vector processor

- Vector processor architecture:

- Memory-to-memory type: Vector length unlimited

- Register-to-register type:

- Instruction-level parallelism:

- Tomasulo algorithm:

## Multiprocessors: (Couldn't finish the rest, please go straight to practicing the 13 test sets)
