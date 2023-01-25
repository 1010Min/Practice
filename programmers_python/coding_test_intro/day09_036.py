def solution(balls, share):
    total = total2 = 1
    share2 = 0
    
    for ball in range(balls, 0, -1):
        total *= ball
        share2 += 1
        if share2 == share : break
    
    for shares in range(share, 0, -1):
        total2 *= shares
            
    answer = total//total2
    
    return answer