# 코딩테스트 연습 Lv.1
**[[프로그래머스]](https://school.programmers.co.kr/learn/challenges?order=acceptance_desc&page=1&levels=1&languages=python3)** Lv.1의 문제들로, 정답률 높은 문제 순으로 풀기

***

|문제번호|제목|상태|
|---|-----|---|
|[01_12944](01_12944.py)|평균 구하기|✅|
|[02_12937](02_12937.py)|짝수와 홀수|✅|
|[03_12928](03_12928.py)|약수의 합|✅|
|[04_12931](04_12931.py)|자릿수 더하기|✅|
|[05_12932](05_12932.py)|자연수 뒤집어 배열로 만들기|✅|
|[06_12916](06_12916.py)|문자열 내 p와 y의 개수|✅|
|[07_12934](07_12934.py)|정수 제곱근 판별|✅|
|[08_12954](08_12954.py)|x만큼 간격이 있는 n개의 숫자|✅|
|[09_12925](09_12925.py)|문자열을 정수로 바꾸기|✅|
|[10_12933](10_12933.py)|정수 내림차순으로 배치하기|✅|
|[11_87389](11_87389.py)|나머지가 1이 되는 수 찾기|✅|
|[12_12947](12_12947.py)|하샤드 수|✅|
|[13_12912](13_12912.py)|두 정수 사이의 합|✅|
|[14_12943](14_12943.py)|콜라츠 추측|✅|
|[15_12919](15_12919.py)|서울에서 김서방 찾기|✅|
|[16_12910](16_12910.py)|나누어 떨어지는 숫자 배열|✅|
|[17_12948](17_12948.py)|핸드폰 번호 가리기|✅|
|[18_12935](18_12935.py)|제일 작은 수 제거하기|✅|
|[19_76501](19_76501.py)|음양 더하기|✅|
|[20_86051](20_86051.py)|없는 숫자 더하기|✅|
|[21_12903](21_12903.py)|가운데 글자 가져오기|✅|
|[22_12922](22_12922.py)|수박수박수박수박수?|✅|
|[23_70128](23_70128.py)|내적|✅|
|[24_12917](24_12917.py)|문자열 내림차순으로 배치하기|✅|
|[25_77884](25_77884.py)|약수의 개수와 덧셈|✅|
|[26_12918](26_12918.py)|문자열 다루기 기본|✅|
|[27_82612](27_82612.py)|부족한 금액 계산하기|✅|
|[28_12950](28_12950.py)|행렬의 덧셈|✅|
|[29_12969](29_12969.py)|직사각형 별찍기|✅|
|[30_12940](30_12940.py)|최대공약수와 최소공배수|✅|
|[31_68935](31_68935.py)|3진법 뒤집기|🔄|
|[32_12930](32_12930.py)|이상한 문자 만들기|✅|
|[33_12982](33_12982.py)|예산|✅|
|[34_12926](34_12926.py)|시저 암호|✅|
|[35_131705](35_131705.py)|삼총사|✅|
|[36_86491](36_86491.py)|최소직사각형|✅|
|[37_17681](37_17681.py)|[1차] 비밀지도|🔄|
|[38_12915](38_12915.py)|문지열 내 마음대로 정렬하기|✅|
|[39_42748](39_42748.py)|K번째수|✅|
|[40_81301](40_81301.py)|숫자 문자열과 영단어|✅|
|[41_68644](41_68644.py)|두 개 뽑아서 더하기|✅|
|[42_147355](42_147355.py)|크기가 작은 부분 문자열|✅|
|[43_12901](43_12901.py)|2016년|🔄|
|[44_132267](44_132267.py)|콜라 문제|✅|
|[45_1845](45_1845.py)|폰켓몬|🔄|
|[46_134240](46_134240.py)|푸드 파이트 대회|✅|
|[47_142086](47_142086.py)|가장 가까운 같은 글자|✅|
|[48_12921](48_12921.py)|소수 찾기|🔄|
|[49_42840](49_42840.py)|모의고사|✅|
|[50_12977](50_12977.py)|소수 만들기|🔄|
|[51_42889](51_42889.py)|실패율|🔄|

***

## 파이썬 내장함수
#### [**파이썬 조합**](35_131705.py)
* **순열(Permutations)**
     ```python
    from itertools import permutations

    nums = [1,2,3,4]
    perm = list(permutations(nums, 2))

    # [(1, 2), (1, 3), (1, 4), (2, 1), (2, 3), (2, 4), (3, 1), (3, 2), (3, 4), (4, 1), (4, 2), (4, 3)] 출력
    ```

* **조합(Combinations)**
    ```python
    from itertools import combinations

    nums = [1,2,3,4]
    combi = list(combinations(nums, 2))
    # [(1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)] 출력
    ```

#### [**2차원 배열 접근하기**](36_86491.py)
```python
arr = [[0, 1], [2, 3], [4, 5], [6, 7], [8, 9],]
```
1. Inline loop
    ```python
    new_arr = [i[0] for i in arr]
    print(new_arr)

    # [0, 2, 4, 6, 8]
    ```
2. zip 사용하기
    ```python
    new_arr = list(zip(*arr))[0]
    ```
3. numpy 사용하기
    ```python
    import numpy as np
    new_arr = np.array(arr).T[0]
    ```

#### [**특정 기준으로 list 정렬하기**](38_12915.py)
```python
arr = ['abc', 'bac', 'bca']
sorted(arr, key=lambda x : x)
# sorted(반복할_딘위, key=lambda x : 정렬할 기준)
```

1. key가 하나일 때
    * 리스트 각 원소 기준 정렬
        ```python
        sorted(arr, key=lambda x : x)
        ```
    * 리스트 각 원소의 첫 글자 기준 정렬
        ```python
        sorted(arr, key=lambda x : x[0])
        ```
    * 리스트 내 요소의 인덱스를 원소의 크기 순으로 정렬
        ```python
        b = [12, 14, 23, 24, 16]
        b_idx = sorted(range(len(b)), key = lambda k: b[k]) 
        # b_idx는 [0, 1, 4, 2, 3]
        ```
2. key가 2개일 때
    * x[0]을 기준으로 정렬하고, 같은 경우 x[1] 기준으로 정렬
        ```python
        sorted(arr, key=lambda x : (x[0], x[1]))
        ```

#### [**10진수 → 2진수로 변환할 때, 자릿수 맞춰서 출력**](37_17681.py)
* `.zfill(k)` : k자리의 이진수를 변환받을 수 있음
    ```python
    arr.append(bin(9).replace('0b',"").zfill(5))
    # '01001'로 출력됨
    ```

#### [**문자열 일정 길이로 자르기**](42_147355.py)
1. Slicing 사용
    ```python
    seq = 'f09f9989x'
    length = 2
    [seq[i:i+length] for i in range(0, len(seq), length)]
    ```
2. join을 사용한 slicing
    ```python
    seq = 'f09f9989x'
    length = 2
    [''.join(x) for x in zip(*[list(seq[z::length]) for z in range(length)])]
    ```
3. map을 사용
    ```python
    seq = 'f09f9989x' 
    length = 2
    map(''.join, zip(*[iter(seq)]*length))
    ```

#### [**List 안에 특정 요소 중복 횟수 구하기**](45_1845.py)
* `Counter` 사용
    ```python
    from collections import Counter
    count_dict = Counter(arr)
    ```

#### [**문자열 내에서 특정 문자 인덱스값 찾기**](47_142086.py)
1. `문자열.find("문자")` : 해당 문자의 첫번째 인덱스 반환
2. `enumerate()` 사용 : 해당 문자의 모든 인덱스 반환
    ```python
    str1 = "Hello World"
    str2 = 'o'

    index = [i for i, j in enumerate(str1) if j == str2]
    print(f"Found character '{str2}' at index {index}")

    # Found Character 'o' at index [4, 7]
    ```
3. `문자열.rfind("문자")` : 해당 문자의 제일 마지막 인덱스 반환

***

### 문제 풀이
##### [**[1차] 비밀지도**](37_17681.py)
```python
bin(arr1[i] | arr2[i]).replace('0b',"").zfill(n)
```
* `bin(arr1[i] | arr2[i])` : 각각의 배열을 이진수로 변환해 OR 연산
    → 모두 0일 때 0, 하나라도 1이면 1 출력
* `.zfill(n)` : 이진수가 n자리 수가 아닐 경우, n자리에 맞춰 왼쪽에 0 추가해주는 함수

##### [**소수 찾기**](48_12921.py)
**에라토스테네스의 체**를 사용한 방법
1. 2부터 n까지 모든 자연수 나열
2. 남은 수 중 처리하지 않은 가장 작은 수 i 탐색
3. 남은 수 중에서 i의 배수 제거 (i 제외)
4. 2 ~ 3 과정 반복

```python
for i in range(2, int(math.sqrt(n))+1):
    if array[i] == True:
        j = 2
        while i * j <= n:
            array[i*j] = False
            j+=1
```
* `array[i]`는 초기에 반드시 True이므로, `j = 2`부터 `i * j`가 `n`값 이하일 때까지 `array[i * j]`를 False로 바꾸고 `j`를 1개씩 올림

```python
for i in range(2,n+1):
    if array[i]:
        answer.append(i)
```
* `i`의 배수를 전부 없애고, for문을 이용해 2부터 `n까지 수 중에서 True값으로 남은 것을 배열에 저장
