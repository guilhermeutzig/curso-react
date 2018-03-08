const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
// New serve para trazer os novos dados em um update, o runValidators é para validar os itens do comando put
BillingCycle.updateOptions({ new: true, runValidators: true })

// Aplica o JSON separado apenas com os erros retornados do serviço
BillingCycle.after('post', errorHandler).after('put', errorHandler)

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})

BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate({
        $project: {
            credit: {$sum: "$credits.value"},
            debt: {$sum: "$debts.value"}
        }
    }, {
        $group: {
            _id: null,
            credit: {$sum: "$credit"},
            debt: {$sum: "$debt"}
        }
    }, {
        $project: {
            _id: 0,
            credit: 1,
            debt: 1
        }
    }, (error, result) => {
        if (error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})

module.exports = BillingCycle