def solution(s):
    count = [0 for i in range(97, 123)]
    answer = ''
    
    for i in s:
        count[ord(i) - 97] += 1
    
    for i in range(len(count)):
        if count[i] == 1:
            answer += chr(i+97)
    
    return answer