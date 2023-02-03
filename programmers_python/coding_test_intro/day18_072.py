def solution(my_string):
    answer = ''
    lower = my_string.lower()
    arr = []
    
    for i in lower:
        arr.append(i)
    arr.sort()
    for i in arr:
        answer += i
    
    return answer