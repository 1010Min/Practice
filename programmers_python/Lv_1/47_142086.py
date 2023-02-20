def solution(s):
    answer = []
    arr = ''
    
    for i in range(len(s)):
        if s[i] in arr:
            answer.append(i - arr.rfind(s[i]))
        else:
            answer.append(-1)
        arr += s[i]
    
    return answer