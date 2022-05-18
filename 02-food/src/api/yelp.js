import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer WDpJSlp2MF__rEokPYNpWcPEeHBO98eP1CM8xKbq1xaezns3zMAED1N11XZ121_K31ROnv2YSdbzhZ0lwQhw1o1DPG7HeYF5LYVLjna38O3vN9zOYl7_xzp7TLqEYnYx'
    }
})