def solution(polynomial):
    answer = ''
    num = num_x = 0
    
    arr = polynomial.split(" ")
    
    for i in arr:
        if 'x' in i:
            if i == 'x':
                num_x += 1
            else:
                new_i = i.replace('x','')
                num_x += int(new_i)
                
        elif i != '+':
            num += int(i)
        
    if num_x > 1:
        if num != 0:
            answer = str(num_x) + 'x + ' + str(num)
        else:
            answer = str(num_x) + 'x'
    elif num_x == 0:
        answer = str(num)
    elif num_x == 1:
        if num != 0:
            answer = 'x + ' + str(num)
        else:
            answer = 'x'
        
    return answer