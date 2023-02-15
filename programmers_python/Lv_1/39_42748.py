def solution(array, commands):
    answer = []
    cut_arr = []
    
    for i in range(len(commands)):
        cut_arr = array[commands[i][0]-1: commands[i][1]]
        new_arr = sorted(cut_arr)
        answer.append(new_arr[commands[i][2]-1])
    return answer