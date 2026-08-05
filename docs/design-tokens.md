# 포인핸드 디자인 토큰 (렌더링 값 추출)

## 기준 및 범위

- 분석 대상: `메인페이지 pc` (1920px), `메인페이지_태블릿` (768px), `메인페이지_모바일` (360px).
- Figma Variables와 Styles의 이름·값은 조회하거나 인용하지 않았다. 각 레이어의 실제 paint, text, effect, layout 속성만 집계했다.
- `line-height: auto`는 Figma가 명시적 줄간격을 지정하지 않은 값이다. 구현에서도 임의 px 값으로 바꾸지 말고 `normal`/폰트 기본 행간으로 유지한다.
- 이름은 숫자형 접미사 대신 크기 명칭을 사용한다. 단, 하나의 크기 명칭 안에 여러 실제 px 값을 합치지 않는다.

## 색상

| 토큰 | 값 | 관찰 용도 |
|---|---:|---|
| `--color-brand` | `#FE8A03` | 핵심 CTA·강조 |
| `--color-brand-dark` | `#C1650A` | 브랜드 테두리/보조 강조 |
| `--color-brand-light` | `#FFA741` | 브랜드 그라데이션 끝 |
| `--color-text-strong` | `#282828` | 강한 본문/제목 |
| `--color-text-default` | `#444444` | 기본 본문 |
| `--color-text-muted` | `#797979` | 보조 텍스트 |
| `--color-text-disabled` | `#B9B9B8` | 비활성/약한 텍스트 |
| `--color-text-on-dark` | `#F5F5F5` | 어두운 배경 위 텍스트 |
| `--color-white` | `#FFFFFF` | 반전 텍스트/표면 |
| `--color-black` | `#000000` | 아이콘·효과 색상 |
| `--color-surface-warm` | `#FFFBF8` | 밝은 웜 표면 |
| `--color-surface-peach` | `#FFF5EE` | 연한 피치 표면 |
| `--color-surface-amber` | `#FFF4CC` | 앰버 표면 |
| `--color-surface-amber-light` | `#FFEBA4` | 앰버 그라데이션 끝 |
| `--color-surface-orange-light` | `#FFF1DF` | 오렌지 보조 표면 |
| `--color-surface-pink-light` | `#FFE6D4` | 핑크 보조 표면 |
| `--color-border-light` | `#EDE7E0` | 연한 웜 테두리 |
| `--color-border-default` | `#D9D9D9` | 기본 구분선 |
| `--color-danger` | `#FF0033` | 오류/위험 |
| `--color-ig-yellow` | `#FFDD55` | 모바일 소셜 장식 |
| `--color-ig-coral` | `#FF543E` | 모바일 소셜 장식 |
| `--color-ig-magenta` | `#C837AB` | 모바일 소셜 장식 |
| `--color-ig-blue` | `#3771C8` | 모바일 소셜 장식 |
| `--color-ig-violet` | `#6600FF` | 모바일 소셜 장식 |
| `--color-social-neutral` | `#4A4459` | 모바일 소셜 아이콘 |

## 투명도·테두리·그림자

| 토큰 | 값 |
|---|---|
| `--opacity-subtle` | `0.04` (PC에서만 노출) |
| `--opacity-muted` | `0.30` |
| `--opacity-emphasis` | `0.70` |
| `--opacity-surface` | `0.80` |
| `--opacity-high` | `0.90` |
| `--border-thin` | `1px` |
| `--border-medium` | `1.5px` |
| `--border-strong` | `2px` |

### 그림자 색상 (System)
| 토큰 | 값 |
|---|---|
| `--shadow-color-strong` | `rgb(0 0 0 / 25%)` |
| `--shadow-color-soft` | `rgb(0 0 0 / 20%)` |

### 그림자 (Component) — 색상 변수를 참조해 조합
| 토큰 | 값 |
|---|---|
| `--shadow-sm` | `0 1px 4px 1px var(--shadow-color-strong)` (모바일) |
| `--shadow-md` | `0 2px 4px 1px var(--shadow-color-strong)` |
| `--shadow-lg` | `2px 4px 4px 0 var(--shadow-color-strong)` |
| `--shadow-inset-sm` | `inset 0 4px 4px 0 var(--shadow-color-strong)` |
| `--shadow-inset-md` | `inset 2px 2px 4px 1px var(--shadow-color-soft)` |

