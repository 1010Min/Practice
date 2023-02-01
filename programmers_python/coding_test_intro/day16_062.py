def solution(array):
    answer = []
    num = array[0]
    
    for i in range(1, len(array)):
        if array[i] > num:
            num = array[i]
            answer = [num, i]
    
    return answer