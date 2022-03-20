## React-native

### Timeline

> props

<br>
<br>

### SET-UP

---

1. Java 설치

> https://www.oracle.com/java/technologies/downloads/

2. Android Studio 설치

> https://developer.android.com/studio/install?hl=ko

3. Android emulator 설치

```
AVD manager -> Create device
```

4. Node 설치

> https://nodejs.org/ko/download/\

<br>
<br>

### Start

---

1. npx react-native init <앱이름>

2. cd <앱이름>

3. npx react-native run-android

> 왜 안드로이드예요?
> <br> 왜 ios 안해요?
> <br>제가 mac이 없어용~ (～￣ ▽ ￣)～

<br>
<br>

### 에뮬레이터가 실행되지 않을 경우

---

1. 환경변수 설정

<br>

#### path 편집

```
C:\Users\Username\AppData\Local\Android\Sdk\platform-tools 추가
```

#### 시스템 변수에 ANRROID_HOME 추가

```
변수이름: ANDROID_HOME
변수값: C:\Users\Username\AppData\Local\Android\Sdk
```

2. Android SDK 설정

```
Android SDK Platform 28

Intel x86 Atom System Image

Google APIs Intel x86 Atom System Image

Google APIs Intel x86 Atom_64 System Image
```

> https://reactnative.dev/docs/environment-setup
