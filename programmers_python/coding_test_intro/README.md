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

### Day5. 수학, 배열
* **day05_017** : 옷가게 할인 받기
* **day05_018** : 아이스 아메리카노
* **day05_019** : 나이 출력
* **day05_020** : 배열 뒤집기
    * **배열 뒤집는 3가지 방법**
        1. 슬라이싱
            ```python
            reversed_listName = listName[::-1]
            ```
        2. `reverse()` 메서드
            ```python
            listName.reverse()
            ```
            &rarr; 원본 리스트 listName의 순서가 바뀜
        3. 내장함수 `reversed()`
            ```python
            reversed_listName = list(reversed(listName))
            ```
            &rarr; `reversed()` 내장함수는 순서가 뒤집어진 iterator 객체 형태로 반환하므로, 내장함수 `list()`를 사용해 자료형 변환이 필요함

### Day6. 문자열, 반복문, 출력, 배열, 조건문
* **day06_021** : 문자열 뒤집기
* **day06_022** : 직각삼각형 출력하기
* **day06_023** : 짝수 홀수 개수
    * **변수 여러 개  한 번에 초기화**
        ```python
        a = b = c = 0
        # a, b = 0 #이런 식으로 초기화 하면 TypeError 발생
        ```
* **day06_024** : 문자 반복 출력하기
    * **리스트의 요소를 문자열 형태로 반환하는 방법**
        ```python
        list = ['A', 'B', 'C']

        ''.join(list) #List의 element들을 공백 없이 붙임
        ' '.join(list) #List의 element들을 공백을 이용해 구분
        '-'.join(list) #List의 element들을 '-' 문자를 이용해 구분
        '\n'.join(list) #List의 element들을 한 줄에 하나씩 출력
        ```

### Day7. 문자열, 조건문, 수학, 반복문
* **day07_025** : 특정 문자 제거하기
    * `replace(A,B)`: 문자열 A를 B로 변경
* **day07_026** : 각도기
* **day07_027** : 양꼬치
* **day07_028** : 짝수의 합

### Day8. 배열, 구현, 수학
* **day08_029** : 배열 자르기
* [**day08_030**](https://github.com/1010Min/Practice/blob/0a11dd0ee3dfcac1659a1172733933a032e2a501/programmers_python/coding_test_intro/day08_030.py) : 외계행성의 나이
    * **파이썬 아스키코드 변환**
        * `ord()`: 문자열을 아스키코드로 변환하는 함수
            ```python
            ord('A') #65
            ord('Z') #90
            ord('a') #97
            ord('z') #122
            ```
        * `chr()`: 아스키코드를 문자열로 변환하는 함수
            ```python
            for i in range(97, 123):
                print(chr(i), end = '')
            #a b c d e f g h i j k l m n o p q r s t u v w x y z
            ```
* [**day08_031**](https://github.com/1010Min/Practice/blob/0a11dd0ee3dfcac1659a1172733933a032e2a501/programmers_python/coding_test_intro/day08_031.py) : 진료순서 정하기
    * `.index()`: 리스트 중 특정 원소가 몇 번째에 처음으로 등장했는가 &rarr; 인덱스 순서 알려줌
* **day08_032** : 순서쌍의 개수

### Day9. 수학, 문자열, 해시, 완전탐색, 조건문
* **day09_033** : 개미 군단
* **day09_034** : 모스부호 (1)
* **day09_035** : 가위 바위 보
    * **파이썬 숫자 각 자리수 분리**
        1. 문자열로 변환 후 분리
            ```python
            a = []
            for i in str(number):
                a.append(i)
            ```
        2. 10으로 나눠 자리수 분리 (1의 자리부터 분리)
            ```python
            a = []
            while (number != 0):
                a.append(number % 10)
                number = number // 10
            ```
        3. `map()` 함수 사용하여 원소값 더하기
            ```python
            sum(map(int, str(number)))
            ```
* [**day09_036**](https://github.com/1010Min/Practice/blob/b1629ff63e76d20fe3dd0026c4aeeeecb27f176d/programmers_python/coding_test_intro/day09_036.py) : 구슬을 나누는 경우의 수

### Day10. 조건문, 배열, 수학, 시뮬레이션
* **day10_037** : 점의 위치 구하기
* [**day10_038**](https://github.com/1010Min/Practice/blob/d4f03e6fea56f7cce4efbd85e44a3a8b599cb6c3/programmers_python/coding_test_intro/day10_038.py): 2차원으로 만들기
    * **1차원 배열 2차원 배열로 만들기**
        1. `reshape()` 함수 사용
            numpy array로 변환 후 `reshape(x행, y열)`의 2차원 배열로 변환
            ```python
            import numpy as np
            np.array(num_list).reshape(x행, y열).tolist() #tolist()로 list 형변환
            ```
        2. `append()` 함수 사용
            n * len(num_list) 배열로 만드는 경우
            ```python
            def solution(num_list, n):
                answer = []
                for i in range(0, len(num_list), n):
                    answer.append(num_list[i:i+n])
                return answer
            ```
* [**day10_039**](https://github.com/1010Min/Practice/blob/d4f03e6fea56f7cce4efbd85e44a3a8b599cb6c3/programmers_python/coding_test_intro/day10_039.py) : 공 던지기
* **day10_040** : 배열 회전시키기

### Day11. 수학, 반복문
* **day11_041** : 주사위의 개수
* [**day11_042**](https://github.com/1010Min/Practice/blob/a7542167f6283c3d82f4baf6db078585f2a60be6/programmers_python/coding_test_intro/day11_042.py) : 합성수 찾기
    * 루트(제곱근) 계산 : 2의 루트 = `2**(1/2)`
* **day11_043** : 최댓값 만들기(1)
* [**day11_044**](https://github.com/1010Min/Practice/blob/a7542167f6283c3d82f4baf6db078585f2a60be6/programmers_python/coding_test_intro/day11_044.py) : 팩토리얼
    * 팩토리얼의 경우, `factorial()`함수 사용
        ```python
        from math import factorial
        
        def solution(n):
            k = 10
            while n < factorial(k):
                k -= 1
            return k
        ```