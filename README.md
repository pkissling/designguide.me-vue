# [designguide.me](https://designguide.me)-vue
[![Build Status](https://travis-ci.org/pkissling/designguide.me-vue.svg?branch=master)](https://travis-ci.org/pkissling/designguide.me-vue)

# Overview
[Vue.js](https://vuejs.org/) project contaning the frontend implementation of [designguide.me] (https://designguide.me) using [Bulma](https://bulma.io/). The website is served via [S3](https://aws.amazon.com/s3/). Ther required infrastructure bootstrapping is done in [designguide.me-terraform](https://github.com/pkissling/designguide.me-terraform).

# Prerequisites

## AWS access
To deploy the bundled website to S3, AWS credentials with sufficient permission must be [setup](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html).
The corresponding IAM user / policy used for this project is managed in [designguide.me-terraform](https://github.com/pkissling/designguide.me-terraform/blob/master/iam/serverless.tf).

# Installation

## Local development

```
$ npm install
$ npm run serve
```

## Deployment
Bundels the application, uploads to S3, invalidates Cloudfront distribution.

```
$ make
```