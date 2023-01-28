def solution(n):
    prime = set()
    i = 2
    
    while i <= n:
        if n % i == 0:
            prime.add(i)
            n = n // i
        else:
            i += 1
    answer = list(prime)
    answer.sort()
    
    return answer