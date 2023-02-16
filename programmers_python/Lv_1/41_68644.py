from itertools import combinations

def solution(numbers):
    answer = []
    
    combi = list(combinations(numbers, 2))
    
    for i in combi:
        answer.append(sum(i))
        
    answer = sorted(list(set(answer)))
    
    return answer