def solution(sizes):
    answer = 0
    temp = 0
    
    for i in sizes:
        if i[0] > i[1]:
            continue
        else:
            temp= i[1]
            i[1] = i[0]
            i[0] = temp
    
    w = [i[0] for i in sizes]
    h = [i[1] for i in sizes]
    
    answer = max(w) * max(h)
    
    return answer