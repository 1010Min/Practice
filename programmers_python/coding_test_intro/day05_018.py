def solution(money):
    answer = []
    
    drinks = money // 5500
    left = money - drinks * 5500
    
    answer = [drinks, left]
    
    return answer