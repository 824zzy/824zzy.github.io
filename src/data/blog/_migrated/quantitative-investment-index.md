---
author: Zhengyuan Zhu
pubDatetime: 2018-01-23T00:00:00Z
title: "Common Technical Investment Indicators Study"
slug: quantitative-investment-index
featured: false
draft: false
tags:
  - notes
description: ""
---

## DDX

>

Large order buying volume (as a proportion of circulating shares), currently many manipulations by major players (order splitting software).
Red for buying, green for selling.

### Notes

- If stock price rises significantly & high DDX value: Major player is frantically pulling up, very risky to enter.

- Safe entry point: DDX and DDY divergence

- Turnover rate as supplementary condition: Use 3% as standard

## DDY

>

Ratio of selling orders minus buying orders for the day to retail investors (estimated value). That is, retail investor selling proportion. Red bars indicate more selling, retail investor positions decrease, major player positions relatively increase.

### Notes

- DDX and DDY moving in same direction: Both large orders and major players accumulating/major players secretly accumulating with medium-small orders.

## DDZ

>

Market launch momentum: Important supplement to DDX and DDY.

### Notes

- Necessary entry condition: DDX and DDY moving in same direction. Sufficient entry condition: DDZ greater than 20

## MACD

>

Exponential Moving Average Convergence Divergence. Medium to long-term analysis tool, crossover signals are relatively lagging for short-term operations.

### MACD indicator includes three sub-indicators:

- $DIF=EMA(close, 12) - EMA(close, 26)$
Where: Exponential Moving Average (EMA)

- DEA=M-day average exponential moving average of DIFF, denoted as DEA

- $ MACD=DIFF-DEA $

### Notes

- When DIF and DEA are above the 0 axis, it's a bull market.

- When DIF and DEA are below the 0 axis, it's a bear market.

- Long-term! Long-term! Long-term!

## KDJ

>

Stochastic indicator for medium to short-term trend analysis

### Indicator Calculation Description

$$RSV_n = 100(\frac{C_n-L_n}{H_n-L_n})$$

Where $C_n$ is the closing price on day n, $L_n$ is the lowest price in n days, $H_n$ is the highest price in n days.

$$K_t = \frac{2}{3}K_{t-1}+\frac{1}{3}RSV_t$$
$$D_t = \frac{2}{3}D_{t-1}+\frac{1}{3}K_t$$
$$J_t = 3K_t-2D_t$$

### Notes

- When D is greater than 80, the market shows overbought phenomenon. When D is less than 20, the market shows oversold phenomenon.

- In an uptrend, when K value is greater than D value and K line breaks above D line, it's a buy signal. In a downtrend, when K value is less than D value and K line breaks below D line, it's a sell signal.

- KD indicator is not suitable for stocks with small circulation and inactive trading, but KD indicator is extremely accurate for major indices and popular large-cap stocks. When the stochastic indicator diverges from stock price, it's generally a signal of trend reversal.

## RSI

>

By measuring the percentage of total upward price movement in a period to the average of total price changes, it evaluates the strength of bullish and bearish forces.

### Calculation Formula

$$ RSI_n = \frac{100 \times Average\ closing\ gain_n}{(Average\ closing\ gain_n + Average\ closing\ loss_n)} $$

Where: If upward forces are greater, the calculated indicator rises; if downward forces are greater, the indicator falls, thus measuring market trend strength.

### Usage Instructions

: If RSI value exceeds 50, it indicates the market has entered strong territory, consider buying, but if it continues into the "extremely strong" zone, consider that extremes lead to reversals and prepare to sell. Similarly for RSI values below 50. If it enters the "extremely weak" zone, it indicates oversold and you should look for opportunities to buy.

## BOLL

>

Designed based on standard deviation principle, core concept is: "price channel". BOLL bands are divided into upper band UP, middle band MB, lower band DN and price line.

### Calculation Formula

$$Middle\ band = N-day\ moving\ average$$
$$Upper\ band = Middle\ band + 2 \times standard\ deviation$$
$$Lower\ band = Middle\ band - 2 \times standard\ deviation$$

### Usage Instructions

If stock price breaks out of the price channel, it means the market is in an extreme state.

- When the upper, middle, and lower BOLL bands all move upward simultaneously, it indicates very obvious strong stock characteristics, and stock price will continue to rise in the short term. Investors should firmly hold or buy on dips.

## WR

>

Williams indicator: Short-term overbought/oversold indicator.
$$WR_n = \frac{High_n-Close}{High_n-Low_n}$$

### Disadvantages

Reflects too sensitively, indicator fluctuation frequency is too fast, causing frequent signal errors with very high error rate. Too many signals and serious error rates make investors hesitant to use it easily. Time parameters should be adjusted to fit the model.

## OBV: On Balance Volume

>

On Balance Volume, an indicator combining volume! **Important assumption principle**: Usually stock price rises require larger trading volume; when falling, volume may increase or be smaller. If price rises or falls without corresponding volume changes, market price changes are difficult to sustain.

### Usage Method

- When stock price rises but OBV line falls, it indicates weak buying, stock price may fall back.

- When stock price falls but OBV line rises, it indicates strong buying with bottom fishing in strong stocks, stock price may stop falling and rebound.

## BIAS

>

Bias indicator: Uses percentage to express the degree of deviation between price and MA.

### Calculation Formula:

$$Bias\ rate = \frac{(Current\ closing\ price - N-day\ average\ price)}{N-day\ average\ price} \times 100\%$$
