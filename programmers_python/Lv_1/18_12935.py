def solution(arr):
    answer = []
    mini = min(arr)
    
    if len(arr) == 1:
        answer.append(-1)
    else:
        arr.remove(mini)
        answer = arr
    
    return answer