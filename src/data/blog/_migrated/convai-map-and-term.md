---
author: Zhengyuan Zhu
pubDatetime: 2018-08-08T00:00:00Z
title: "Conversational AI Terminology and Learning Map"
slug: convai-map-and-term
featured: false
draft: false
tags:
  - notes
description: ""
---

## Chatbot Basics

- Natural language processing (NLP)
Natural language processing is a subset field of artificial intelligence. Natural language processing is an all-encompassing and quite complex technology that includes many subsets, such as natural language understanding.
NLP refers to machines understanding everything humans input. To this end, NLP engines will use many tools, such as NLU, summarization algorithms, sentiment analysis, tokenization, and more.

- Natural language understanding (NLU)
Natural language understanding is a subset of natural language processing. NLU and NLP are often confused because their meanings are very close.
NLU is a very specific part within the NLP engine. It examines utterances and extracts their entities and intents. In simpler terms, NLU allows machines to understand what users are saying.
When it comes to chatbots, you can think of NLU as the process of reading human language and identifying different parts of the text, breaking it down into the correct intents and entities.

- Chatbot
A `chatbot` is a conversational computer program. However, **conversational agent** might be a better term to describe this program.

- Utterance
Anything a user says to the chatbot can also be seen as user input. For example, if a user enters "show me yesterday's financial news", the entire sentence is the `Utterance`.

- Intent
`Intent` represents the meaning of the user's `Utterance`. The chatbot will respond to the user based on a series of `Intents` and understanding of `Intent`. For example, if a user enters "show me yesterday's financial news", the user's intent is to retrieve a list of financial headlines. `Intent` is usually a verb and a noun, such as "showNews".

- Entity
`Entity` usually modifies `Intent`. For example, if a user enters "show me yesterday's financial news", then the `Entity` is "yesterday" and "financial". `Entity` is given a name, such as "dateTime" and "newsType". `Entity` is sometimes also called `Slots`.

![](/images/blog/ca26ff18ly1fu2otnnx3oj21r60x246f.jpg)

- Broadcast
A `Broadcast` is a message sent to users in advance. It is not a response to user input. `Broadcast` is also called "subscription message", which is equivalent to a push message in mobile applications in chatbots.

- Ambiguity

- Paraphrase

- metric

## Advanced Terminology

### Common NLP Terms

#### Word Level

- Segmentation (Seg)

- Part-of-Speech tagging (POS)

- Named Entity Recognition (NER)

- Out-of-vocabulary word recognition

- Word vectors (word2vec)

- Word sense disambiguation

#### Sentence Level

- Sentiment analysis

- Relation extraction

- Intent recognition

- Dependency parsing (parser)

- Role labeling

- Shallow semantic analysis

- Coreference resolution

#### Document Level

- Information extraction

- Ontology extraction

- Event extraction

- Topic extraction

- Document clustering

- Public opinion analysis

- Discourse understanding

- Automatic summarization

#### Common Basic Algorithms:

- Machine Learning:

- Hidden Markov Model (HMM)

- Conditional Random Fields (CRF)

- Support Vector Machine (SVM)

- Language models

- Topic models (LDA)

- TF-IDF

- Pointwise Mutual Information (PMI)

- Bayesian models

- Probabilistic graphical models

- Deep Learning:

### Question Answering (QA)

### Reinforcement Learning (RL)

### Markov Decision Process (MDP)

### POMDP

### Image captioning

### Phonology

### Segmentation

Both Chinese and English have segmentation problems, but relatively speaking, English words already have spaces between them for separation, so processing is relatively convenient. However, Chinese writing has no delimiters, so the segmentation problem is more prominent. Common methods for segmentation can be dictionary-based longest string matching, which is said to solve 85% of problems, but ambiguous segmentation is difficult. Another is the current mainstream statistical machine learning approach.

### Part-of-Speech Tagging (Label)

In machine learning-based methods, it is often necessary to tag the part of speech of words. The purpose of tagging is to represent a hidden state of the word, and the transitions between hidden states constitute the state transition sequence. For example: Suning.com/n invested/v in/u Inter Milan/n. Among them, n represents noun, v represents verb, n and v are all tags. And so on.

### Named Entity Recognition

Essentially it is still a type of tagging problem. It just refines the tagging. For example, Suning/cmp_s .com/cmp_e is/v B2C/n e-commerce/n. We tag Suning.com as cmp_s and cmp_e, representing the start and end of a company name. This way, when encountering Suning/Yun/Shang/.com in this scenario, it can be completely identified as a company name. If we use traditional tagging methods, Suning/cmp .com/cmp, such general tagging might have problems.

### Syntax Parsing

Syntax parsing is often a rule-based expert system. Of course, it's not to say it can't be constructed using statistical methods, but initially, it was still constructed using knowledge from linguistics experts. The purpose of syntax parsing is to parse the dependency relationships between various components in a sentence. So often the final result generated is a syntax parsing tree. Syntax parsing can solve the problem that traditional bag-of-words models don't consider context. For example, Zhang San is Li Si's leader; Li Si is Zhang San's leader. These two sentences are completely the same using the bag-of-words model, but syntax parsing can analyze the master-slave relationship within them, truly clarifying the sentence's relationship.

### Coreference Resolution (Anaphora Resolution)

Pronouns appear very frequently in Chinese, their role is to represent people's names, place names, and other words that appeared in the previous text. For example, Suning.com is located in Nanjing, and this company is currently in the top three of China's B2C market. In this sentence, "Suning.com" actually appears twice, "this company" refers to Suning.com. But due to Chinese habits, we won't repeat "Suning.com" again.

## AI Models

### Deep Semantic Similarity Model (DSSM)

### Triplet loss

### Machine Reading Comprehension (MRC)

### Knowledge Base-QA (KBQA)

- WordNet(1998)

- Freebase(2008)

- Yago(2007)

### Knowledge base completion (KBC)

## Chatbot Domain Learning Map:

![](/images/blog/ca26ff18ly1fue50ug6o9j217m88pb2c.jpg)

> References and Citations

- [https://www.microsoft.com/en-us/research/publication/neural-approaches-to-conversational-ai/](https://www.microsoft.com/en-us/research/publication/neural-approaches-to-conversational-ai/)

- [https://chatbotsmagazine.com/chatbot-vocabulary-10-chatbot-terms-you-need-to-know-3911b1ef31b4](https://chatbotsmagazine.com/chatbot-vocabulary-10-chatbot-terms-you-need-to-know-3911b1ef31b4)

- [https://blog.ubisend.com/discover-chatbots/chatbot-glossary](https://blog.ubisend.com/discover-chatbots/chatbot-glossary)

- [https://blog.csdn.net/wangongxi/article/details/52662177](https://blog.csdn.net/wangongxi/article/details/52662177)

- [https://www.jianshu.com/p/d7ec29abbcb8](https://www.jianshu.com/p/d7ec29abbcb8)
