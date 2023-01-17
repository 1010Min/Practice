from collections import Counter

def solution(array):
    counter = Counter(array).most_common()
    
    if len(counter) > 1:
        if counter[0][1] == counter[1][1]:
            answer = -1
        else:
            answer = counter[0][0]
    else:
     answer = counter[0][0]
                                
    return answer