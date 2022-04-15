function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === elem ? middle : -1;
}

function binarySearchAlt(arr, val) {
    let left = 0,
        right = arr.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] === val) return mid;
        else if (arr[mid] > val) right = mid - 1;
        else left = mid + 1;
    }
    return -1;
}
