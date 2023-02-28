def solution(N, stages):
    answer = []
    num = len(stages)
    count_arr = {}
    
    for i in range(1, N + 1):
        if num != 0:
            count_arr[i] = stages.count(i) / num
            num -= stages.count(i)
        else:
            count_arr[i] = 0
            
    answer = sorted(count_arr, key=lambda x: -count_arr[x])
    print(answer)
        
    return answer

"""
def solution(N, stages):
    count = 0
    count_up = []
    count_down = []
    count_arr = [[]]
    answer = [0] * N
    stage = 1
    
    for i in range(N):
        count_up.append(stages.count(i + 1))
        for j in stages:
            if j >= (i + 1):
                count += 1
        count_down.append(count)
        count = 0
    
    
    for i in range(len(count_up)):
        count_arr.append([i, (count_up[i]) / count_down[i]])
        
    count_arr = count_arr[1:]
    count_arr.sort(key=lambda x: -x[1])
    print(count_arr)
    n = 0
    
    for i,j in count_arr:
        answer[n] = i + 1
        n += 1
        
    return answer
"""
