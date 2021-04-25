class DateHelper {

    static getReadableDateFromTimestamp(timestamp) {
        const date = new Date(timestamp)
        
        const year = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
        const month = new Intl.DateTimeFormat('fr', { month: '2-digit' }).format(date)
        const day = new Intl.DateTimeFormat('fr', { day: '2-digit' }).format(date)
        const hour = new Intl.DateTimeFormat('fr', { hour: '2-digit' }).format(date)
        let minute = new Intl.DateTimeFormat('fr', { minute: '2-digit' }).format(date)
        minute = minute < 10 ? '0' + minute : minute

        return `${day}/${month}/${year} à ${hour.substr(0, 2)}:${minute}`
    }

}

export default DateHelper