def solution(id_pw, db):
    answer = "fail"
    
    for id, pw in db:
        if id_pw[0] == id:
            if id_pw[1] == pw:
                answer = "login"
            else:
                answer = "wrong pw"
                
    return answer