# 이미지 에셋 목록

작성 기준: `images/1.pc`, `images/2.tablet`, `images/3.mobile`의 실제 파일을 확인했다. `src`는 프로젝트 루트의 `index.html` 기준 상대 경로이며, 같은 역할의 파일은 한 행에 묶었다. `list_style`은 실제 파일명이 버전마다 달라 별도 열로 기록했다.

| 실제 파일명 | 폴더 경로 | src 경로 | 사용 위치(섹션) | 방식 | 비고 |
|---|---|---|---|---|---|
| hero_bg.jpg / hero_bg_t.png / hero_bg_m.png | 1.pc / 2.tablet / 3.mobile | `./images/1.pc/hero_bg.jpg` 등 | Hero | CSS `background-image` | 브레이크포인트별 교체 |
| main_logo_pc.png / main_logo_tablet.png / main_logo_mobile.png | 1.pc / 2.tablet / 3.mobile | `./images/1.pc/main_logo_pc.png` 등 | 헤더·푸터 | `<img>` | 로고 |
| header_heart.png | 1.pc/icon, 2.tablet/icon_t, 3.mobile/icon_m | `./images/1.pc/icon/header_heart.png` | 헤더 | `<img>` | 관심 동물 |
| header_user.png | 1.pc/icon, 2.tablet/icon_t | `./images/1.pc/icon/header_user.png` | 헤더 | `<img>` | PC·태블릿 로그인 |
| header_menu.png | 3.mobile/icon_m | `./images/3.mobile/icon_m/header_menu.png` | 헤더 | `<img>` | 모바일 메뉴 |
| cta_arrow1.png | 1.pc/icon, 2.tablet/icon_t, 3.mobile/icon_m | `./images/1.pc/icon/cta_arrow1.png` | CTA | `<img>` | CTA 화살표 |
| hero_arrow1.svg / hero_arrow1.png | 1.pc/icon / 2.tablet/icon_t | 각 실제 경로 | Hero | `<img>` | 버전별 포맷 상이 |
| menu_icon1.png~menu_icon4.png | 2.tablet/icon_t, 3.mobile/icon_m | `./images/3.mobile/icon_m/menu_icon1.png` 등 | Quick menu | `<img>` | PC 폴더에는 해당 파일 없음 |
| list_style_pc.svg / list_style_t.png / list_style_m.png | 1.pc/icon / 2.tablet/icon_t / 3.mobile/icon_m | 각 실제 경로 | 공통 리스트 | CSS `background-image` | 예외 파일명: PC `list_style_pc`, 태블릿 `list_style_t`, 모바일 `list_style_m` |
| btn_arrow2_left.svg, btn_arrow2_rignt.svg | 1.pc/icon | 각 실제 경로 | 카드 캐러셀 | `<img>` | 실제 파일명 `rignt` 오타 유지 |
| btn_arrow2_left.svg / btn_arrow2_right.svg | 2.tablet/icon_t | 각 실제 경로 | 카드 캐러셀 | `<img>` | 태블릿 |
| btn_arrow2_left.png / btn_arrow2_right.png | 3.mobile/icon_m | 각 실제 경로 | 카드 캐러셀 | `<img>` | 모바일 |
| card_arrow2_left.svg / card_arrow2_right.svg | 1.pc/icon | 각 실제 경로 | 동물 카드 | `<img>` | PC 전용 |
| card_heart.png / card_heart_emty.svg | 1.pc/icon | 각 실제 경로 | 동물 카드 | `<img>` | 실제 `emty` 철자 유지 |
| banner_ellipse1.png~banner_ellipse3.png | 1.pc/icon | `./images/1.pc/icon/banner_ellipse3.png` 등 | 입양 배너 | `<img>` | 배너 장식 |
| banner_ellipse.png, banner_ellipse2.png, banner_ellipse3.png | 2.tablet/icon_t | 각 실제 경로 | 입양 배너 | `<img>` | 태블릿 장식 |
| banner_ellipse1.png~banner_ellipse3.png | 3.mobile/icon_m | 각 실제 경로 | 입양 배너 | `<img>` | 모바일 장식 |
| location_icon.png | 1.pc/icon, 3.mobile/icon_m | `./images/3.mobile/icon_m/location_icon.png` | 동물 카드 | `<img>` | 위치 표시 |
| calender_icon.png | 1.pc/icon, 3.mobile/icon_m | `./images/3.mobile/icon_m/calender_icon.png` | 뉴스 | `<img>` | 실제 파일명 유지 |
| news_icon1.png / news_icon2.png / news_arrow2.png | 전 버전 아이콘 폴더 | `./images/3.mobile/icon_m/news_icon1.png` 등 | News | `<img>` | 태블릿에는 news_arrow1도 있음 |
| news_arrow1.png | 2.tablet/icon_t | `./images/2.tablet/icon_t/news_arrow1.png` | News | `<img>` | 태블릿 전용 |
| footer_icon1.png~footer_icon3.png | 1.pc/icon, 3.mobile/icon_m | `./images/1.pc/icon/footer_icon1.png` 등 | 푸터 SNS | `<img>` | PC·모바일 PNG |
| footer_icon1.svg~footer_icon3.svg | 2.tablet/icon_t | 각 실제 경로 | 푸터 SNS | `<img>` | 태블릿 SVG |
| footer_bg.png | 1.pc | `./images/1.pc/footer_bg.png` | 푸터 | CSS `background-image` | PC 장식 배경 |
| found_cta_arrow1.svg / found_arrow1.svg / found_arrow1.png | 1.pc/icon / 2.tablet/icon_t / 3.mobile/icon_m | 각 실제 경로 | Lost & Found CTA | `<img>` | 파일명 버전별 상이 |
| floating_heart.png / floating_star.png | 1.pc/icon, 2.tablet/icon_t | 각 실제 경로 | 플로팅 버튼 | `<img>` | PC·태블릿 |
| floating_heart.png / floating_top.png | 3.mobile/icon_m | 각 실제 경로 | 플로팅 버튼 | `<img>` | 모바일 |
| about_heart.png / about_heart.svg | 1.pc/icon, 2.tablet/icon_t, 3.mobile/icon_m | 각 실제 경로 | About | `<img>` | 버전별 포맷 상이 |
| about_ellipse1.png~about_ellipse3.png | 1.pc/icon | 각 실제 경로 | About | `<img>` | PC 장식 |
| intro_bg1.png~intro_bg3.png | 1.pc | `./images/1.pc/intro_bg1.png` 등 | About | `<img>` | PC 이미지 콜라주 |
| about_bg1_t.png~about_bg3_t.png | 2.tablet | 각 실제 경로 | About | `<img>` | 태블릿 이미지 콜라주 |
| intro_bg1_m.png / intro_bg2_m.png | 3.mobile | 각 실제 경로 | About | `<img>` | 모바일 이미지 콜라주 |
| ai_icon.png | 각 버전 아이콘 폴더 | `./images/1.pc/icon/ai_icon.png` | AI matching | `<img>` | AI 아이콘 |
| Ellipse1.png~Ellipse7.png | 1.pc/ai_icon_pc | 각 실제 경로 | AI matching | `<img>` | PC 원형 장식 |
| Ellipse1.png~Ellipse9.png | 2.tablet/ai_icon_t | 각 실제 경로 | AI matching | `<img>` | 태블릿 원형 장식 |
| ai_ellipse1_m.png~ai_ellipse7_m.png | 3.mobile/ai_icon_m | 각 실제 경로 | AI matching | `<img>` | 모바일 원형 장식 |
| store_bg.png / store_arrow2.png | 3.mobile / 3.mobile/icon_m | 각 실제 경로 | 모바일 Store | CSS 배경 / `<img>` | 모바일 프레임 전용 |
| story_icon1.png~story_icon3.png | 3.mobile/icon_m | 각 실제 경로 | 모바일 Story | `<img>` | 모바일 프레임 전용 |

