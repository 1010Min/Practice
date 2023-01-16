# 코딩테스트 입문
**[[프로그래머스]](https://school.programmers.co.kr/learn/challenges/beginner?order=acceptance_desc&page=1)** 코딩테스트 입문용 문제들로 하루에 4문제씩 25일동안 100문제 풀기

***

### Day1. 사칙연산
* **day01_001** : 두 수의 합
* **day01_002** : 두 수의 차
* **day01_003** : 두 수의 곱
* **day01_004** : 몫 구하기

### Day2. 사칙연산, 조건문, 배열
* **day02_005** : 두 수의 나눗셈
* **day02_006** : 숫자 비교하기
* **day02_007** : 분수의 덧셈
    * **파이썬에서 and와 &의 차이점**
        * **and**: 논리 AND &rarr; 연산자 여러개의 조건식 비교
        * **&**: 비트 연산자 &rarr; 두 개의 이진수에서 동일한 위치의 bit가 1인 것들만 1로 계산
    * **파이썬에서 for문 거꾸로 출력하기**
        ```python
        for i in range(n, 0, -1): # step을 -1로 설정
            print(i)
        ```

        ```python
        for i in reversed(range(n)): #리스트 원소를 뒤집고 반환하는 reversed() 사용
            print(i + 1)
        ```
        
* **day02_008** : 배열 두 배 만들기