## 파일 설명

---

> 파일이 많다..!
> <br> 아마 내가 <고수>가 되면 다 사용할 수 있겠지..?

<br>

```
1. __tests__
  - 테스트 할 때 사용
  - 단위 테스트 할 수 있음.

2. android, ios 폴더

 - 빌드할 때 만들어지는 폴더

3. .다음의 파일들
 - .buckconfig, .flowconfig, .watchmanconfig
 - react-native 구성 파일들

4. .buckconfig
 - https://buck.build/

5. .flowconfig
 - 프로젝트의 flow를 파악하고 ignore 할 수 있음
 - https://flow.org/en/docs/config/

6. .watchmanconfig
 - 내부 파일에 변경 사항이 있으면 자동적으로 감지하여 빌드를 새로 함
 - https://facebook.github.io/watchman/

7. metro.config.js
 - 프로젝트를 만들고 더 빠르게 하는 것으로 알고 있다..
 - https://github.com/facebook/metro
 - https://facebook.github.io/metro/

```

<br>
<br>

### react-native 시작하기

---

```js
import React from 'react';
import {View, Text} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 100}}>Hello React-Native</Text>
    </View>
  );
};

export default App;
```

> div를 안 씀..

<br>
<br>

### Components

---

components/Profile.js

```js
import React from 'react';
import {View, Text} from 'react-native';

const Profile = props => {
  // TODO: console로 props를 확인
  console.warn('props', props);
  return (
    <View>
      <Text style={{fontSize: 50}}>Profile Components</Text>
    </View>
  );
};

export default Profile;
```

<br>

App.js

```js
import React from 'react';
import {View, Text} from 'react-native';
import Profile from './Components/Profile';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 100}}>Hello React-Native</Text>
      <Profile data={'bread'} />
    </View>
  );
};

export default App;
```

> React와 동일하게 사용

<br>
<br>

### Button

---

```js
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const App = () => {
  const [data, setData] = useState(0);

  return (
    <View>
      <Text style={{fontSize: 100}}>{data}</Text>
      <Button onPress={() => setData(data + 1)} title="Update state"></Button>
    </View>
  );
};

export default App;
```

> 버튼 클릭 시 반응하는 함수는 onPress()로 사용
