from collections import Counter

def solution(nums):
    N = len(nums) // 2
    count_dict = Counter(nums)
    
    if len(count_dict) > N:
        answer = N
    else:
        answer = len(count_dict)

    return answer