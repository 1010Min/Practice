def solution(spell, dic):
    answer = 0
    for i in dic:
        if len(i) == len(spell):
            answer += 1
            for c in spell:
                if not c in i:
                    answer -= 1
                    break

    return 2 if answer == 0 else answer


