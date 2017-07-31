const function1 = (req, res, next) => {
    if(req.body._csrf)
        next()
}

const function2 = (req, res, next) => {
    res.send('is Valid')
}

module.exports = {
    function1, function2
}

// Test 2