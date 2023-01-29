def solution(s):
    arr = []
    answer = 0
    
    arr = s.split(" ")
        
    for i in range(len(arr)):
        if arr[i] == 'Z': 
            answer -= int(arr[i-1])
        else: answer += int(arr[i])
        
    return answer