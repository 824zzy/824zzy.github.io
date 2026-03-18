---
author: Zhengyuan Zhu
pubDatetime: 2018-04-16T00:00:00Z
title: "Quantitative Investment"
slug: quantitative-investment-summary
featured: false
draft: false
tags:
  - notes
description: ""
---

# What is Quantitative Investment?

The stock market is considered chaotic, complex, volatile, and dynamic. Through computer **programmatic** trading orders, it is a trading method aimed at achieving **stable returns**. In layman's terms, it means pre-setting a **fixed logic** that specifies stock selection criteria and when to buy and sell. During live trading, market data is received and analyzed in real-time, and when the pre-set criteria are met, **automatic buy and sell** operations are executed.

# What are the advantages of quantitative investment?

For example, we can create a robot version of Wang Yawei. We can analyze when Wang Yawei buys and sells, breaking down a stock into more than 60 factors. For instance, what are the fundamentals, what analysts say, what the current price and volume situation is, listing out 60+ factors.

Among them, which factors show green lights when it's time to buy; when it's time to sell, which lights go out.

After comparing one by one, you know which factors he values when buying stocks.

This way, following his method, we can scan all thousands of stocks in the entire market. A computer can finish scanning in just a few minutes, revealing a large batch of Wang Yawei-type stocks.

Following this method, you can essentially create a robot Wang Yawei.

- It's about dispersing all investment decisions as much as possible, and human physical capabilities cannot match computers.

- Seek win rate. As long as the win rate of each investment decision is higher than the average level, reaching 51%. Once these two steps are achieved, quantitative investment basically has no problems.

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/quantitative_investment_1.png)

# Quantitative Investment Strategies in the AI Era

The wave of artificial intelligence has swept through more and more areas of life: speech recognition, image recognition, risk control monitoring, intelligent recommendations, autonomous driving...

Machines are beginning to gradually replace human work in many aspects, greatly freeing human hands. In some areas, they can even complete tasks that humans cannot handle. What about investment?

## Case Study: Using LSTM to Predict Real Financial Data

- Obtain financial historical data through legitimate channels

- Data cleaning and normalization

- Remove outliers: In diving or gymnastics competitions, the highest and lowest scores are usually removed, and the average is taken from the remaining judges' scores. Similarly, for a single factor, 3000+ stocks correspond to 3000+ factor values. Some are ridiculously high, some ridiculously low. These outliers are like the extreme values in diving and gymnastics scoring, usually treated by removal.

- Factor value standardization: Imagine if Xiao Wang uses two factors to choose a spouse, one is height, one is appearance. The height range is 150-180cm, appearance value is 0-10 points. These two factors have different units (dimensions) and naturally cannot be added. What should Xiao Wang do? He thought of a method: 180cm corresponds to 10 points, 150cm corresponds to 0 points, and the scores for heights in between are given by the function mapping shown below. This process is factor value standardization.

- Market value and industry neutralization: Each single factor has intricate influences on stock prices. For example, both P/E ratio and market cap factors affect stock prices. Among small-cap stocks, there are also stocks with low P/E ratios, and stocks with low P/E ratios are not all large caps.

- Feature dimensionality reduction: (Principal Component Analysis)

- Create dataset: The specific operation is: take the current moment and N segments of data before it to form a sequence, treating each segment sequence as a new data point. Additionally, this learning method belongs to supervised learning, and each piece of data needs its corresponding label. We take the rise and fall situation at the next moment as the label, dividing it into five categories according to the magnitude of rise and fall to approximate a normal distribution.

- Split training and test sets

- Build LSTM neural network and start training

- Write trading strategy. The simplest strategy is to directly make trading choices based on predicted rise and fall. For example, buy if several consecutive future time points rise, sell if several consecutive time points fall. Of course, it can also be combined with general trading strategies, such as predicting golden cross and death cross points, and adding stop-profit and stop-loss strategies.

# Looking at the Stars: What Principles of Deep Learning Should We Master?

> In recent years, deep neural networks have made outstanding progress in speech and image fields, to the extent that many people equate deep learning with deep neural networks.

