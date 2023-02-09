def solution(s):
    answer = ''
    arr = sorted(s, reverse=True)
    
    for i in arr:
        answer += i
    
    return answer