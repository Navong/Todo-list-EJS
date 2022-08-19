
exports.getDate =  ()=>{
    const currentDate = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    return currentDate.toLocaleDateString('en-US', options);
}

exports.getDay = ()=>{
    const currentDate = new Date();

    const options = {
        weekday: "long",
    }

    return currentDate.toLocaleDateString('en-US', options);
}