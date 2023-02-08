def solution(score):
    answer = []
    
    b = [(i[1] + i[0]) / 2 for i in score]
    arr_sort = sorted(b, reverse = True)
    
    for i in b:
        answer.append(arr_sort.index(i) + 1)
    
    return answer