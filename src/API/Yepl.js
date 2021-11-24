import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization : "Bearer FHiKrmkjK20tHjqLKvSipqiH4Lkdbtb2HIRFk-17HQRkIKduCNKlu8uH7jxG3jeIwV5DlTW85FuyrtyfJBm_pY-I4aO-8D2oATlEddCczNHPzz9dknEBUOLgMXLoXnYx"
    }
});