## 콘텐츠 카드용 실제 파일

| 실제 파일명 | 폴더 경로 | src 경로 | 사용 위치(섹션) | 방식 | 비고 |
|---|---|---|---|---|---|
| a1.png~a4.png, a5.jpg~a7.jpg, a8.jpeg~a9.jpeg, a10.jpg, a11.jpeg, a12.jpg | adoption_img | `./images/adoption_img/a1.png` 등 | 입양 동물 카드 | `<img>` | 12개 |
| c1.png, c2.jpeg, c3.png, c4.png | campaign_img | `./images/campaign_img/c1.png` 등 | 캠페인·News 카드 | `<img>` | 4개 |
| f1.png~f12.png/jpg | found_img | `./images/found_img/f1.png` 등 | Lost & Found 카드 | `<img>` | 12개 |
| sh1.jpeg, sh2.jpg, sh3.jpg, sh4.jpeg | shelter_img | `./images/shelter_img/sh1.jpeg` 등 | 보호소·News 카드 | `<img>` | 4개 |
| s1.avif~s4.avif, y1.avif~y3.avif | story_img | `./images/story_img/s1.avif` 등 | Story 카드 | `<img>` | AVIF 7개 |

누락으로 인해 새로 만들어야 하는 이미지는 확인되지 않았다. 구현에 필요한 모든 비트맵/아이콘은 위의 실제 저장 경로만 사용한다.
