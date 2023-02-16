def solution(s):
    dictionary = {"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9}
    answer = 0
    
    for x, y in dictionary.items():
        s = s.replace(x, str(y))
        
    answer = int(s)
    
    return answer