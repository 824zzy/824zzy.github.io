---
author: Zhengyuan Zhu
pubDatetime: 2018-09-27T00:00:00Z
title: "From Pycharm to SpaceVim"
slug: space-vim-usage
featured: false
draft: false
tags:
  - tools
description: ""
---

>

Pycharm consumes too much memory, so I switched to using SpaceVim. Basic configuration is recorded as follows:

## Basic Environment Configuration

### Install SpaceVim

```
1
2
3
4
5

```

```
curl -sLf https://spacevim.org/install.sh | bash
# If current environment doesn't have curl installed and no admin permissions
wget https://spacevim.org/install.sh
bash install.sh
# Start vim and install plugins

```

### Configure .SpaceVim/autoload/SpaceVim.vim

- `set timeoutlen=10`: Space key delay

- `let g:spacevim_relativenumber=0`: Disable relative line numbers

### Configure .SpaceVim.d/init.vim

- `[[layers]] \n name="lang#python"`: Use python

- `disable_plugins=["neomake.vim"]`: Disable plugin (this plugin reports errors when using conda)

### Update `:SPUpdate`

## Common Command Memo

### Basic Operations

- `e`: Open an empty editor

- `:e file_name`: Open file (this operation **can also** be done in nerdtree)

### space+b series (buffer)

- `N+l`: Create new buffer on the right

- `d`: Delete buffer

### space+f series (file management)

- `t`: Toggle nerdtree

### space+w series (window management)

- `o`: Switch to next window

- `/` and `-`: Split window on right and below respectively

- `F`: New Tab

### space+t series (Toggle management)

- `t`: Open tab management

### space+c series (comments)

- `l`: Comment selected line (used with `V` mode)

### space+s series (search)

- `s`: Search directly in current file

### space+l series (language)

- `r`: Run code

## References

- [https://spacevim.org/cn/layers](https://spacevim.org/cn/layers)

- [https://everettjf.gitbooks.io/spacevimtutorial](https://everettjf.gitbooks.io/spacevimtutorial)
