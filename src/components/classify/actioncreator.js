export default {
    gatData(){
        return {
            type: 'CLASSIFY',
        }
    },
    gatDataChild(data){
        return {
            type: 'CLASSIFYCHLID',
            data
        }
    }
}