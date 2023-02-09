def solution(n):
    answer = -1
    
    if n // int(n**(1/2)) == int(n**(1/2)) and n % int(n**(1/2)) == 0:
        answer = (int(n**(1/2))+1)*(int(n**(1/2))+1)
    
    return answer