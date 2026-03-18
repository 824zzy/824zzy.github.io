---
author: Zhengyuan Zhu
pubDatetime: 2022-05-26T00:00:00Z
title: "Navigating Misinformation - How to identify and verify what you see on the web"
slug: self-directed-course-navigating-misinformation
featured: false
draft: false
tags:
  - notes
description: ""
---

## Overview

This article is a learning note of the self-directed course [Navigating Misinformation - How to identify and verify what you see on the web](https://journalismcourses.org/course/misinformation/).

The main purpose of this course is to help researchers learn how fact-checkers identify and verify online content, namely how responsible reporting works in an age of misinformation/disinformation.
The topics below are involved in this course:

- Discovery of problematic content

- Basic verification of online sources

- Advanced verification of online sources

- How date and time stamps work on social posts

- How to geo-locate where a photo or video was taken

- Tools overview to help determine the time in a photo or video

- Verification challenge

## Discovery of problematic content

To keep track of the misleading claims and content, journalists are monitoring multiple social media. The first and foremost thing to figure out is **what should be monitored - groups and/or topics**, and what you choose will depend on the social platform. In general, journalists use Reddit, Facebook and Twitter as information sources.

### Information sources

#### Reddit

Reddit is the eighth most popular website in the world even more popular than Twitter. **Misinformation ends up circulating widely on Facebook and Twitter often appears on Reddit first**. Reddit is made up of a collection of open forums called **subreddit**, the subreddit can be discovered through the general search page. Once you have found an interesting subreddit, you can search for its name to discover similar subreddits. Also, keep an eye out for new subreddits mentioned in the comments.

#### Twitter

There are two key ways to monitor Twitter activity: **terms and lists**.
The terms include keywords, domains, hashtags and usernames. More specifically, journalists focus on those websites and particular accounts that are likely to produce misleading content, and tweets that include certain keywords or hashtags, like “snowflakes” and “#Lockherup”. The [Twitter Search API](https://developer.twitter.com/en/docs/api-reference-index) provides a powerful way to form a query. Below are the example of Twitter search operators:

![Twitter search operators](https://firstdraftnews.org/wp-content/uploads/2017/07/tweets_monitoring.png)

On the other hand, using Twitter lists is another effective way of quickly putting together groups of accounts to monitor. The lists can be created by any Twitter user who is following a group of accounts as a unit. Journalists use Twitter lists to capitalize on the expertise of other journalists, however, Twitter hasn’t provided an API to easily search Twitter lists based on keywords. Thus, we have to utilize a Google hack to search through Twitter lists.
The hack is: for any topic keywords that you are interested in, add the query `site:twitter.com/*/lists [keywords]` in the google search bar. Google will return keyword-related public lists of all Twitter users. What’s more, by going to the list creator’s profile and clicking `More` and then `Lists`, you can find more lists that potentially attract you.
And by keep doing so recursively, you can combine the lists that you have found into a super list.

#### Facebook

The potential to monitor Facebook is narrower due to two reasons. First, the content available is designated public by users. Second, Facebook does not support direct, programmatic access to the public feed.

### Monitoring Reddit, Facebook and Instagram with CrowdTangle

[Crowdtangle](https://www.crowdtangle.com/) was made free after being acquired by Facebook. It takes search queries, groups and pages and creates custom social feeds for Facebook, Instagram, and Reddit. If you give it a search query, it creates a feed of posts from the platform that match that query. If you give it a list of accounts, it creates a feed of posts from those accounts.

![crowdtange user interface](https://firstdraftnews.org/wp-content/uploads/2017/08/crowdtangle.png)

### Monitoring Twitter with TweetDeck

By far, the easiest way to monitor multiple Twitter streams in real-time is TweetDeck. With Tweetdeck, you can arrange an unlimited number of real-time streams of tweets side-by-side in columns that can easily be cycled through.

![TweetDeck](https://firstdraftnews.org/wp-content/uploads/2017/08/tweetdeck.png)

## Basic verification of online sources

When attempting to verify a piece of content, journalists always investigate five elements:

-

**Provenance**: verify if the content is original

 If we are not looking at the original, all the metadata about the source and date will be wrong and useless. The journalists are facing the challenge that footage can easily jump from platform to platform or prevail inside a platform, thus we should always be suspicious about the content originality.

-

**Source**: verify who created the content

 Note that source means who captured the content instead of who uploaded the content. To verify the source, one can depend on two aspects: directly contact the user and check the user location and event location are the same.

-

**Date**: verify when the content captured

 Never assuming the content uploaded date is when the content was captured.

-

**Location**: verify where the content captured

 The geolocation can be easily manipulated on social media platforms, so it is better to double-check the location on a map or satellite image.

-

**Motivation**: verify why the content captured

 The user can be an accidental eyewitness or a responsible stakeholder.

With the help of reversed image search tools such as [Google Images](https://images.google.com/) and [RevEye](https://chrome.google.com/webstore/detail/reveye-reverse-image-sear/keaaclcjhehbbapnphnmpiklalfhelgf?hl=en), one can easily accomplish the verification.

## Advanced verification of online sources

-

Wolfram Alpha

 Wolfram Alpha is a knowledge engine that brings available information from across the web. It has a powerful tool for checking the weather from any particular location on any date. When you are trying to **double-check the date on an image or video**, it can be very useful.

-

Shadow Analysis

 Check if the shadow is in the right shape, right length and the same direction.

-

Geo-location

 Only a very small percentage of social media posts are geo-tagged by users themselves. Luckily [high-quality satellite and street view imagery](https://www.google.com/maps/) allows you to pace yourself on the map and stand in the place that the user was standing when they captured the footage.

## References

- [How to begin to monitor social media for misinformation](https://firstdraftnews.org/articles/monitor-social-media/)
