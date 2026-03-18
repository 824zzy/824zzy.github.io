---
author: Zhengyuan Zhu
pubDatetime: 2017-04-03T00:00:00Z
title: "Commonly Used Linux Commands"
slug: linux-command
featured: false
draft: false
tags:
  - tools
description: ""
---

## Basic Linux Commands

### cd Command

```
1
2
3
4
5
6

```

```
# Switch to directory /root/Docements using absolute path
cd /root/Docements
# Switch to path directory in current directory using relative path, "." represents current directory
cd ./path
# Return to parent directory
cd ..

```

### ls Command

```
1
2
3
4
5
6

```

```
# Command to view files and directories
ls
# List all files, including hidden files (files starting with .)
ls -a
# List all files including file attributes and permission data
ls -l

```

### grep Command

```
1
2

```

```
# Used to search and filter data in files
grep [-aciv] [--color=auto] 'search string' filename

```

#### Common Parameter Explanations:

- -a: Search binary files as text files

- -c: Count the number of times 'search string' is found

- -i: Ignore case differences, treating uppercase and lowercase as the same

- -v: Reverse selection, displaying lines that do not contain 'search string'
```
1
2
3
4
5

```

```
# For example:
# Extract lines containing MANPATH from file /etc/man.config and highlight found keywords
grep --color=auto 'MANPATH' /etc/man.config
# Output content from ls -l output that contains the letters file (case insensitive)
ls -l | grep -i file

```

### cp Command

>

Copy file command, common parameters as follows

- -a: Copy file characteristics together

- -p: Copy file attributes together instead of using default method, similar to -a, commonly used for backup

- -i: If target file already exists, ask before overwriting

- -r: Recursive continuous copy, used for directory copy operations

- -u: Only copy when target file differs from source file

```
1
2

```

```
cp -a file1 file2 # Copy file file1 to file2 with all file characteristics
cp -r file1 file2 file3 dir # Recursively copy files file1, file2, file3 to directory dir

```

### mv Command

>

Rename file usage

```
1

```

```
mv file1 file2 # Rename file file1 to file2

```

Move one file or multiple files to a folder at once (the last target file must be a directory)

```
1

```

```
mv file1 file2 file3 dir # Move files file1, file2, file3 to directory dir

```

### rm Command (Use Carefully!!!!!!)

>

Delete files or directories, common parameters

- -f: Force, ignore non-existent files, no warning messages

- -i: Interactive mode, ask user before deletion

- -r: Recursive deletion, most commonly used for directory deletion, a very dangerous parameter
```
1
2

```

```
rm -i file # Delete file, will ask before deletion
rm -fr dir # Force delete all files in directory dir

```

### ps Command

>

View process execution status, commonly used combinations with other commands

```
1
2
3
4
5

```

```
ps aux # View all process data in system
ps ax # View all processes not related to terminal
ps -lA # View all process data in system
ps axjf # View with some process tree status
ps aux| grep -ic python # View all processes related to python in system

```

### kill Command

>

Send signals to processes, commonly used signals as follows (can use code numbers instead of corresponding signals)

- 1: SIGHUP, start terminated process

- 2: SIGINT, equivalent to ctrl+c, interrupt program execution

- 9: SIGKILL, force interrupt process execution

- 15: SIGTERM, terminate process in normal way

- 17: SIGSTOP, equivalent to ctrl+z, pause process execution
```
1
2
3
4
5
6

```

```
kill -signal PID

# Terminate first background job in normal way, can use jobs command to view first job in background
kill -SIGTERM %1
# Restart process with ID PID, PID can be obtained using ps command with pipe and grep
kill -SIGHUP PID

```

### tar Command

>

Package files. By default does not compress, but if corresponding parameters are specified, it will call corresponding compression programs (such as gzip and bzip) for compression and decompression. Common parameters:

- -c: Create new package file

- -t: View contents of package file

- -x: Unpack or decompress function, can combine with -C (uppercase) to specify decompression directory. Note -c, -t, -x cannot appear in same command

- -j: Compress/decompress through bzip2 support

- -z: Compress/decompress through gzip support

- -v: Display files being processed during compression/decompression

- -f filename: filename is the file to be processed

- -C dir: Specify compression/decompression directory dir
```
1
2
3
4

```

```
# Usually we only need to use the following three commands:
Compress: tar -jcv -f filename file or directory name to be processed
Query: tar -jtv -f filename
Decompress: tar -jxv -f filename -C directory to decompress to

```

### cat Command

>

View text file content

```
1

```

