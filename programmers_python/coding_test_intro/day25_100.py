def solution (common):
    gap_1 = common[1] - common[0]
    gap_2 = common[2] - common[1]
    
    if gap_2 == gap_1:
        result = common[-1] + gap_2
        
    else:
        gap_3 = common[2] / common[1]
        result = common[-1] * gap_3
        
    return result