import moment from 'moment';

function DateFormat(props){


    let date = moment(props.date).format('DD MMM, YYYY');

    return <span className="">{date}</span>


}

export default DateFormat;