# Myfair 프론트엔드 과제

Mafair 프론트엔드 사전 과제입니다.

## 설치 및 실행

```
yarn install
yarn dev
```

## 디렉토리 구조

```
├── app
│   ├── layout.recoil.tsx
│   ├── layout.tsx
│   └── page.tsx
└── components
    ├── common
    │   ├── Badge.tsx
    │   ├── Checkbox.tsx
    │   ├── DeleteButton.tsx
    │   └── TextField.tsx
    ├── definitions
    │   └── todo.ts
    ├── features
    │   └── todo
    │       ├── TodoCreator.tsx
    │       ├── TodoItem.tsx
    │       ├── TodoListCount.tsx
    │       ├── TodoListFilter.tsx
    │       └── index.tsx
    ├── hooks
    │   └── useKeyComposing.tsx
    ├── pages
    │   ├── TodoUserListPage.spec.tsx
    │   └── TodoUserListPage.tsx
    ├── recoil
    │   └── todo.ts
    └── utils
        └── todo.ts
```

- `components/`: React 컴포넌트가 위치하는 폴더입니다.
- `features/`: 애플리케이션의 주요 기능과 관련된 컴포넌트들을 모아 놓은 폴더입니다.
- `pages/`: 페이지 레벨 컴포넌트가 위치하는 폴더입니다.
- `common/`: 재사용 가능한 UI 컴포넌트가 위치하는 폴더입니다.
- `recoil/`: Recoil 상태 관리 관련 파일이 위치하는 폴더입니다.
- `definitions/`: 타입 및 상수가 정의되어 있는 폴더입니다.
- `utils/`: 재사용 가능한 함수들이 정의되어 있는 폴더입니다.
- `hooks/`: 커스텀 훅들을 모아 놓은 폴더입니다.

## 구현 내용

1. 컴포넌트 관리:
   - 컴포넌트는 **재사용 가능한 UI 컴포넌트**, **기능별 컴포넌트**, **페이지별 컴포넌트**로 구분하였습니다.
   - 각 폴더는 고유한 책임을 가지고 있으며, 이를 통해 애플리케이션의 **유지보수성과 확장성**을 높였습니다.
2. 상태 관리
   - **Recoil**을 사용하여 Todo 목록(`todoList`)과 필터 상태(`filter`)를 전역으로 관리합니다.
   - **selector**를 활용하여, 필터링된 Todo 목록과 개수를 동적으로 계산하고, 이를 각 컴포넌트에서 쉽게 사용할 수 있게 하였습니다.
3. 스타일링:
   - Emotion을 사용하여 CSS-in-JS 방식으로 스타일을 적용하였습니다.
   - 스타일은 각 컴포넌트와 함께 정의되어, **컴포넌트-스타일**이 하나의 단위로 결합되도록 하여 관리의 일관성과 효율성을 높였습니다
4. 요구사항 처리
   - **20글자 제한**: 사용자가 할 일을 20글자 이상 입력할 경우, **에러 메시지**가 출력됩니다. 또한, **엔터키**를 눌러도 항목이 저장되지 않도록 처리하였습니다.
   - **미완료 Todo 항목 제한**: 처리되지 않은 Todo 항목이 10개를 초과하면 **헬퍼 메시지**가 출력되고, 더 이상 새로운 Todo 항목을 추가할 수 없도록 제한하였습니다.
