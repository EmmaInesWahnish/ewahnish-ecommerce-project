import FileContainer from '../../api/FileContainer.js';

class OrdersDaoFiles extends FileContainer {

    constructor() {
        super('./DB/order.json')
    }

    async disconnect() {

    }
}

export default OrdersDaoFiles;