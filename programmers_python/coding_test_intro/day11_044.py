def solution(n):
    answer = 0
    pact = 1
    
    for i in range(1, 11):
        pact *= i
        if(pact >= n):
            if(pact == n): answer = i
            else: answer = i -1
            break
    
    return answer