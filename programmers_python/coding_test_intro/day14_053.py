def solution(array, n):
    answer = 0
    check = 0
    array.sort()
    
    for i in range(len(array)):
        if array[i] > n:
            check = array[i-1]
            if n - check > array[i] - n:
                answer = array[i]
                break
            else: 
                answer = check
                break
        else: 
            answer = array[len(array) - 1]
    
    return answer