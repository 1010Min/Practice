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

### Day12. 문자열, 정렬, 사칙연산, 수학
* **day12_045** : 모음 제거
* **day12_046** : 문자열 정렬하기 (1)
    * `isdigit()` 힘수를 통해 주어진 문자가 숫자인지 확인 가능
* **day12_047** : 숨어있는 숫자의 덧셈 (1)
* **day12_048** : 소인수분해
    * **집합 자료형**
        집합 자료형은 순서구분 X, 중복 X
        ```python
        prime = set() #집합 선언
        prime.add() #집합에 원소 추가하기
        answer = list(prime) #집합->list로 변환
        ```

### Day13. 문자열, 배열, 사칙연산, 수학, 조건문
* **day13_049** : 컨트롤 제트
* **day13_050** : 배열 원소의 길이
* **day13_051** : 중복된 문자 제거
* **day13_052** : 삼각형의 완성조건 (1)

### Day14. 조건문, 반복문, 시뮬레이션, 문자열
* **day14_053** : 가까운 수
* **day14_054** : 369게임
* **day14_055** : 암호 해독
* **day14_056** : 대문자와 소문자
    * **대/소문자 구별법**
        * `문자열.upper()`: 해당 문자열을 대문자로 변환
        * `문자열.lower()`: 해당 문자열을 소문자로 변환
        * `문자열.isupper()`: 해당 문자열이 대문자인지 판단
        * `문자열.islower()`: 해당 문자열이 소문자인지 판단

### Day15. 문자열, 해시, 배열, 수학
* **day15_057** : 영어가 싫어요
    1. 해당 문제 다른 풀이 (1)
        ```python
        def solution(numbers):
            r = {'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4','five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'} for k in r.keys():
            numbers = numbers.replace(k, r[k])
            return int(numbers)
        ```
    2. 해당 문제 다른 풀이 (2)
        `enumerate()` 함수는 기본적으로 인덱스와 원소로 이루어진 튜플(tuple)을 만들어줌
        ```python
        def solution(numbers):
            for num, eng in enumerate(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]):
            numbers = numbers.replace(eng, str(num))
            return int(numbers)
        ```
* **day15_058** : 인덱스 바꾸기
* **day15_059** : 한 번만 등장한 문자
* **day15_060** : 약수 구하기

### Day16. 문자열, 수학, 배열, 조건문
* **day16_061** : 편지
* **day16_062** : 가장 큰 수 찾기
* **day16_063** : 문자열 계산하기
* **day16_064** : 배열의 유사도

### Day17. 문자열, 수학, 조건문, 배열, 사칙연산
* **day17_065** : 숫자 찾기
    * **숫자의 각 자리수 list로 분리**
        ```python
        n = 12345
        n_list = list(map(int, str(n)))

        # 또는
        
        [int(a) for a in str(12345)]
        ```
* **day17_066** : n의 배수 고르기
* **day17_067** : 자릿수 더하기
* **day17_068** : OX퀴즈

### Day18. 문자열, 수학, 조건문, 정렬
* **day18_069** : 문자열안에 문자열
* **day18_070** : 제곱수 판별하기
* **day18_071** : 세균 증식
* **day18_072** : 문자열 정렬하기 (2)

### Day19. 문자열, 배열, 조건문
* **day19_073** : 7의 개수
    * **해당 문제 다른 풀이**
    ```python
    def solution(array):
        return str(array).count('7')
    ```
* **day19_074** : 잘라서 배열로 저장하기
* **day19_075** : 중복된 숫자 개수
* **day19_076** : 머쓱이보다 키 큰 사람

### Day20. 수학, 시뮬레이션, 문자열, 사칙연산
* **day20_077** : 직사각형 넓이 구하기
* **day20_078** : 캐릭터의 좌표
* **day20_079** : 최댓값 만들기 (2)
* **day20_080** : 다항식 더하기

### Day21. 문자열, 사칙연산, 시뮬레이션, 2차원배열, 수학, 배열
* **day21_081** : 숨어있는 숫자의 덧셈 (2)
    * **연속된 숫자들을 추출하여 list로 리턴**
        `re.findall(pattern, string)` 함수 사용
        `r'\d+'`: 1회 이상 반복되는 숫자 패턴
        ```python
        import re
        re.findall(r'\d+', my_string)
        ```
* **day21_082** : 안전지대 ❌
* **day21_083** : 삼각형의 완성조건 (2)
* **day21_084** : 외계어 사전

### Day22. dp, 수학, 조건문, 배열
* **day22_085** : 저주의 숫자 3
* **day22_086** : 평행
* [**day22_087**](https://github.com/1010Min/Practice/blob/81117e7e4acc2f2cc487b42a2ba1546a829fb683/programmers_python/coding_test_intro/day22_087.py) : 겹치는 선분의 길이
    * **`enrumrate()` 내장 함수**
        * 순서가 있는 자료형(list, set, tuple, dictionary, string)을 입력으로 받아 인덱스 값을 포함하는 enumerate 객체를 돌려줌
        * for문과 함께 사용하면 자료형의 현재 순서(index)와 그 값을 쉽게 알 수 있음
* **day22_088** : 유한소수 판별하기

### Day23. 배열, 정렬, 문자열
* **day23_089** : 특이한 정렬
* **day23_090** : 등수 매기기
* **day23_091** : 옹알이 (1) ❌
    * `lambda`: 어떤 기준을 삼아 정렬하는 문제에 주로 사용
        ```python
        answer = sorted(numlist, key = lambda x : (abs(x-n), -x))
        ```
        1. x가 numlist를 돌면서, 각 요소와의 차이를 `abs로 절대값으로 구함
        2. 절대값이 같은 경우, 내림차순(양수값이 음수값보다 높은 우선순위)를 위해 `-x`로 부여
* **day23_092** : 로그인 성공?

### Day24. 수학, 시뮬레이션, 문자열, 조건문, 반복문
* **day24_093** : 치킨 쿠폰
* **day24_094** : 이진수 더하기
    * **10진수 → n진수 변환**
        * `oct()` 함수: 10진수 → 8진수 (0o붙음)
        * `hex()` 함수: 10진수 → 16진수 (0x붙음)
        * `bin()` 함수: 10진수 → 2진수 (0b붙음)
    * **n진수 → 10진수 변환**
        * `int(숫자, n)`로 변환
* **day24_095** : A로 B 만들기
* **day24_096** : k의 개수

### Day25. 시뮬레이션, 조건문, 수학
* **day25_097** : 문자열 밀기
* **day25_098** : 종이 자르기
* **day25_099** : 연속된 수의 합 (→ 등차수열 이용하기)
* **day25_100** : 다음에 올 숫자

***
## 🥳 달성 완료 🥳
![img](/programmers_python/coding_test_intro/Codingtest%20Calendar.png)