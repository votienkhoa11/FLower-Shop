export const formatDate = (rawDate, formatType) => {
    const formatedDate = new Date(rawDate);

    const year = formatedDate.getFullYear();

    const month = formatedDate.getMonth() + 1;
    month < 10 ? `0${month}` : month;

    const day = formatedDate.getDate();
    day < 10 ? `0${day}` : day;

    const hour = formatedDate.getHours() + 1;
    hour < 10 ? `0${hour}` : hour;

    const minute = formatedDate.getMinutes();
    minute < 10 ? `0${minute}` : minute;

    return formatType === 'review' ?
        `${day}/${month}/${year} ${hour}:${minute}` :
        formatType === 'order' ?
        `${hour}:${minute} - ${day}/${month}/${year}` : null;
};
