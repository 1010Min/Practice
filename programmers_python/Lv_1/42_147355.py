def solution(t, p):
    answer = 0
    length = len(p)
    tt = []
    
    tt = [t[i : i + length] for i in range(0, len(t))]
    
    for i in tt:
        if i <= p and len(i) == len(p):
            answer += 1
    
    return answer