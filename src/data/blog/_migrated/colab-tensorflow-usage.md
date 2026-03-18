---
author: Zhengyuan Zhu
pubDatetime: 2018-08-23T00:00:00Z
title: "Deep Learning Module Documentation Memo"
slug: colab-tensorflow-usage
featured: false
draft: false
tags:
  - notes
description: ""
---

## Colab study notes

### Install commonly used packages

Although Colab has already installed some packages such as Tensorflow Matplotlib .etc, there are lots of commonly used packages:

- Keras:`pip install keras`

- OpenCV:`!apt-get -qq install -y libsm6 libxext6 && pip install -q -U opencv-python`

- Pytorch:`!pip install -q http://download.pytorch.org/whl/cu75/torch-0.2.0.post3-cp27-cp27mu-manylinux1_x86_64.whl torchvision`

- tqdm:`!pip install tqdm`
### Authorized to log in

```
# Install PyDrive operation library, this operation only needs to be executed once per notebook
!pip install -U -q PyDrive
from pydrive.auth import GoogleAuth
from pydrive.drive import GoogleDrive
from google.colab import auth
from oauth2client.client import GoogleCredentials

# Authorize login, authentication only on the first time
auth.authenticate_user()
gauth = GoogleAuth()
gauth.credentials = GoogleCredentials.get_application_default()
drive = GoogleDrive(gauth)
```

### File IO

#### Read file from Google Drive

```
# Get the file by id
downloaded = drive.CreateFile({'id':'yourfileID'}) # replace the id with id of file you want to access
# Download file to colab
downloaded.GetContentFile('yourfileName')
# Read file as panda dataframe
import pandas as pd
xyz = pd.read_csv('yourfileName')
```

#### Write file to Google Drive

```
# Create a Content file as Cache
xyz.to_csv('over.csv')
# Create & upload a text file.
uploaded = drive.CreateFile({'title': 'OK.csv'})
# You will have a file named 'OK.csv' which has content of 'over.csv'
uploaded.SetContentFile('over.csv')
uploaded.Upload()
# checkout your upload file's ID
print('Uploaded file with ID {}'.format(uploaded.get('id')))
```

## Tensorflow commonly used

### tf

#### cast

```
# cast a tensor[x] to a new type[dtype]
tf.cast(
    x,
    dtype,
    name=None
)
```

#### expand_dims

Inserts a dimension of 1 into a tensor's shape.

```
tf.expand_dims(
    input,
    axis=None
)
# 't' is a tensor of shape [2]
tf.shape(tf.expand_dims(t, 0))  # [1, 2]
tf.shape(tf.expand_dims(t, 1))  # [2, 1]
tf.shape(tf.expand_dims(t, -1))  # [2, 1]

# 't2' is a tensor of shape [2, 3, 5]
tf.shape(tf.expand_dims(t2, 0))  # [1, 2, 3, 5]
tf.shape(tf.expand_dims(t2, 2))  # [2, 3, 1, 5]
tf.shape(tf.expand_dims(t2, 3))  # [2, 3, 5, 1]
```

#### read_file

```
tf.read_file(
    filename,
    name=None
)
```

#### device

- manual mode

- `with tf.device('/cpu:0')`: cpu

- `with tf.device('/gpu:0')`or`with tf.device('/device:GPU:0')`

- GPU config

- `import os`

- `os.environ['CUDA_VISIBLE_DEVICES']='0, 1'`

```
tf.device(device_name_or_function)

with tf.device('/cpu:0'):
with tf.device('/gpu:0'):
```

#### random_normal

Outputs random values from a normal distribution.

```
tf.random_normal(
    shape,
    mean=0.0,
    stddev=1.0,
    dtype=tf.float32,
    seed=None,
    name=None
)
tf.random_normal((100, 100, 100, 3))
```

#### ConfigProto

allowing GPU memory growth by the process.

```
config = tf.ConfigProto()
config.gpu_options.allow_growth = True
sess = tf.Session(config=config)
```

#### reduce_sum/reduce_mean

```
tf.reduce_sum(
    input_tensor,
    axis=None,
    keepdims=None,
    name=None,
    reduction_indices=None,
    keep_dims=None
)
```

Returns: The reduced tensor

### tf.app

Generic entry point

#### `flag` module

process command line parameters. Just like `argparse`

#### `run(...)`

