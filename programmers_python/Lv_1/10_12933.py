def solution(n):
    answer = ''
    arr = sorted(str(n), reverse = True)
    
    for i in arr:
        answer += str(i)
    return int(answer)