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

### Day3. 사칙연산, 배열, 수학
* **day03_009** : 나머지 구하기
* **day03_010** : 중앙값 구하기
* [**day03_011**](https://github.com/1010Min/Practice/blob/e771216f15669fbe173e8cfef457dae84c3a17a8/programmers_python/coding_test_intro/day03_011.py) : 최빈값 구하기
    * `sort()` 함수는 숫자를 정렬시켜주지만, none을 return함
    ∴ `numbers.sort()`를 진행 후, numbers의 길이를 재야 함
    * `len()` 함수는 .len()이 아닌 `len(list)`형태로 사용
    * Counter에서는 최빈값을 구하는 함수 제공 &rarr; `most_common()`
* **day03_012** : 짝수는 싫어요

### Day4. 수학, 배열
* **day04_013** : 피자 나눠 먹기 (1)
* **day04_014** : 피자 나눠 먹기 (2)
* **day04_015** : 피자 나눠 먹기 (3)
* **day04_016** : 배열의 평균값