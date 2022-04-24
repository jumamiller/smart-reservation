import moment from "moment/moment";
export default {
    getEntryDateFormat(date) {
        return moment(date).format("Do dddd, MMM YYYY hh:mm:ss a");
    },
    getDateTimeFormat(date) {
        return moment(date).format("Do ddd, hh:mm:ss a");
    },

    getDateFormat(date) {
        return moment(date).format("Do ddd, MMM YYYY");
    },

    getTimeFormat(time) {
        return moment(time, "HH:mm:ss").format("hh:mm A");
    }
}