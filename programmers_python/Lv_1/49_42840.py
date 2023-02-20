def solution(answers):
    answer = []
    sol1 = [1, 2, 3, 4, 5]
    sol2 = [2, 1, 2, 3, 2, 4, 2, 5]
    sol3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    correct = [0, 0, 0]
    
    for i, v in enumerate(answers):
        if v == sol1[i % 5]:
            correct[0] += 1
        if v == sol2[i % 8]:
            correct[1] += 1
        if v == sol3[i % 10]:
            correct[2] += 1
        
    for i,v in enumerate(correct):           
        if v == max(correct):
            answer.append(i+1)
        
    return answer