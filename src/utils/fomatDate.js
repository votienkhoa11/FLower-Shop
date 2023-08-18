export const formatDate = (rawDate, formatType) => {
    let formatedDate = new Date(rawDate);

    let year = formatedDate.getFullYear();

    let month = formatedDate.getMonth() + 1;
    month = month < 10 ? `0${month}` : month;

    let day = formatedDate.getDate();
    day = day < 10 ? `0${day}` : day;

    let hour = formatedDate.getHours() + 1;
    hour = hour < 10 ? `0${hour}` : hour;

    let minute = formatedDate.getMinutes();
    minute = minute < 10 ? `0${minute}` : minute;

    return formatType === 'review' ?
        `${day}/${month}/${year} ${hour}:${minute}` :
        formatType === 'order' ?
        `${hour}:${minute} - ${day}/${month}/${year}` : null;
};