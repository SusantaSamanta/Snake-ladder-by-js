const fun3 = async() => {
    console.log("Waiting for 5sc.....");
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hello 3rd time");
            resolve();
        }, 5000);
    })
}

const fun2 = async() => {
    await fun3();
    console.log("Hello 2nd time");
    await fun2_5();
}
const fun2_5 = async() => {
    console.log("Hello 2.5nd time");
    console.log("Waiting for 5sc.....");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000);
    })
}

const fun1 = async() => {
    await fun2();
    console.log("Hello 1st time");
}

fun1();