# 부정행위 감지 추적 시스템

# 목차
- 배경
- 기술 스택
- 참고한 코드

## 배경
대부분의 시험 주관이 비대면으로 대체된 가운데, 부정행위가 일어나고 있는 현상에서 착안하여 어떻게 하면 비대면 진행을 하면서 부정행위가 일어나는 지를 알기 위해 제작하였다.
현재 레포지토리는 부정행위 판별된 데이터를 API 서버가 받아, 웹 상으로 출력해주는 내용을 담은 레포지토리이다. 

### 부정행위 판별 방법
```
1. 시선 인식
2. 사람 숫자
3. 음성 인식
```
github의 오픈소스 GazeTracking와 head-pose, Speech Recognition library를 통해 데이터를 인식하였다.

## 기술 스택
- Back-end
  - Flask, Redis
- Front-end
  - React



## 참고한 코드
GazeTracking - https://github.com/antoinelame/GazeTracking

HeadPose-Detection - https://github.com/qhan1028/Headpose-Detection
