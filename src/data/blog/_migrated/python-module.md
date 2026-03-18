---
author: Zhengyuan Zhu
pubDatetime: 2017-06-10T00:00:00Z
title: "Commonly Used Python Modules"
slug: python-module
featured: false
draft: false
tags:
  - python
description: ""
---

## python logging module

>

  Python introduced the logging module to record information that users want to view.

### Log Levels

When we execute the following code:

```
1
2
3
4
5
6
7

```

```
import logging  # Import logging module
# Print information to console
logging.debug(u"A")
logging.info(u"B")
logging.warning(u"C")
logging.error(u"D")
logging.critical(u"E")

```

The console output is:

```
1
2
3

```

```
WARNING:root:C
ERROR:root:D
CRITICAL:root:E

```

We will find that the console only outputs the last three logs. This is because **the default generated root logger's level is logging.WARNING, and levels lower than this are not output**. Therefore, at the top of the code, you need to **change the log level to NOTSET**:

```
1
2
3

```

```
import logging # Import logging module
logging.basciConfig(level=logging.NOTSET) # Set log level
logging.debug(u"If the log level is set to NOTSET, then debug and info level content can also be displayed on the console")

```

### Console Log Output

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
import logging  # Import logging module
logging.basicConfig(level=logging.DEBUG,format='%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s')  # logging.basicConfig function configures log output format and method
# Since the level is set to DEBUG in the basic log configuration, all the following print information will be displayed on the console
logging.info('this is a loggging info message')
logging.debug('this is a loggging debug message')
logging.warning('this is loggging a warning message')
logging.error('this is an loggging error message')
logging.critical('this is a loggging critical message')

```

![](https://raw.githubusercontent.com/824zzy/blogResources/master/picResources/python_model_1.png)

### Log File Output

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
23
24

```

```
import logging  # Import logging module
import os.path
import time
# Step 1: Create a logger
logger = logging.getLogger()
logger.setLevel(logging.INFO)  # Master log level switch
# Step 2: Create a handler for writing to log file
rq = time.strftime('%Y%m%d%H%M', time.localtime(time.time()))
log_path = os.path.dirname(os.getcwd()) + '/Logs/'
log_name = log_path + rq + '.log'
logfile = log_name
fh = logging.FileHandler(logfile, mode='w')
fh.setLevel(logging.DEBUG)  # Switch for log level output to file
# Step 3: Define handler's output format
formatter = logging.Formatter("%(asctime)s - %(filename)s[line:%(lineno)d] - %(levelname)s: %(message)s")
fh.setFormatter(formatter)
# Step 4: Add logger to handler
logger.addHandler(fh)
# Log
logger.debug('this is a logger debug message')
logger.info('this is a logger info message')
logger.warning('this is a logger warning message')
logger.error('this is a logger error message')
logger.critical('this is a logger critical message')

```

## python unittest testing framework

### unittest's Core Principles

- TestCase: Test case

- setUP: Setting up the environment before testing

- run: Execute test code

- tearDown: Restore the environment after testing

- TestSuite: A collection of multiple test cases

- TestLoader: Load TestCase into TestSuite

- TextTestRunner: Execute test cases and save results in TextTestResult

- test fixture: Setup and teardown of test case environment

### Basic Usage

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
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51

```

```
import unnittest

# Define four functions for unit testing
def add(a, b):
    return a+b
def minus(a, b):
    return a-b
def multi(a, b):
    return a*b
def divide(a, b):
    return a/b
# Time to show real (unittest) skills: main unit test body
class TestMathFunc(unittest.TestCase):
    """Test mathfuc.py"""

    def test_add(self):
        """Test method add(a, b)"""
        self.assertEqual(3, add(1, 2))
        self.assertNotEqual(3, add(2, 2))

    def test_minus(self):
        """Test method minus(a, b)"""
        self.assertEqual(1, minus(3, 2))

    def test_multi(self):
        """Test method multi(a, b)"""
        self.assertEqual(6, multi(2, 3))

    def test_divide(self):
        """Test method divide(a, b)"""
        self.assertEqual(2, divide(6, 3))
        self.assertEqual(2.5, divide(5, 2))

