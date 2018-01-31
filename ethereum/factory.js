import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface), // Contract interface
    '0x87a095001820Dbd889261A6cC8024d3137C2C6C8' // Contract address on network
);

export default instance;