// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    let newDriver = Object.assign({}, driver);
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}

// destructivelyDeleteFromDriverByKey() - this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. Be sure and consider whether dot-notation or bracket-notation might affect your solution.