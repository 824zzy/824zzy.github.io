---
author: Zhengyuan Zhu
pubDatetime: 2018-06-09T00:00:00Z
title: "MongoDB Advanced Design Patterns"
slug: mongodb-design-mode
featured: false
draft: false
tags:
  - notes
description: ""
---

>

After using mongodb for such a long time, I seem to have hit a bottleneck. This article revisits mongo through several blog posts, hoping to gain new insights. Review the old to learn the new~

## Main Understanding of MongoDB:

- High availability

- Distributed

- Flexible schema

- Document database

### Differences Between Traditional Relational Model (SQL) and Document Model

![](http://www.mongoing.com/wp-content/uploads/2016/01/MongoDB-%E6%A8%A1%E5%BC%8F%E8%AE%BE%E8%AE%A1%E8%BF%9B%E9%98%B6%E6%A1%88%E4%BE%8B_%E9%A1%B5%E9%9D%A2_04-1024x791.png)

### Advantages of Document Model

- High read and write efficiency: Data Locality

- Strong scalability: Easy to shard without associations

- Dynamic schema: Flexibly handle different data schemas

- Natural model: Closest to object model

## Basic Strategies for MongoDB Document Schema Design

### Prefer Embedding, Then Consider Referencing

![](http://www.mongoing.com/wp-content/uploads/2016/01/MongoDB-%E6%A8%A1%E5%BC%8F%E8%AE%BE%E8%AE%A1%E8%BF%9B%E9%98%B6%E6%A1%88%E4%BE%8B_%E9%A1%B5%E9%9D%A2_06.png)

### MongoDB Design Pattern Principles

- Serve the application, not for storage optimization

- Design for optimal performance

## Classic Design Pattern Cases

### E-Commerce

#### Design Considerations

- A shopping cart data item won't be too large, generally fewer than 100 items

- Data auto-expires (15-30 minutes of no interaction)

- Use redundancy to provide read performance

#### Reference Data Model

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
15
16
17
18
19
20
21
22

```

```
{
    "_id": ObjectId("*")
    "userid": 1234,
    "last_activity": ISODate(...), // Use TTL to automatically delete unpaid shopping carts
    "status": "active",
    "items":[
        {
            "itemid": 1234,
            "title": "Milk",
            "price": 5.00,
            "quantity": 1,
            "img_url": "milk,jpg"
        },
        {
            "itemid": 4567,
            "title": "Eggs",
            "price": 3.00,
            "quantity": 1,
            "img_url": "eggs.jpg"
        }
    ]
}

```

#### Operations on the Model

-

Add item to shopping cart

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
15
16

```

```
db.cart.update({
    "_id": ObjectId("*")
}, {
    $push:{
        "items":{
            "itemid": 2345,
            "title": "Bread",
            "price": 2.00,
            "quantity": 1,
            "img_url": "bread.jpg"
        }
    },
    $set:{
        "last_activity": ISODate()
    }
})

```

-

Update quantity of a certain item

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

```

```
db.carts.update({
    "id": ObjectId("*")
    "items.itemid": 4567
},{
    $set:{
        "item.$.quantity": 5,
        "last_activity": ISODate()
    }
}
)

```

-

Count total quantity of items (**aggregation operation**)

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

```

```
db.cart.createIndex({"items.itemid": 1})
db.cart.aggregate(
    { $match: {"items.itemid": 8910}}, # Filter out items with id 8910 in shopping cart
    { $unwind: "$items" }, # Expand items array, each array element becomes a document
    { $group: {
        "_id": "$items.itemid",
        "amount": { "$sum" : "$items.quantity" }
        }
    }#Use aggregation operation $sum to sum the quantity of each item
)

```

### Social

#### Design Considerations

- Maintain friend relationships: following, followed

- News feed design, celebrity effect

#### Problems with Classic Document Design

```
1
2
3
4
5
6

```

```
{
    "id": "Yuan",
    "fullname": "Zhu Zheng Yuan",
    "followers": ["Oscar", "Mandy"],
    "following": ["Mandy", "Bert"]
}

```

　If TJ is a celebrity, those who follow me might be in the tens of millions. An array of tens of millions will have two problems:
1. It may exceed the hard limit of a document maximum 16M; 2. MongoDB arrays that are too large will seriously affect performance.
　The solution is to create a dedicated collection to describe following relationships.

```
1
2
3
4
5

```

```
> db.follower.find()
{"_id": ObjectId(), "user": "Yuan", "following": "Mandy"}
{"_id": ObjectId(), "user": "Yuan", "following": "Bert"}
{"_id": ObjectId(), "user": "Oscar", "following" : "Yuan"}
{"_id": ObjectId(), "user": "Mandy", "following": "Yuan"}

```

#### News Feed Implementation

>

News feed: List displaying **latest status** of all **followed users**

Solutions:

- Fan-out on read (regular approach): When you need to get all the latest updates from users you follow, you go to each user you follow's data area and retrieve the latest data. [Slowest server response time determines overall response time]

- Fan-out on write (high-resource approach): When a followed user publishes a post, one piece of data is written multiple times: directly written to the wall of each fan following you. [Write demand is amplified]

>

References:

- MongoDB Advanced Pattern Design: [http://www.mongoing.com/mongodb-advanced-pattern-design](http://www.mongoing.com/mongodb-advanced-pattern-design)
