def solution(quiz):
    answer = []
    arr = [[0 for j in range(5)] for i in range(len(quiz))]
    
    for i in range(len(quiz)):
        arr[i] = quiz[i].split(" ")
        if arr[i][1] == '-':
            if int(arr[i][0]) - int(arr[i][2]) == int(arr[i][4]):
                answer.append("O")
            else: answer.append("X")
        elif arr[i][1] == '+':
            if int(arr[i][0]) + int(arr[i][2]) == int(arr[i][4]):
                answer.append("O")
            else: answer.append("X")
    
    return answer