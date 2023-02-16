def solution(a, b):
    answer = ''
    days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    weeks = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU']
    temp = 0
    
    for i in range(a - 1):
        temp += days[i]
        
    temp += (b - 1)
    temp %= 7
    answer = weeks[temp]

    return answer