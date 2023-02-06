def solution(sides):
    answer = 0
    sides.sort()
    
    for n in range(1, sides[0] + sides[1] + 1):
        if sides[1] <= n < sides[0] + sides[1]:
            answer += 1
        elif sides[0] <= n < sides[1] and n > sides[1] - sides[0]:
            answer += 1
        elif n <= sides[0] and n > sides[1] - sides[0]:
            answer += 1
       
    return answer