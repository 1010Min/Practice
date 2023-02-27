from itertools import combinations

def is_prime(num):
    if num == 0 or num == 1:
        return False
    else:
        for n in range(2, (num // 2) + 1):
            if num % n == 0:
                return False
        return True

def solution(nums):
    answer = 0
    combi = list(combinations(nums, 3))
    
    for j in combi:
        if is_prime(sum(j)):
            answer += 1

    return answer