def solution(x, n):
    answer = []
    inc = x
    
    for i in range(n):
        answer.append(x)
        x += inc
    
    return answer