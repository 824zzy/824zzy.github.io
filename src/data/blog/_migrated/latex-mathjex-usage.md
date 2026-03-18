---
author: Zhengyuan Zhu
pubDatetime: 2017-09-06T00:00:00Z
title: "Latex & Mathjax Usage"
slug: latex-mathjex-usage
featured: false
draft: false
tags:
  - notes
description: ""
---

# Latex

## Environment Setup:

Editing LaTeX on Mac using Sublime and Skim

### Install Package Control in Sublime Text

- Go to [Package Control website](https://packagecontrol.io/installation) and copy the code in the gray block.

- Open Sublime Text.

- Use shortcut "control+~" (~ is below the Esc key) to open the Console panel. You will see a white window pop up at the bottom of Sublime Text.

- Paste the code you just copied into the control panel.

- Press "Enter". Then quit and restart Sublime Text.

### Install LaTex Tools

- After Sublime Text restarts, press "Command+Shift+P" to open the Command pallet. This step can also be done through the Tools dropdown menu.

- Type "Install Package" in the command pallet and press Enter.

- After completion, type "LaTeX Tools", find this item and press Enter to install.

- Quit and restart Sublime Text.

### Install Skim

- Go to [Skim](https://skim-app.sourceforge.io/) to download and install Skim

- Open Skim, in the menu bar go to Skim > Preference > Sync

- In the preset menu select Sublime Text
skim.

- Close the above window.

### Basic Usage of the Environment

- Open Sublime Text, Command+N to create a new file and write LaTeX code in it.

- After editing, Command+S to save the file.

- Command+B to compile and run, you can now see the PDF preview in Skim.

## Commands and Environments (case sensitive)

- Commands start with \. For example `\LaTeX`

- Source code structure
```
1
2
3
4

```

```
\documentclass{...} //use document class
\usepackage{...} //load package
    \begin{document}
    \end{document}

```

## Packages and Document Classes

### Document Class `\documentclass[<options>]{<class-name>}`

#### `<class-name>` includes:

- **article** Papers, reports, documentation

- report Long document class

- book Book document class

- proc Academic documents based on article document class

- slides Slide format document class

- minimal Minimal document class

#### `<options>` includes:

　Example: Paper size A4, base font size 11pt, two-sided layout `\documentclass[11pt,twoside,a4paper]{article}`

- Base font size: 10pt, 11pt, 12pt, default is 10pt

- Paper size: a4paper, letterpaper, a5paper, b5pape

- Formula position: fleqn makes display formulas left-aligned (default is centered)

## File Organization

```
1
2
3
4
5
6
7
8

```

```
\include{<filename>}
\input{<filename>}
```

## Using LaTeX to Typeset Text
### UTF-8 Encoding
```latex
\usepackage[utf-8]{inputenc}

```

### Typesetting Chinese

```
1
2
3
4

```

```
\documentclass{ctexart}
\begin{document}
Chinese LaTeX typesetting
\end{document}

```

### Symbols in LaTeX

-

Spaces and paragraphs
　One or multiple spaces & one or multiple line breaks have the same effect

-

Comment %

## Document Elements

### Chapter and Section Titles

```
1

```

```
\section{<title>} \subsection{<title>} \subsubsection{<title>} \paragraph{<title>} \subparagraph{<title>}

```

### Insert URL Centered

\begin{center}
  \url{[https://cmt.research.microsoft.com/NIPS2018/}](https://cmt.research.microsoft.com/NIPS2018/})
\end{center}

## Common Errors

### Latex Chinese utf-8 encoding

Use CJKutf8 to solve the problem

```
1
2
3
4
5
6

```

```
\usepackage{CJKutf8}
\begin{document}
\begin{CJK}{UTF8}{<font>}
 ...
\end{CJK}
\end{document}

```

font is for simplified Chinese fonts. CJK comes with utf-8 simplified fonts gbsn (Song) and gkai (Kai). The following code is a simple example (make sure to save the tex file in utf-8 format):

```
1
2
3
4
5
6
7
8

```

```
%test.tex
\documentclass{article}
\usepackage{CJKutf8}
\begin{document}
\begin{CJK}{UTF8}{gbsn}
This is a CJKutf8 example, using gbsn font.
\end{CJK}
\end{document}

```

# Basic Usage of MathJax

- Greek letters

　　　　Name: alpha, uppercase: $A$, Tex: A, lowercase: $\alpha$, Tex: \alpha

- Brackets

- Curly braces: \lbrace, \rbrace

- Angle brackets: \langle, \rangle

- Ceiling/floor: \lceil, \lfloor, \rceil, \floor

- Summation, integration, product

- Summation and multiplication: \sum, \cdot

- Integration: \int, \iint

- Product: \prod

- Special functions and symbols

- Trigonometric functions: \sin, \arctan, \lim

- Comparison operators: less than (\lt), greater than (\gt), less than or equal (\le), greater than or equal (ge), not equal (neq)

- Arrows: right arrow (\rightarrow), left arrow (\leftarrow), double right arrow (\Rightarrow), double left arrow (\Leftarrow)

- Top symbols: single character estimation (\hat), multi-character estimation (\widehat), mean (\overline), vector (\vec)

- Other operators: infinity (\infty), differential operator (\nabla), partial derivative (\partial)

## Fonts

- Typewriter: \mathtt{A} renders as 𝙰, 𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉

- Blackboard Bold: \mathbb{A} renders as 𝔸, 𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ

- Sans Serif: \mathsf{A} renders as 𝖠, 𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹

## Adding Numbers to Formulas

```
1

```

```
Math formula\eqno number

```

## Uncommon Errors

### Cannot recognize rarely used symbols in formulas

Try importing package:

```
1

```

```
\usepackage{amssymb}        % prevent bugs for formula symbol

```

>

References

- [https://www.cnblogs.com/linxd/p/4955530.html](https://www.cnblogs.com/linxd/p/4955530.html)

- [https://blog.csdn.net/ethmery/article/details/50670297](https://blog.csdn.net/ethmery/article/details/50670297)

- [https://www.cnblogs.com/gslyyq/p/5043848.html](https://www.cnblogs.com/gslyyq/p/5043848.html)

- [https://www.cnblogs.com/dezheng/p/3874434.html](https://www.cnblogs.com/dezheng/p/3874434.html)

- [https://blog.csdn.net/woniuxyy/article/details/80300322](https://blog.csdn.net/woniuxyy/article/details/80300322)
