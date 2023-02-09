def solution(i, j, k):
    answer = 0
    arr = ''
    for count in range(i, j + 1):
        if str(k) in str(count):
            arr += str(count)
    
    for i in arr:
        if i == str(k):
            answer += 1
    return answer