if __name__ == '__main__':
    unittest.main()
"""Execution result:
.F..
======================================================================
FAIL: test_divide (__main__.TestMathFunc)
Test method divide(a, b)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "D:/py/test_mathfunc.py", line 26, in test_divide
    self.assertEqual(2.5, divide(5, 2))
AssertionError: 2.5 != 2

----------------------------------------------------------------------
Ran 4 tests in 0.000s

FAILED (failures=1)
"""

```

- The first line shows the result identifier for each case execution: success is ., failure is F, error is E, skip is S. As you can see above, the test execution is not related to method order. test_divide is written as the 4th but executed as the 2nd.

- Each test method starts with test, otherwise unittest won't recognize it.

### Advanced: TestSuite (Organizing Tests)

>

Execute the program in the order added. Here we only need to improve the main function from the above text

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
if __name__ == '__main__':
    suite = unittest.TestSuite()

    tests = [TestMathFunc("test_add"), TestMathFunc("test_minus"), TestMathFunc("test_divide")]
    suite.addTests(tests)

    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite)

```

### Advanced: Preparing Test Environment

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
class TestMathFunc(unittest.TestCase):
    """Test mathfuc.py"""

    def setUp(self):
        print "do something before test.Prepare environment."

    def tearDown(self):
        print "do something after test.Clean up."

    @classmethod
    def setUpClass(cls):
        print "This setUpClass() method only called once."

    @classmethod
    def tearDownClass(cls):
        print "This tearDownClass() method only called once too."

```

- These two methods execute once before and after each test method. `setUp` is used to prepare the environment for testing, and `tearDown` is used to clean up the environment for subsequent tests.

- If you want to prepare the environment once before all cases execute and clean up the environment once after all cases finish, we can use `setUpClass()` and `tearDownClass()`

## os module and sys module

### Distinguishing os module from sys module

>

os module: Provides a convenient way to use operating system functions

sys module: Provides access to variables used or maintained by the interpreter and functions used to interact with the interpreter

### Commonly Used os Module Methods

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

```

```
os.remove() Delete file
os.rename() Rename file
os.walk() Generate all file names under directory tree
os.chdir() Change directory
os.mkdir/makedirs Create directory/multi-layer directory
os.rmdir/removedirs Delete directory/multi-layer directory
os.listdir() List files in specified directory
os.getcwd() Get current working directory
os.chmod() Change directory permissions
os.path.basename() Remove directory path, return filename
os.path.dirname() Remove filename, return directory path
os.path.join() Combine separated parts into a path name
os.path.split() Return (dirname(), basename()) tuple
os.path.splitext() Return (filename, extension) tuple
os.path.getatime\ctime\mtime Return last access, creation, modification time respectively
os.path.getsize() Return file size
os.path.exists() Whether exists
os.path.isabs() Whether absolute path
os.path.isdir() Whether directory
os.path.isfile() Whether file

```

## Commonly Used sys Module Methods:

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

```

```
sys.argv           Command line argument list, first element is program path itself
sys.modules.keys() Return list of all imported modules
sys.exc_info()     Get currently handling exception class, exc_type, exc_value, exc_traceback details
sys.exit(n)        Exit program, normal exit is exit(0)
sys.hexversion     Get Python interpreter version value in hexadecimal format, e.g.: 0x020403F0
sys.version        Get Python interpreter version information
sys.maxint         Maximum Int value
sys.maxunicode     Maximum Unicode value
sys.modules        Return system imported modules field, key is module name, value is module
sys.path           Return module search path, initialized using PYTHONPATH environment variable value
sys.platform       Return operating system platform name
sys.stdout         Standard output
sys.stdin          Standard input
sys.stderr         Error output
sys.exc_clear()    Used to clear current or recent error information appearing in current thread
sys.exec_prefix    Return platform-independent python file installation location
sys.byteorder      Indicator of local byte order, value is 'big' for big-endian platforms, 'little' for little-endian platforms
sys.copyright      Record python copyright related things
sys.api_version    C API version of interpreter
sys.version_info

```

## Time-related Modules

### Get Current Time Using datetime Module

```
1
2

