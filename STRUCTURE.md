# 구조

### INDEX

- Redux store를 만들어주고 설정할 수 있다.(미들웨어 설정 및 프로젝트에서 store를 아무데서나 쓸 수 있도록 provider 설정할 수 있다.)
- APP container를 렌더링 해준다.

### APP

- 프로젝트 실행시 처음 보여지는 container
- 메모나 라벨을 클릭시 라우트를 만들어준다.

### Header Container

- 프로젝트의 헤더 부분을 담당하는 컨테이너
- 메모, 라벨 추가 버튼을 누르면 react-modal을 띄워준다.
- store와 연결된 컨테이너로 dispatch를 통해 메모를, 라벨을 추가 할 수 있다.

### LabelInfoTab Container

- 라벨의 정보를 볼 수 있는 컨테이너.
- store와 연결된 컨테이너로 dispatch를 통해 라벨 삭제, 라벨 지정 해제, 라벨 이름 수정, 라벨 지정을 할 수 있다.
- 전체 라벨: 라벨 지정. 그 외 라벨: 라벨 삭제, 라벨 지정 해제, 라벨 이름 수정.
- 해당 라벨에 속한 메모리스트를 보여준다.
- mapStateToProps로 리덕스 state를 props로 받아서 쓸 수 있다.

### LabelTab Container

- 라벨의 리스트를 볼 수 있는 컨테이너
- store와 연결된 컨테이너로 dispatch를 통해 라벨 목록, 메모를 가져온다.
- mapStateToProps로 리덕스 state를 props로 받아서 쓸 수 있다.

### MemoTab Container

- 메모의 정보를 볼 수 있고 메모를 수정할 수 있는 컨테이너
- store와 연결된 컨테이너로 dispatch를 통해 메모 가져옴, 메모 삭제, 메모 라벨 해제, 메모 수정을 할 수 있다.
- lodash의 debounce를 사용하여 메모를 작성,수정 후 1초후에 자동 저장한다.
- mapStateToProps로 리덕스 state를 props로 받아서 쓸 수 있다.
- 메모를 삭제후 전체 라벨로 redirect 시켜준다.
- getDerivedStateFromProps를 props가 달라질 때마다 메모를 찾은 후 setState해준다.

### Label Component

- 라벨을 보여주는 Component 라벨의 이름과 라벨이 가지고 있는 메모의 개수를 확인 할 수 있다.
- 현재 클릭한 라벨을 표시 해준다.

### LabelList Component

- 라벨의 리스트를 보여주는 Component
- 라벨의 갯수를 props로 받아 갯수만큼 Label Component를 렌더링 하여 그려준다.
- 해당 라벨을 클릭시 react-router-dom의 Link로 라우트를 이동시켜 준다.

### Memo Component

- 메모의 제목과 내용 생성일을 보여주는 Component
- 메모를 체크 / 체크 해제 할 수 있다.
- 메모의 생성일을 Moment로 format시켜준다.
- checkedMemos, unCheckedMemos로 스토어와 통신을 하지만 container로 보기엔 부적합하다고 판단하여 component로 했다.

### Memo Component

- 메모의 제목과 내용 생성일을 보여주는 Component
- 메모를 체크 / 체크 해제 할 수 있다.
- 메모의 생성일을 Moment로 format시켜준다.
- checkedMemos, unCheckedMemos로 스토어와 통신을 하지만 container로 보기엔 부적합하다고 판단하여 component로 했다.

### MemoList Component

- 메모의 리스트를 보여주는 Component
- 메모의 갯수를 props로 받아 갯수만큼 Memo Component를 렌더링 하여 그려준다


