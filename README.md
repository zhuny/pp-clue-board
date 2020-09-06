# Clue Board
보드게임 clue의 질문 기록 판
* 첫번째 Popup Project
* clue.zhuny.co.kr

# Scope
* Page 1
    * 첫 화면에서 참가 인원을 입력합니다.
    * 나 자신을 포함해서 순서대로 인원을 입력해야 합니다.
* Page 2
    * 각 소품 별로 누가 가지고 있을 지에 대한 정보를 표시하는 페이지입니다.
    * 가로축은 참가 인원, 세로축은 범인, 장소, 흉기를 나타냅니다.
    * 각 셀에는 해당 사람에 대한 추측이 적혀 있습니다.
        * 초록 : 추론이나 실제로 카드를 확인하여 해당 카드를 해당 사람이 가지고 있음을 표시합니다.
        * 노랑 : 해당 카드를 가지고 있을 경우의 수가 있을 때 표시합니다.
        * 회색 : 가지고 있을 가능성이 없는 경우 표시를 합니다.
        * 흰색 : Default - 정보가 없는 경우
* Page 3
    * 각 질문 별로 기록해 두는 장소입니다.
    * 가로축은 범인, 장소, 흉기, 질문자, 답변자를 나타냅니다.
    * 세로축은 순번입니다.
    * 덧셈 버튼이 있어서 그 버튼을 누르면 세로로 하나가 더 추가됩니다.
* 그 외의 사항
    * 모든 페이지는 언제든지 움직일 수 있습니다.
    * 새로고침을 했을 때, 이전 기록이 남아 있어서 예전 기록을 사용할 것인지 묻습니다.

# Process
* Hour One
    * 기본적인 페이지 템플릿을 만듭니다.
    * Page 1를 구현합니다.
    * 범인, 장소, 흉기 목록을 찾아서 넣습니다.
    * Page 2의 가로축과 세로축 셀을 그립니다.
* Hour Two
    * 각 장소마다 가로, 세로축에 정보를 입력합니다.
    * Page 3에서 기본 테이블만 그립니다. 덧셈 버튼을 누르면 추가가 됩니다.
    * 각 셀마다 범인, 장소, 흉기를 선택할 수 있습니다.
* Hour Three
    * 새로고침을 했을 때, 예전 기록을 불러올 수 있도록 설정합니다.
    * CSS 달기

# After
* 첫번째 시간은 구성을 좀 빡빡하게 해서 10분 정도의 분량을 두번째 시간에 했다.
* 두번째 시간은 반대로 10분 정도 빠르게 끝내서 쉬는 시간을 살짝 조정하였다.
* 세번째 시간은 CSS를 하는 것을 이후에 추가했다.
    * 당연히 CSS는 아웃풋 대비 시간을 오래 잡아먹는다.
    * 어그로 안끌리는 연습을 해야겠다.

# Development
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