`GLASS` 효과(blur radius 4)는 3개 화면 모두에서 6회씩 있으나, CSS 값으로 동등 변환할 수 있는 blur/saturation 세부값이 속성에 포함되지 않았다. 구현 시 별도 glass recipe로 검토가 필요하다.
## 모서리 반경

| 토큰 | 값 | 적용 화면 |
|---|---:|---|
| `--radius-hairline` | `4px` | 모바일 |
| `--radius-xs` | `8px` | 모바일 |
| `--radius-sm` | `12px` | 전체 |
| `--radius-md` | `14px` | 모바일 |
| `--radius-lg` | `16px` | 전체 |
| `--radius-xl` | `24px` | PC·태블릿 |
| `--radius-xxl` | `25px` | 전체 |
| `--radius-xxxl` | `26px` | 전체 |
| `--radius-giant` | `32px` | 전체 |
| `--radius-pill` | `64px` | 전체 |

## 간격

공통적으로 반복되는 값을 4px 배수 기준 스케일로 정리했다. `gap`과 `padding`은 동일 스케일을 공유한다. 원본 실측값이 스케일 값과 1~2px 이내로 차이나는 경우는 가장 가까운 스케일 값으로 통합(스냅)했다.

| 토큰 | 값 | 원본 실측값(참고) |
|---|---:|---|
| `--space-3xs` | `2px` | 2 |
| `--space-2xs` | `4px` | 3, 4, 5 |
| `--space-xs` | `8px` | 6, 7, 8, 9 |
| `--space-sm` | `12px` | 10, 11, 12, 13 |
| `--space-md` | `16px` | 14, 15, 16, 17, 18 |
| `--space-lg` | `20px` | 20, 21 |
| `--space-xl` | `24px` | 24, 25, 26 |
| `--space-2xl` | `32px` | 28, 29, 30, 31, 32 |
| `--space-3xl` | `40px` | 40, 42, 43 |
| `--space-4xl` | `48px` | 46, 48, 49, 51 |
| `--space-5xl` | `64px` | 56, 64, 65, 67 |
| `--space-6xl` | `80px` | 80 |
| `--space-7xl` | `96px` | 91, 96 |
| `--space-8xl` | `120px` | 118 |
| `--space-9xl` | `140px` | 130, 136, 140 |
| `--space-10xl` | `200px` | 200 |

### 확인 필요 (스케일과 차이가 커서 임의 통합하지 않음)
| 원본 값 | 비고 |
|---|---|
| `10px` | `--space-sm(12px)`과 2px 차이. 실제 컴포넌트에서 의도된 값인지 확인 필요 |
| `11px` | `--space-sm(12px)`과 1px 차이. 위와 동일 |

### PC/태블릿 전용 절대값 (공용 spacing 토큰에서 제외)
PC에서만 `346px`, `786px`, `843px` gap이, 태블릿에서 `392px`, `458px` gap이 발견된다. 이는 viewport 여백을 만들기 위한 프레임 내부의 절대적 분리값으로, 공용 spacing 스케일에 포함하지 않고 각 컴포넌트/섹션 스타일에 하드코딩하거나 별도 로컬 변수로 처리한다.

## 타이포그래피

### 폰트 패밀리·두께

| 토큰 | 값 |
|---|---|
| `--font-family-default` | `Pretendard, sans-serif` |
| `--font-weight-regular` | Pretendard Regular (400) |
| `--font-weight-medium` | Pretendard Medium (500) |
| `--font-weight-semibold` | Pretendard SemiBold (600) |
| `--font-weight-bold` | Pretendard Bold (700) |
| `--tracking-default` | `0%` / `0em` |

### 크기 및 명시적 행간 (역할값 반영)

