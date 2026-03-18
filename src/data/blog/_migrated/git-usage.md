---
author: Zhengyuan Zhu
pubDatetime: 2017-04-16T00:00:00Z
title: "Git Usage Memo"
slug: git-usage
featured: false
draft: false
tags:
  - tools
description: ""
---

## Command Quick Reference

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/git_command_1.png)

## Pitfalls to Avoid

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/git_command_2.png)

## Common Errors and Tips

### git pull fails with prompt: fatal: refusing to merge unrelated histories

```
1
2
3

```

```
git pull origin master --allow-unrelated-histories
#then
git push origin master

```

### git add to add folder instead of all modified files

```
1
2
3
4

```

```
# Add entire folder and contents
git add yourfile/
# Add all files of this type in directory
git add *.your_file_type

```

### Keep synced with forked repository

- Add forked project to remote
```
1

```

```
git remote add your_forked_project_name(whatever you like) https://your_forked_project_url.git

```

- Update all remote repos in remote
```
1

```

```
git fetch --all

```

- Perform synchronization
```
1

```

```
git rebase your_forked_project_name/master

```

- Sync your own remote repository
```
1

```

```
git push origin master

```

### Handle github not allowing uploads of files larger than 100MB

#### Remove error cache

```
1
2
3
4

```

```
# for file
git rm --cached path_of_a_giant_file
# for document
git rm --cached -r path_of_a_giant_file

```

#### After resubmitting, add large files to Git Large File Storage:

- Install git-lfs: `brew install git-lfs`

- Initialize in repository root directory: `git lfs install`

- Track **large file name**: `git lfs track "name_of_your_giant_file_not_your_path!"`

- Commit and push normally: `git add your_giant_file_path`

- Search for large files: `find ./ -size +100M`

### Want to undo to previous commit after git commit

```
1

```

```
git reset --soft HEAD^

```

### git push very slow when writing objects solution

```
1

```

```
git config --global http.postBuffer 524288000

```

>

References and copyright notice

- [http://www.git-tower.com/blog/git-cheat-sheet-cn](http://www.git-tower.com/blog/git-cheat-sheet-cn)

- [https://blog.csdn.net/wxs0124/article/details/50126953](https://blog.csdn.net/wxs0124/article/details/50126953)

- [http://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories](http://stackoverflow.com/questions/37937984/git-refusing-to-merge-unrelated-histories)

- [https://blog.csdn.net/xinqingwuji/article/details/79391453](https://blog.csdn.net/xinqingwuji/article/details/79391453)

- [https://www.cnblogs.com/-walker/p/7278951.html](https://www.cnblogs.com/-walker/p/7278951.html)

- [https://blog.csdn.net/smart_graphics/article/details/78475735](https://blog.csdn.net/smart_graphics/article/details/78475735)

- [http://www.liuxiao.org/2017/02/git-%E5%A4%84%E7%90%86-github-%E4%B8%8D%E5%85%81%E8%AE%B8%E4%B8%8A%E4%BC%A0%E8%B6%85%E8%BF%87-100mb-%E6%96%87%E4%BB%B6%E7%9A%84%E9%97%AE%E9%A2%98/](http://www.liuxiao.org/2017/02/git-%E5%A4%84%E7%90%86-github-%E4%B8%8D%E5%85%81%E8%AE%B8%E4%B8%8A%E4%BC%A0%E8%B6%85%E8%BF%87-100mb-%E6%96%87%E4%BB%B6%E7%9A%84%E9%97%AE%E9%A2%98/)

- [https://blog.csdn.net/w958796636/article/details/53611133](https://blog.csdn.net/w958796636/article/details/53611133)