```

```
import datetime
nowTime = datatime.datatime.now().strftime('%Y-%m-%d %H:%M:%S') # Now

```

## retry Module

Usage scenario is typically when network conditions are unstable, to prevent timeout exceptions

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

```

```
import random
from retrying import retry

@retry
def do_something_unreliable():
    if random.randint(0, 10) > 1:
        raise IOError("Broken sauce, everything is hosed!!!111one")
    else:
        return "Awesome sauce!"

print do_something_unreliable()

```

The above is the official documentation code: After adding @retry decorator to a function, as long as there is an exception, the function will keep retrying until there is a return value.
Below are some commonly passed parameters to the decorator

```
1
2
3
4

```

```
# Try at most 7 times, this is most commonly used!
@retry(stop_max_attempt_number=7)
# Wait at most 10 seconds
@retry(stop_max_delay=10000)

```

## timeit

Specifically used to test code running time, very convenient to run:
    Instantiating the `Timer` class requires two parameters. The first parameter is the function you need to calculate running time for, as a string type; the second parameter is the import statement to build the environment, also as a string type.

### Example 1

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

```

```
# Function to calculate running time
def test1():
    n = 0
    for i in range(101):
        n += i
    return n
from timeit import Timer
# Instantiate
t = Timer("test1()", "from __main__ import test1")
print t.timeit()
print t.repeat(3, 10000) # Execute test three times

```

## glob

glob is Python's built-in file operation module. You can use it to find files that meet your needs. It supports **wildcard operations**: `` `?` `[]` these three wildcards. `` represents 0 or more characters, `?` represents one character, `[]` matches characters in specified range, such as [0-9] matches numbers. Main methods are as follows.

### glob method: Returns list of all matching file paths

```
1
2

```

```
glob.glob(r'C:*.txt') # Get all txt files in C drive
glog.glob(r'../*.py') # Get python files in relative path

```

## PIL

PIL: Python Imaging Library, already the de facto standard image processing library for Python platform. PIL is very powerful but the API is very simple and easy to use.

### Peculiar Installation Method

`pip install pillow`

### Basic Operations

```
1
2
3
4
5

```

```
from PIL import Image
im = Image.open('path/to/Image.jpg') # Open image file
w, h = im.size # Get image dimensions
im.thumbnail((w//2, h//2)) # Scale image to 50%
im.save('path/to/Image.jpg', 'jpeg') # Save image format as jpeg

```

## matplotlib

### Using matplotlib to Draw on Remote Server

Add **before** `import matplotlib.pyplot`:

```
1
2

```

```
import matplotlib as mpl
mpl.use('Agg')

```

Add **after** `plt.draw`:

```
1

```

```
plt.savefig("/path/to/pic.jpg")

```

## setuptool

### basic usage

```
1
2
3
4
5
6

```

```
from setuptools import setup
setup(
    name='MyApp',         # Application name
    version='1.0',        # Version number
    packages=['myapp']    # Python packages included in installation package
)

```

## pydot & graphviz

Two packages for keras visualization module. Can visualize neural network structure

## easydict

>

References and citations

- logging:[https://www.cnblogs.com/CJOKER/p/8295272.html](https://www.cnblogs.com/CJOKER/p/8295272.html)

- unittest:[https://blog.csdn.net/huilan_same/article/details/52944782#t4](https://blog.csdn.net/huilan_same/article/details/52944782#t4)

- [https://my.oschina.net/liuyuantao/blog/755907](https://my.oschina.net/liuyuantao/blog/755907)

- [https://blog.csdn.net/u010472607/article/details/76857493/](https://blog.csdn.net/u010472607/article/details/76857493/)

- [https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/00140767171357714f87a053a824ffd811d98a83b58ec13000](https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/00140767171357714f87a053a824ffd811d98a83b58ec13000)

- [https://blog.csdn.net/i_is_a_energy_man/article/details/77833040](https://blog.csdn.net/i_is_a_energy_man/article/details/77833040)

- [https://blog.csdn.net/zzytmxk/article/details/53402257](https://blog.csdn.net/zzytmxk/article/details/53402257)

- [http://python.jobbole.com/87240/](http://python.jobbole.com/87240/)
