def solution(keyinput, board):
    answer = []
    x = y = 0
    max_up = int((board[1] - 1) / 2)
    max_down = int(-(board[1] - 1) / 2)
    max_right = int((board[0] - 1) / 2)
    max_left  = int(-(board[0] - 1) / 2)
    
    for i in keyinput:
        if i == 'left':
            x -= 1
            if x < max_left: 
                x = max_left
        elif i == 'right':
            x += 1
            if x > max_right:
                x = max_right
        elif i == 'up':
            y += 1
            if y > max_up:
                y = max_up
        elif i == 'down':
            y -= 1
            if y < max_down:
                y = max_down
                    
    answer = [x, y]
    
    return answer