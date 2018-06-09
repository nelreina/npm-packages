# @nelreina/web-api

A simplified abstraction of the javascript fetch api

## Usage

#### Simple Methods

```javascript
import { get, post } from '@nelreina/web-api';

const data = await get('/some-path or http(s)://public/api');
```

or

#### Class

```javascript
import Api from '@nelreina/web-api';

const api = new Api('http(s)://some-host')
const data = await api.get('/some-path');
```

## TODO

- Add option to add custom headers in class
