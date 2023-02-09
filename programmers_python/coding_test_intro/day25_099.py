def solution(num, total):
    answer = []
    count = 0
    
    for i in range(1, num):
        count += i
    
    first = int((total - count) / num)
    
    for i in range(first, first+num):
        answer.append(i)
    
    return answer