## What is Deep Learning?

We all know that artificial intelligence is very hot now, and one of the most important technologies sparking this wave is deep learning technology. Today when we talk about deep learning, we can actually see it in various applications, including images, video, sound, natural language processing, etc. If we ask a question, what is deep learning? Most people basically think that deep learning is almost equal to deep neural networks.

**Deep learning is not equal to deep neural networks**: Deep reinforcement learning (D.Silver & Sutton), gcForest (Zhou Zhihua), etc.

## What are Neural Networks?

- What do neural networks look like?: Analogous to the human brain (simple computational model)

- Mathematical expression: $y = a(W*x+b)$;

- Visual understanding is: 1. Dimension increase/decrease 2. Magnify/shrink 3. Rotate 4. Translate 5. **"Bend"** (ensuring continuity, differentiability -> BP algorithm has a place to be useful!)

- What is the training process of neural networks?

- loss function (how much is the gap between the target and prediction) [I see a tiger but recognize it as a cat, the loss lies in the character "王"]

- Gradient descent: The loss value continuously moves in the opposite direction of the gradient corresponding to the current point to reduce loss. (BP algorithm)

## Why Deep Learning Rather Than Wide Learning?

- Deep learning has stronger expressive power in functional analysis (stronger ability to learn features, stronger **layer-by-layer** abstraction ability)

- Universal approximation capability of neural networks (Taylor formula, Fourier transform, etc.)

# Down to Earth: What Tools Should We Use?

- pytorch

- numpy

- pandas

# Frontier Exploration in Academia and Industry

- Improving factor-based quantitative investment by predicting company fundamentals

Listed companies need to periodically publish reports reflecting fundamental financial data of the company, such as revenue, operating income, debt, etc. These data points provide some reference for the company's financial condition. Academic research has verified some effective factors. That is, by backtesting and analyzing historical report data to calculate factors, one can achieve performance beyond the market average. Among them, two popular factors are book value (normalized by market capitalization) and operating income (normalized by EBIT/EV). Backtesting shows that if we can (clairvoyantly) select stocks using factors calculated based on future fundamentals (through prediction), then our portfolio will far exceed standard factor stock selection methods. Inspired by this analysis, we train deep neural networks to predict fundamental data for the next 5 years.

- Using machine learning algorithms to predict ETFs

Focus on predicting the direction of rise or fall (up or down) for several liquid ETFs, without trying to predict the magnitude of price changes. Conclusions: 1. Short-term prices follow the random walk hypothesis 2. The importance of cross-sectional and intertemporal trading volume for a strong information set 3. A large number of features are necessary for predictability, because each feature contributes very little. 4. ETFs can be predicted using machine learning algorithms, but practitioners should incorporate prior market and intuitive knowledge into asset class behavior.

> References and copyright statement
    [https://zhuanlan.zhihu.com/p/33430725](https://zhuanlan.zhihu.com/p/33430725)
    [https://zhuanlan.zhihu.com/p/29451486](https://zhuanlan.zhihu.com/p/29451486)
    [https://zhuanlan.zhihu.com/p/22260743](https://zhuanlan.zhihu.com/p/22260743)
    [https://zhuanlan.zhihu.com/p/25919734](https://zhuanlan.zhihu.com/p/25919734)
    [https://zhuanlan.zhihu.com/p/26037052](https://zhuanlan.zhihu.com/p/26037052)
    [https://zhuanlan.zhihu.com/p/35044817](https://zhuanlan.zhihu.com/p/35044817)
    [https://mp.weixin.qq.com/s/ROk5lK5gWj6pl4-ebrHG_A](https://mp.weixin.qq.com/s/ROk5lK5gWj6pl4-ebrHG_A)
    [https://www.zhihu.com/question/22553761/answer/36429105](https://www.zhihu.com/question/22553761/answer/36429105)
    [https://arxiv.org/pdf/1711.04837.pdf](https://arxiv.org/pdf/1711.04837.pdf)
    [https://arxiv.org/pdf/1801.01777.pdf](https://arxiv.org/pdf/1801.01777.pdf)
