def solution(numer1, denom1, numer2, denom2):
    numer3 = numer1*denom2 + numer2*denom1
    denom3 = denom1*denom2
    
    for i in range(denom3+1, 1, -1):
        if denom3%i == 0 and numer3%i == 0:
            denom3 = denom3/i
            numer3 = numer3/i
        else:
            denom3 = denom3
            numer3 = numer3
    
    answer = [numer3, denom3]
    return answer