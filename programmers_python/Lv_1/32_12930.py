def solution(s):
    answer = ''
    arr = s.split(" ")
    
    for i in arr:
        i = i.lower()
        for j in range(len(i)):
            if (j+1) % 2 != 0:
                answer += i[j].upper()
            else:
                answer += i[j]
        answer += " "
    
    return answer[:len(answer)-1]