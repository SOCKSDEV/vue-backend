
export class itemCardModel {
    getItemCarInfo() {
        return new Promise(function (resolve, reject) {
            var response = [{ "id": "001", "name": "name1" }, { "id": "002", "name": "name2" }]
            resolve(response)
        })


    }
    getItemList() {
        return new Promise(function (resolve, reject) {
            var response = [{ "listId": "list001", "name": "listName1" }, { "listId": "list001", "name": "listName2" }]
            resolve(response)
        })


    }
}