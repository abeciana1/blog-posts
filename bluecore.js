//! Question #1

//! a0 = 16
//! a1 = 1^2 + 6^2 = 37
//! a2 = 3^2 + 7^2 = 58
//! a3 = 5^2 + 8^2 = 89
//! a4 = 8^2 + 9^2 = 145
//! a5 = 1^2 + 4^2 + 5^2 = 42
//! a6 = 4^2 + 2^2 = 20
//! a7 = 2^2 + 0^2 = 4

const strangeSequenceSolver = (num) => {
    let numString = num.toString() //* convert to string for looping 
    let numArr = [] //* store squared results from loop

    if (num.length === 1) {
        Math.pow(num, 2);
    } else if (num === 16) { //* brute force idea of solving a0 
        //* forgot algebraic expression to solve this
        let sixteen = Array.from(num.toString()).map(Number);
        let squareResult = sixteen[1] * sixteen[1]
        let squareArr = Array.from(squareResult.toString()).map(Number);
        return squareArr.reduce((a, b) => a + b) //* 9
    } else {
        let result;
        for (let i = 0; i < numString.length; i++) {
            numArr.push(Math.pow(parseInt(numString[i]), 2));
        }
        result = numArr.reduce((acc, ele) => acc + ele) //* reduce elements and use addition
        // console.log(result)
        // return result
        console.log(strangeSequenceSolver(result))
        strangeSequenceSolver(result)
    }
}

// strangeSequenceSolver(37);
// strangeSequenceSolver(4);
strangeSequenceSolver(16);

//! Question #2

//! [4, 2, 1, 8, 3] & [8, 3, 0, 1, 6]
//! [(5, 5, 2, 0, 9, 3, 2, 4)] & [5, 1, 8, 4, 9, 2, 0, 0]
//! [3] & [8];

const lockPicker = (currentPosition, unlockedPosition) => {

    let numberRotations = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] //* used in loop inside if statement 

    rotationAccumulator = []

    for (let i = 0; i < currentPosition.length; i++) {
        let forwardRotation = unlockedPosition[i] - currentPosition[i] 
        let backwardRotation = currentPosition[i] - unlockedPosition[i]

        if (Math.abs(forwardRotation) <= 5) { //* rotationAccumulator = [3, 1]
            rotationAccumulator.push(Math.abs(forwardRotation));
        } else { //* invokes when the rotation number is more than 5
            // console.log(backwardRotation)
            rotationAccumulator.push(
            numberRotations.length - Math.abs(backwardRotation)
            ); //* equation results in 2 and pushes to rotationAccumulator
            //* needed to find a way to repeat array 
        }
    }
    console.log(rotationAccumulator)
    let result = rotationAccumulator.reduce((acc, ele) => acc + ele) //* reduce elements and use addition
    console.log(result)
    return result
}

// locked = [0, 0, 0]
// unlockedPos = [3, 1, 8]; 

// lockPicker(locked, unlockedPos)
// lockPicker([4, 2, 1, 8, 3], [8, 3, 0, 1, 6]);

//! Question #3

//! Starting point: ['*', '#', '+']
//! Unlocking combination: ['+', 'i', '{\}']
//! Character set: ['!', '+', '*', ')', 'i', '=', '{\}', '#']

const alienLockPicker = (currentPosition, unlockedPosition) => {

    characterSet = ["!", "+", "*", ')', "i", "=", "{\}", "#"];

    rotationAccumulator = [];

    for (let i = 0; i < currentPosition.length; i++) {
        let forwardRotation =
            characterSet.indexOf(unlockedPosition[i]) - characterSet.indexOf(currentPosition[i]);
        let backwardRotation =
            characterSet.indexOf(currentPosition[i]) - characterSet.indexOf(unlockedPosition[i]);
        // console.log(forwardRotation)
        //* finding number via array.indexOf function

        if (Math.abs(forwardRotation) < 5) {
    //     //* rotationAccumulator = [3, 1]
        rotationAccumulator.push(Math.abs(forwardRotation));
        } else {
    //     //* invokes when the rotation number is more than 5
        // console.log(backwardRotation)
        rotationAccumulator.push(
            characterSet.length - Math.abs(backwardRotation)
        ); //* equation results in 2 and pushes to rotationAccumulator
    //     //* needed to find a way to repeat array
        }
    }
    // console.log(rotationAccumulator);
    let result = rotationAccumulator.reduce((acc, ele) => acc + ele); //* reduce elements and use addition
    // console.log(result);
    return result;
};

// locked = ["*", "#", "+"];
// unlocked = ["+", "i", "{\}"];

// alienLockPicker(locked, unlocked)