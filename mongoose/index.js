
const connect = require('./connect')
const Pate = require('./model/Pate')
connect.then(() => {
    console.log('connect ok rois')
    const pateData = Pate({
        name:'thit ki gion',
        price:500
    })
    pateData.save()
    .then((pate) => {
        console.log(pate)
        pate.feedbacks.push({
            rating:5,
            content:"lice",
            author:'koko'
        })
        return pate.save()
    })
    .then((pates) => {
        console.log(pates)
    })
})
