---
author: Zhengyuan Zhu
pubDatetime: 2018-02-14T00:00:00Z
title: "Tornado Learning Summary"
slug: tornado-usage
featured: false
draft: false
tags:
  - notes
description: ""
---

## Overview

It is a non-blocking server with excellent performance. Tornado can handle thousands of connections per second, making Tornado an ideal framework for real-time web services, specifically solving the C10K problem.

## Modules

### Main Modules

- tornado.web: Contains most important features

- tornado.escape: XHTML, JSON, URL encoding and decoding methods

- database: Simple wrapper for Mysql

- template: Web template system

- httpclient: Non-blocking HTTP client designed to work with web and httpserver

- auth: Third-party authentication implementation (including Google OpenID/OAuth, Facebook Platform, Yahoo BBAuth, FriendFeed OpenID/OAuth, Twitter OAuth)

- local: Support for localization and translation

- options: Command line and configuration file parser optimized for server environments

### Lower-level Modules:

- httpserver: Very simple HTTP server implementation serving the web module

- iostream: Simple wrapper for non-blocking sockets to facilitate common read/write operations

- ioloop: Core I/O loop

## Learning Tornado's Basic Functions Through Code

### helloTornado Demonstrates Tornado's Most Frequently Used Features

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
import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        greeting = self.get_argument('greeting', 'Hello')
        self.write(greeting + ', friendly user!')

if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = tornado.web.Application(handlers=[(r"/", IndexHandler)])
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()

$ curl http://localhost:8000/
Hello, friendly user!
$ curl http://localhost:8000/?greeting=Salutations
Salutations, friendly user!

```

### Besides the get Method, Let's Try the post Method!

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

```

```
import textwrap

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options
define("port", default=8000, help="run on the given port", type=int)

class ReverseHandler(tornado.web.RequestHandler):
    def get(self, input):
        self.write(input[::-1])

class WrapHandler(tornado.web.RequestHandler):
    def post(self):
        text = self.get_argument('text')
        width = self.get_argument('width', 40)
        self.write(textwrap.fill(text, int(width)))

if __name__ == "__main__":
    tornado.options.parse_command_line()
    app = tornado.web.Application(
        handlers=[
            (r"/reverse/(\w+)", ReverseHandler),
            (r"/wrap", WrapHandler)
        ]
    )
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    tornado.ioloop.IOLoop.instance().start()

$ http://localhost:8000/reverse/slipup
pupils
$ http://localhost:8000/wrap -d text=Lorem+ipsum+dolor+sit+amet,+consectetuer+adipiscing+elit.
Lorem ipsum dolor sit amet, consectetuer adipiscing elit.

```

#### Modify Username Code Example:

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
# matched with (r"/widget/(\d+)", WidgetHandler)
# widget: small mechanism, small component
class WidgetHandler(tornado.web.RequestHandler):
    def get(self, widget_id):
        widget = retrieve_from_db(widget_id)
        self.write(widget.serialize())

    def post(self, widget_id):
        widget = retrieve_from_db(widget_id)
        widget['foo'] = self.get_argument('foo')
        save_to_db(widget)

```

#### HTTP Status Codes

- 404 NOT Found: Tornado returns a 404 (Not Found) response code when the HTTP request path cannot match any pattern corresponding to a RequestHandler class.

- 400 Bad Request: If you call a get_argument function without a default value and don't find an argument with the given name, Tornado automatically returns a 400 (Bad Request) response code.

- 405 Method Not Allowed: If an incoming request uses an HTTP method not defined in the RequestHandler (for example, a POST request but the handler only has a get method defined), Tornado returns a 405 (Method Not Allowed) response code.

- 500 Internal Server Error: When your program encounters any error that doesn't let it exit, Tornado returns a 500 (Internal Server Error) response code. Any uncaught exception in your code will also result in a 500 response code.

- 200 OK: If the response is successful and no other response code is set, Tornado defaults to returning a 200 (OK) response code.
