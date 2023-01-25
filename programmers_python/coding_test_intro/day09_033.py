def solution(hp):
    answer = 0
    big = medium = small = 0
    
    big = hp // 5
    hp -= big*5
    
    medium = hp // 3
    if medium != 0:
        hp -= medium*3
    else: 
        small = hp
        
    small = hp
    
    answer = big + medium + small
    
    return answer