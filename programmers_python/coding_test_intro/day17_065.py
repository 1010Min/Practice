def solution(num, k):
    answer = 0
    arr = list(map(int, str(num)))
    
    for i in range(len(arr)):
        if arr[i] == k:
            answer = i+1
            break
        else:
            answer = -1
    
    return answer