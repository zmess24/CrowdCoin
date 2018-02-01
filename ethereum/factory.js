import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), // Contract interface
    '0xdB35D14Aa3412A12427deAd3575715caBb467b6A' // Contract address on network
);

export default instance;