export default function pyramidEsc(number) {
    for (let i = 1; i <= number; i++) {
        let space = number
        console.log(" ".repeat(space - i) + "*".repeat(i));
    }

}