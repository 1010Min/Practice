def solution(n):
    answer = 0
    k = int(n ** (1/2))
    
    for i in range(1, k+1):
        if n / i == i:
            answer = 1
        else: 
            answer = 2
    
    return answer