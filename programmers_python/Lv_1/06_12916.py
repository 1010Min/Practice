def solution(s):
    answer = True
    count_p = count_y = 0
    
    s = s.lower()
    
    for i in s:
        if i == 'p':
            count_p += 1
        elif i == 'y':
            count_y += 1
    
    if count_p == count_y:
        answer= True
    elif count_p != count_y or (count_p == 0 and count_y == 0):
        answer = False
    
    return answer