| 토큰 | 값 | PC | 태블릿 | 모바일 | 역할 |
|---|---:|:---:|:---:|:---:|---|
| `--font-size-9` | `9px` |  |  | ✓ | |
| `--font-size-10` | `10px` | ✓ | ✓ | ✓ | |
| `--font-size-11` | `11px` |  |  | ✓ | 모바일 동물 카드 이름·공고번호, 캠페인/스토리 탭 라벨 |
| `--font-size-12` | `12px` | ✓ | ✓ | ✓ | |
| `--font-size-13` | `13px` | ✓ | ✓ |  | PC·태블릿 동물 성격 태그, 태블릿 CTA, 모바일 메뉴 항목 |
| `--font-size-14` | `14px` | ✓ | ✓ | ✓ | |
| `--font-size-15` | `15px` | ✓ | ✓ |  | PC 뉴스/캠페인/스토리 CTA, 태블릿 히어로·실종제보 CTA |
| `--font-size-16` | `16px` | ✓ | ✓ |  | |
| `--font-size-18` | `18px` | ✓ |  | ✓ | |
| `--font-size-19` | `19px` |  |  | ✓ | 모바일 캠페인·스토리 섹션 헤드라인("세상을 바꾸는 실천…") |
| `--font-size-20` | `20px` | ✓ | ✓ | ✓ | |
...(이하 heading/display 구간은 기존 표 그대로 유지)

### 역할 토큰 (Semantic / Component) — System 값을 참조

| 역할 토큰 | 참조 값 | 적용 대상 |
|---|---|---|
| `--type-card-meta` | `var(--font-size-11)` | 모바일 동물 카드 이름/공고번호, 캠페인·스토리 탭 라벨 |
| `--type-tag` | `var(--font-size-13)` | PC·태블릿 동물 성격 태그 |
| `--type-menu-item` | `var(--font-size-13)` | 모바일 메뉴 항목 |
| `--type-cta` | `var(--font-size-15)` | 뉴스/캠페인/스토리/히어로/실종제보 CTA 버튼 라벨 |
| `--type-section-title-mobile` | `var(--font-size-19)` | 모바일 캠페인·스토리 섹션 헤드라인 |

나머지 모든 추출 텍스트는 `line-height: auto`, `letter-spacing: 0%`이다.

## 그라데이션

각 stop 색상을 먼저 color token으로 분리했다. 아래 각도는 Figma gradient transform을 CSS 좌표계로 환산한 근사치이며, transform 행렬도 함께 기록해 구현 시 오차 없이 재현할 수 있게 했다.

| 토큰 | CSS 제안 | 관찰 화면 |
|---|---|---|
| `--gradient-brand-horizontal` | `linear-gradient(90deg, var(--color-brand) 0%, var(--color-brand-light) 100%)` | 전체 |
| `--gradient-brand-diagonal` | `linear-gradient(132.2deg, var(--color-brand) 0%, var(--color-brand-light) 49.52%)` | 태블릿·모바일 |
| `--gradient-amber-reverse` | `linear-gradient(270deg, var(--color-surface-amber) 0%, var(--color-surface-amber-light) 100%)` | 전체 (PC는 opacity 0.8 변형도 존재) |
| `--gradient-mint-intro` | `linear-gradient(90.4deg, #D6F3E6 9.13%, #E6FFF4 55.29%)` | 태블릿·모바일 |
| `--gradient-mint-tail` | `linear-gradient(90.4deg, #D6F3E6 62.98%, #E6FFF4 100%)` | 전체 |
| `--gradient-mint-pc-intro` | `linear-gradient(90.4deg, #D6F3E6 18.27%, #E6FFF4 63.94%)` | PC 전용 |
| `--gradient-cream-pc` | `linear-gradient(270deg, #FBF3D6 32.69%, #FEF1C3 100%)` | PC 전용 |
| `--gradient-social-warm` | `radial-gradient(ellipse at 36% 104%, var(--color-ig-yellow) 0%, var(--color-ig-yellow) 10%, var(--color-ig-coral) 50%, var(--color-ig-magenta) 100%)` | 모바일 전용 |
| `--gradient-social-cool` | `radial-gradient(ellipse at 46% 45%, var(--color-ig-blue) 0%, var(--color-ig-blue) 12.8%, rgb(102 0 255 / 0%) 100%)` | 모바일 전용 |

Figma transform (정확값): `brand-diagonal [[0.546,-0.501,0.478],[0.495,0.546,-0.020]]`; mint 계열 `[[1,-0.007,0.003],[0.007,1,-0.003]]`; amber/cream 역방향 `[[-1,0,1],[0,-1,1]]`.
