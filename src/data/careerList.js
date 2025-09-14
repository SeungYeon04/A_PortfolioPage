/* 규칙: React, C#, Json, Java, Unity, AndroidStudio, Kotlin, Docker, Figma, HTML, CSS, Js, Firebace 
  App, Game, Web, VR XR, 2D, 3D
*/

const careerList = [
    {
      title: "공부정리 블로그",
      subtitle: "개인 프로젝트",
      date: "2024. ~ 2024. (사용중)",
      comment: "대학을 다니며 만든 공부 정리 사이트. 해시함수를 사용하여 markdown file을 렌더링하며 github.io 전용 블로그입니다.",
      img: "/Image/studyBlog.png",
      Stack: ["React", "UIUX"],
      Type: "Web",
      url: "https://github.com/SeungYeon04/A_Study"
    },
    {
      title: "터치 Open RPG (코빌)",
      subtitle: "개인 프로젝트",
      date: "2025. ~ 개발중",
      comment: "모바일 터치형 Open RPG 게임, 낚시 수집 사냥 꾸미기 등 여러 콘텐츠가 존재. 최종목표는 P2P 등으로 멀티구현 등 작업중입니다.",
      img: "/Image/birdGame.jpg",
      Type: "Game",
      Stack: ["Unity", "C#", "Json", "GoogleCloud"],
    },
    {
      title: "1to1 가든 커플채팅앱",
      subtitle: "팀프로젝트(팀장-개발4/발표1)",
      date: "2025. ~ 개발중",
      comment: "전주비전대학교 졸업작품으로, 1대1로 채팅 연결해서 함께 화분을 키우는 게임요소 + AI로 감정분석과 상담기능이 들어갈 앱입니다.",
      img: "/Image/temp.jpg",
      Type: "App",
      Stack: ["AndroidStudio", "Java", ".xml", "Notion", "Figma"],
    },
    {
      title: "간단 에셋스토어",
      subtitle: "개인프로젝트",
      date: "2025. ~ 개발중",
      comment: "전주비전대학교 JSP수업 기말고사로써 간단로그인, 장바구니 기능 + Itch.io링크 구현까지 하여 zip으로 무료호스팅하여 배포할 예정인 간단 프로젝트입니다.",
      img: "/Image/temp.jpg",
      Type: "Web",
      Stack: ["Eclipse", "JSP", "Java"],
    },
     {
      title: "Java DB 관리시스템",
      subtitle: "개인프로젝트",
      date: "시작예정",
      comment: "전주비전대학교 Java수업 기말고사로써 서버 필요할텐데 어떻게해야 배포 자동화 가능하게 할지 고민입니다. Itch.io써야하나 취지상 구조상 스팀 같은 회사도 어려울 거고",
      img: "/Image/temp.jpg",
      Type: "System?",
      Stack: ["AndroidStudio", "Java", ".xml", "Notion", "Figma"],
    },
    {
      title: "끄아 웹게임",
      subtitle: "팀프로젝트 (프론트2/백1)",
      date: "2025. ~ 2025. (보완중)",
      comment: "끝말잇기 아케이드 웹게임이다. 대학교를 다니며 UI디자인, InGame 로직과 게임페이지 웹소켓 틀 등을 담당하였습니다.",
      img: "/Image/kkuaWeb.png",
      Type: ["Web", "Game"],
      Stack: ["React", "Docker", "Figma"],
      url: "https://github.com/djgnfj-svg/kkua"
    },
    {
      title: "토끼 일기 & 메모 사이트",
      subtitle: "개인프로젝트",
      date: "2024. ~ 2024.",
      comment: "파이어베이스를 이용해 로그인과 글작성 구현. 디자인 비율 등 보완이 필요한 상태입니다.",
      img: "/Image/RabbitBlog.png",
      Type: "Web",
      Stack: ["HTML", "CSS", "Js", "Firebace"],
      url: "https://github.com/SeungYeon04/A_RabbitBLOG"
    },
    {
      title: "간단한 게임 공식사이트",
      subtitle: "개인프로젝트",
      date: "2024. ~ 2024.",
      comment: "나중에 게임개발 끝나면 쓸까 하는 게임 공식 사이트 디자인. 배포 성공한 PC, 모바일은 여기서 공유할 예정입니다.(사람들에게 홍보용) 처음엔 대학교 수업으로 우분투 + 호스팅 테스트로 쓰던 웹",
      img: "/Image/linuxWeb.png",
      Type: "Web",
      Stack: ["HTML", "CSS"],
      url: "https://github.com/SeungYeon04/A_Linux.github.io"
    },
    {
      title: "아쿠아포닉스 소개사이트",
      subtitle: "개인프로젝트",
      date: "2024. ~ 2024.",
      comment: "아쿠아포닉스 소개 + 로그인 + 게시판 + 상품소개 등 로직 위주 웹이며, 교내 사업아이템 경진대회 발표용 일회성 웹입니다.",
      img: "/Image/AquaponicsWeb.png",
      Type: "Web",
      Stack: ["HTML", "CSS", "Js", "Firebace"],
      url: "https://github.com/SeungYeon04/A_Aquaponics"
    },
    {
      title: "수박게임 모작제작",
      subtitle: "팀프로젝트 (5명)",
      date: "2023. ~ 2024.",
      comment: "스파르타 코딩클럽 주단위 작업물 중 하나인 수박모작게임. 전체 그림&UI, 시작페이지, 간단 로직을 작업을 했습니다.",
      img: "/Image/wMGame.png",
      Type: "Game",
      Stack: ["Unity", "C#"],
      url: "https://github.com/SeungYeon04/C_MergeGame"
    }, 
    {
      title: "토깽이 MBTI 테스트",
      subtitle: "개인프로젝트",
      date: "2022. ~ 2023.",
      comment: "고등학생 시절 MBTI 테스트 유행할 때 강의 따라서 만든 간단한 MBTI기반 토깽이 유형 테스트입니다.",
      img: "/Image/rabbitTest.png",
      Type: "Web",
      Stack: ["HTML", "CSS", "Js"],
      url: "https://rabbit8mbtitest.netlify.app/"
    }, 
  ];
  
  export default careerList;
  