const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}

console.log("===============================================")

for (let sub of subreddits) {
    console.log(`Visit reddit.com/r/${sub}`);    
}

console.log("===============================================")

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

console.log("===============================================")

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

console.log("===============================================")

for (let char of 'hello world') {
    console.log(char);
}
