def solution(array):
    answer = 0
    num = ''
    
    for i in array:
        num += str(i)
    
    for i in num[0:]:
        if i == '7':
            answer += 1
    
    return answer