import { email } from 'react-native-communications';

const emailHotel = hotelName =>
    email(['reservations@flexitechsolutions.co.uk'], null, null, `${hotelName} enquiry`, '');


export default {
    emailHotel,
};
