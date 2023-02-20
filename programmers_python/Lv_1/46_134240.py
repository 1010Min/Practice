def solution(food):
    answer = ''
    front = back = ''
    arr = []
    
    for i in range(len(food)):
        for j in range(food[i] // 2):
            front += str(i)
    
    arr = sorted(str(front), reverse = True)
    
    for i in arr:
        back += str(i)
    
    answer += front + str(0) + back
    
    return answer