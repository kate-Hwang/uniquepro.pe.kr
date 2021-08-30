# 황지영

### 개인정보
- [Github](https://github.com/kate-Hwang)
- [ghkd6385@naver.com](mailto:wnstkdyu@gmail.com)

### 보유 기술
- 언어
  - **JavaScript** 
  - **J-Query**
  - **HTML5** , **CSS**
- 기타
  - **Github**
  - **design tools(photoshop,illustration, act)**
  - **Zeplin** , **Adobe XD**

___

### 포폴 주요 프로젝트

## [Project STUCO - 팀 프로젝트](https://github.com/kate-Hwang/Project-Stuco)
공부하는 교육생과 강사들의 수업을 도와 함께 한다는 취지의 의미를 두고 있습니다. 

#### [ → Project STUCO 레파지토리 보러가기](https://github.com/kate-Hwang/Project-Stuco)

<img src="images/Picka_main.png" width="140" hspace="2">


## [Sindoh - 신도리코 회사 홍보 웹사이트 리뉴얼](https://github.com/kate-Hwang/uniquepro.pe.kr/tree/main/uniquepro.pe.kr/html/sindoh.com)

기존의 신도리코 회사의 홈페이지를 리뉴얼 진행하여 구현하였습니다.
[→신도리코 기존 회사사이트 보러가기](https://www.sindoh.com/index.do?uk=ko)

### 사용한 기술
- 개발 툴 :`HTML5`, `CSS`, `J-Query`, `JavaScript`
- 디자인툴 : `Adobe XD`, `Photoshop` acts.

### 수행 역할
- `J-Qeury Plugin`과 `CSS Animation`를 통한 동적인 UI 구현.
- `UITableView` 사진 이미지 비동기적으로 받아와 나타내기.
- `CLGeocoder`를 통한 사진의 위치 표시.

### Trouble Shooting
-  비동기적 요청으로 인한 재사용 이슈

    - 문제: 빠르게 스크롤하는 경우나 뷰 전환 시 메인 뷰의 사진 순서가 뒤바뀌는 경우가 발생
    - 연구: 셀이 재사용되는데 `cellForRowAt`에서 이미지를 `fetch`한 동작이 비동기적으로 동작하기 때문에 이전에 요청했던 사진이 표시되는 것. 팀원과 상의 후 명확한 해결책이 떠오르지 않아 튜터님께 질문.
    - 해결: 이미지 `fetch`시 request의 `identifier`를 cell에 보관 후 이전 request를 `cancel`시키는 방안을 적용.

- 메인 화면 이미지 표시

  - 문제: 메인 화면에서 테이블 뷰의 각 셀이 총 네 개의 이미지를 보여주기 때문에 이 이미지들을 각각 받아와 보여주는 경우 `cellForRowAt`에서 처리하기가 애매.
  - 연구: 팀원들과 상의 후 해결.
  - 해결: 그룹의 `PHAsset`의 배열에서 받아올 때 `UIImage`의 배열을 만들어 넣어준 뒤 `completion handler`를 통해 이미지들을 다 받아왔을 경우에 이미지를 표시.

#### 스크린샷

<img src="images/Picka_main.png" width="140" hspace="2"> <img src="images/Picka_detail.png" width="140" hspace="2"> <img src="images/Picka_temp.png" width="140" hspace="2">

## [After effect Korea - 영상커뮤니티 웹사이트](https://github.com/kate-Hwang/uniquepro.pe.kr/tree/main/uniquepro.pe.kr/html/AfterEffectKorea.project/After-effect)

SNS영상커뮤니티를 상세페이지 컨셉으로 퍼블리싱하여 UI 구현하였습니다.

### 사용한 기술
- 개발 툴 :`HTML5`, `CSS`, `J-Query`, `JavaScript`
- 디자인툴 : `Adobe XD`, `Photoshop` acts.

### 수행 역할
- `J-Qeury Plugin`과 `CSS Animation`를 통한 UI 구현.
  - 공통적으로 쓰이는 `UITableViewCell`들을 `nib`파일로 묶어 재사용성 증대.
- 동영상 전체화면으로 전환시 `UIModalPresentationStyle`의 `overFullScreen`을 적용해 아래의 뷰가 자연스럽게 흐려지도록 구현.
- 좋아요 갯수를 표시하는 화면에서 느리게 받아오는 문제를 `UITableViewDelegate` 메소드인 `willDisplay` 안에서 쿼리를 미리 날려 게시물 별 좋아요를 미리 받게끔 수정
- 온/오프라인, 로그인/둘러보기 관계없이 `BlockUsers` 싱글턴 객체로 `UserDefaults`를 이용해 로컬에 저장했다가 서버에 업로드 시 서버와 싱크를 맞춰줌.
- 둘러보기를 구현하여 로그인을 하지 않아도 편집을 할 수 있게끔 구현
- 로그인 화면 구성 시 `UIStackView`에 `View`를 넣었다 빼는 애니메이션 적용
- `AppAuth` 라이브러리를 사용해 구글로 `OAuth` 적용 후 YouTube 업로드 기능 추가
- 로컬라이징
- 전체적으로 `Auto Layout` 적용

#### 스크린샷

<img src="images/Vlogr_select.jpg" width="150" hspace="2"> <img src="images/Vlogr_edit.jpg" width="150" hspace="2">


