def solution(s, n):
    answer = ''
    
    for i in s:
        if 65 <= ord(i) <= 90:
            print("대문자")
            if 90 < ord(i) + n:
                answer += chr(65 + ((ord(i) + n)) - 91)
            else:
                answer += chr(ord(i) + n)
                
        elif 97 <= ord(i) <= 122:
            print("소문자")
            if ord(i) + n > 122:
                answer += chr(97 + ((ord(i) + n)) - 123)
            else:
                answer += chr(ord(i) + n)
                
        elif i == " ":
            answer += " "
    
    return answer