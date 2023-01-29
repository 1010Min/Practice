def solution(my_string):
    arr = []
    answer = ''
    
    for i in my_string:
        if i not in arr:
            arr.append(i)
            answer += i
    
    return answer