def solution(my_string, n):
    answer = ''
    word = []
    
    word = [i * n for i in my_string[0:]]
    answer = ''.join(word)
        
    return answer