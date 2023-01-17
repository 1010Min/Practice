def solution(array):
    array.sort()
    length = len(array)
    answer = array[int(length / 2)]
    return answer