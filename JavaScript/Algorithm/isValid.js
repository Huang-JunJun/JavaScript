const isValid = (str) => {
    if (!str)
    return;
    const leftToRight = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    const stack = []

    for (let i = 0, len = s.length; i < len; i++) {
        const ch = s[i]

        if (leftToRight[ch]) {
            stack.push(ch)
        } else {
            if (!stack.length || leftToRight[stack.pop()] !== ch) {
                return false
            }
        }
    }

    return !stack.length
}