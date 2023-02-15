def solution(n, arr1, arr2):
    answer = []
    
    for i in range(n):
        a = bin(arr1[i] | arr2[i]).replace('0b',"").zfill(n)
        b = a.replace("1", "#").replace("0", " ")
        answer.append(b)
        
    return answer