```
cat test|less # View content in text file

```

### chgrp/chown Command

>

Change user group/change file owner

```
1

```

```
chgrp/chown users -R ./dir # Recursively modify user group of all files in dir directory and subdirectories to users

```

### chmod Command

>

Change file permissions
Common permission representations:

- -rw——- (600)      Only owner has read and write permissions.

- -rw-r–r– (644)      Only owner has read and write permissions; group users and other users only have read permissions.

- -rwx—— (700)     Only owner has read, write, and execute permissions.

- -rwxr-xr-x (755)    Owner has read, write, and execute permissions; group users and other users only have read and execute permissions.

- -rwx–x–x (711)    Owner has read, write, and execute permissions; group users and other users only have execute permissions.

- -rw-rw-rw- (666)   All users have read and write permissions.

- -rwxrwxrwx (777)  All users have read, write, and execute permissions.
```
1

```

```
chmod -R 777 file # Set file to maximum permissions

```

### View System Configuration
Open /proc directory to view system hardware configuration
```
1
2
3
4
5
6

```

```
// View cpu information
cat /proc/cpuinfo
// View memory
free -m
// View hard disk space
df -h

```

## Advanced Linux Commands

### curl Command

>

HTTP command line tool, supports file upload and download.

#### Basic Syntax:

```
1

```

```
curl [option] [url]

```

#### Common Usage Methods:

- Testing
```
1

```

```
curl http://www.linux.com // Test connectivity between server and website

```

- Download
```
1

```

```
curl -o filename http_url // Download file from url and save as filename

```

```
1

```

```
curl -O -u user_name:password ftp_url // Download file from ftp_url using user_name and password

```

- Upload file
```
1

```

```
curl -T upload_file -u user_name:password ftp_url // Upload file to url using user_name and password

```

- View public IP
```
1

```

```
curl ifconfig.me or curl cip.cc

```

### View Current GPU Usage

```
1

```

```
nvdia-smi

```

#### Run Program Using Specified GPU

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

```

```
CUDA_VISIBLE_DEVICES={{number of interface}} python {{file}}.py
 ```

### File Transfer Between Servers (scp command)
> Server actually means computer, the two can be used interchangeably; {{}} represents parameters you need to modify
#### Copy files from remote server to local server
```py
scp -r {{remote server name}}@{{remote server ip}}:{{remote server directory}} {{local server directory}}

```

#### Upload Files from Local Server to Remote Server

```
1

```

```
scp -r {{local server directory}} {{remote server name}}@{{remote server ip}}:{{remote server directory}}

```

#### Note: Common scp Command Parameters

- -r  Recursively copy entire directory.

- -P port  Note capital P, port specifies the port number for data transmission

#### Common scp Command Issues

>

Solution to WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED

```
1
2

```

```
vim ~/.ssh/known_hosts
Delete the rsa information related to the unrecognizable server.

```

### ssh Command

>

Remotely log in to Linux host

Most commonly used commands

```
1
2
3
4
5

```

```
ssh -p port user_name@hostname // Log in to host at specified port with specified user

servive sshd restart // Restart sshd service

vim /etc/ssh/sshd_config // Modify port number and other configurations in config file

```

### apt-get

#### Install Software Without sudo Permissions

```
1
2
3
4
5

```

```
apt-get source your_package
cd your_package
./configure --prefix=$HOME
make
make install

```

### User-related Commands

#### Under root Account:

- useradd user_name Create user user_name

- passwd user_name Set password for user user_name

- userdel user_name Delete user user_name

- su user_name Switch to (**switch user**) user user_name

>

References and citations

- [https://blog.csdn.net/ljianhui/article/details/11100625/](https://blog.csdn.net/ljianhui/article/details/11100625/)

- [https://www.cnblogs.com/ksguai/p/6090115.html](https://www.cnblogs.com/ksguai/p/6090115.html)

- [https://blog.csdn.net/kwu_ganymede/article/details/61199067](https://blog.csdn.net/kwu_ganymede/article/details/61199067)

- [http://blog.51cto.com/linuxme/375752](http://blog.51cto.com/linuxme/375752)

- [https://www.linuxidc.com/Linux/2017-06/144916.htm](https://www.linuxidc.com/Linux/2017-06/144916.htm)

- [https://zhidao.baidu.com/question/584292009.html](https://zhidao.baidu.com/question/584292009.html)

- [https://www.cnblogs.com/huangshiyu13/p/5923607.html](https://www.cnblogs.com/huangshiyu13/p/5923607.html)