```
# run program with an optional 'main' function and 'argv' list
tf.app.run(
    main=None,
    argv=None
)
```

### tf.contrib

#### eager

- Saver: A tf.train.Saver adapter for use when eager execution is enabled.

### tf.data

#### Dataset

```
# usage example
tf.data.Dataset.from_tensor_slices(encode_train).map(load_image).batch(16)
```

- from_tensor_slices(tensors): Creates a Dataset whose elements are slices of the given tensors. Returns: A dataset

- map(map_func,num_parallel_calls=None)

- batch(batch_size,drop_remainder=False)

- prefetch(buffersize): Creates a Dataset that prefetches elements from this dataset.

### tf.image

#### decode_jpeg

```
tf.image.decode_jpeg(
    contents,
    channels=0, # 3: output an RGB image.
    ratio=1,
    fancy_upscaling=True,
    try_recover_truncated=False,
    acceptable_fraction=1,
    dct_method='',
    name=None
)
```

#### resize_images

### tf.layers

#### conv2d

```
tf.layers.conv2d(
    inputs,
    filters,
    kernel_size,
    strides=(1, 1),
    padding='valid',
    data_format='channels_last',
    dilation_rate=(1, 1),
    activation=None,
    use_bias=True,
    kernel_initializer=None,
    bias_initializer=tf.zeros_initializer(),
    kernel_regularizer=None,
    bias_regularizer=None,
    activity_regularizer=None,
    kernel_constraint=None,
    bias_constraint=None,
    trainable=True,
    name=None,
    reuse=None
)

random_image_gpu = tf.random_normal((100, 100, 100, 3))
net_gpu = tf.layers.conv2d(random_image_gpu, 32, 7)
```

Returns: Output tensor.

### tf.test

- gpu_device_name(): Check out GPU whether can be found.

### tf.train

- Saver

## scikit-learn(sklearn)

### utils

- shuffle(*array):Shuffle arrays or sparse matrices in a consistent way
### model_selection

- train_test_split(*array): Split arrays or matrices into random train and test subsets

- Parameters

- arrays_data

- arrays_label

- test_size

- random_state

## Keras

A high-API to build and train deep learning models.

### applications

#### inception_v3

- InceptionV3(...): Instantiates the Inception v3 architecture.
```
tf.keras.applications.InceptionV3(
include_top=True, # whether to include the fully-connected layer at the top of the network.
weights='imagenet',
input_tensor=None,
input_shape=None,
pooling=None,
classes=1000
)
```

- decode_predictions(...): Decodes the prediction of an ImageNet model.

- preprocess_input(...): Preprocesses a numpy array encoding a batch of images.

### backend

### layers

- Dense: regular densely-connected NN layer

- Arguments:

- units:

- input_shape:

- GRU/CuDNNGRU

- Arguments:

- units: Positive integer, dimensionality of the output space.

- return_sequences: Boolean. Whether to return the last output in the output sequence, or the full sequence.

- return_state: Boolean. Whether to return the last state in addition to the output.

- recurrent_activation: Default is `hard sigmoid`.`sigmoid` is available.

- hard sigmoid: a combination of sigmoid and relu

- recurrent_initializer: Default is `orthogonal`.

### preprocessing

#### image

#### sequence

- pad_sequences:

- Arguments:

- sequences:  List of lists, where each element is a sequence.

- padding: String, 'pre' or 'post': pad either before or after each sequence.
#### text

- hashing_trick

- one_hot

- text_to_word_sequence

- Tokenizer(vectorize a text corpus)

- Arguments:

- num_words: the maximum number of words to keep, based on **word frequency**.

- oov_token: if given, it will be added to word_index and used to replace out-of-vocabulary words during text_to_sequence calls

- filters: a string where each element is a character that will be filtered from the texts.

- Methods:

- fit_on_texts: Updates internal vocabulary based on a list of texts.

- texts_to_sequences: Transforms each text in texts in a sequence of integers.

### utils

- get_file: Downloads a file from a URL if it not already in the cache.

> Reference:

- [https://segmentfault.com/a/1190000012731724](https://segmentfault.com/a/1190000012731724)

- [https://tensorflow.google.cn/api_docs/](https://tensorflow.google.cn/api_docs/)

- [https://www.jianshu.com/p/d7283bc427b1](https://www.jianshu.com/p/d7283bc427b1)

- [http://scikit-learn.org/stable/modules](http://scikit-learn.org/stable/modules)
