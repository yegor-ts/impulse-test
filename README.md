# API description

## Get all install entries

### Request

`GET /installs/`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Get list of installs by application name

### Request

`GET /installs/appName/:appName`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {"id":1, "idfv":"mock idfv", "app_name":"Impulse", "city":"Kyiv", "device_model":"Iphone7", "install_time":"2022-05-05", "date":"2022-05-05", "att":"test_att", "is_lat": true, "updated_at":"2004-10-19 10:23:54"}

## Get list of installs by city

### Request

`GET /installs/city/:city`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {"id":1, "idfv":"mock idfv", "app_name":"Impulse", "city":"Kyiv", "device_model":"Iphone7", "install_time":"2022-05-05", "date":"2022-05-05", "att":"test_att", "is_lat": true, "updated_at":"2004-10-19 10:23:54"}

## Get list of installs by device model

### Request

`GET /installs/device/:device`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    {"id":1, "idfv":"mock idfv", "app_name":"Impulse", "city":"Kyiv", "device_model":"Iphone7", "install_time":"2022-05-05", "date":"2022-05-05", "att":"test_att", "is_lat": true, "updated_at":"2004-10-19 10:23:54"}

## Get list of latest installs

### Request

`GET /installs/latest/`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Get list of oldest installs

### Request

`GET /installs/oldest`

### Response

    HTTP/1.1 200 OK
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 2

    []

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
