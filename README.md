# 부정행위 감지 추적 시스템

# 목차
- 배경
- 기술 스택
- 참고한 코드
- 결과

## 배경
대부분의 시험 주관이 비대면으로 대체된 가운데, 부정행위가 일어나고 있는 현상에서 착안하여 어떻게 하면 비대면 진행을 하면서 부정행위가 일어나는 지를 알기 위해 제작하였다.
현재 레포지토리는 부정행위 판별된 데이터를 API 서버가 받아, 웹 상으로 출력해주는 내용을 담은 레포지토리이다. 
- 부정행위 판별 레포지토리 : https://github.com/JinHyeonBae/Capstone_Temp

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

## 결과
### 홈
<img width="1275" alt="image" src="https://user-images.githubusercontent.com/47708313/166240236-d748bddb-3e2c-4093-9400-0a54140b1dc0.png"><br>
### 시선 인식 페이지
<img width="1505" alt="시선 인식" src="https://user-images.githubusercontent.com/47708313/166239270-1d7cd497-5f2b-4a45-8288-39f3ac7f282c.png"><br>
### 음성 인식 페이지
<img width="1512" alt="음성 인식" src="https://user-images.githubusercontent.com/47708313/166239282-c079aa08-c1b0-477b-8160-740b1653836c.png"><br>
### 사람 위치 인식 페이지
<img width="1496" alt="사람 수 인식" src="https://user-images.githubusercontent.com/47708313/166239288-cb91693f-1999-4b06-9817-43d3ff7135ad.png"><br>



## 참고한 코드
GazeTracking - https://github.com/antoinelame/GazeTracking

HeadPose-Detection - https://github.com/qhan1028/Headpose-Detection
