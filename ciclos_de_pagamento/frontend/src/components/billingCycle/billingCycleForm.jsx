import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './billingCycleActions'
import labelAndInput from '../../common/form/labelAndInput'
import Row from '../../common/layout/row'

class BillingCycleForm extends Component {

	render() {

		const { handleSubmit } = this.props

		return (
			<form role='form' onSubmit={handleSubmit}>
				<div className='box-body'>
					<Row>
						<Field name='name' component={labelAndInput} 
							label='Nome' cols='12 4' placeholder='Informe o nome' />
						<Field name='month' component={labelAndInput} 
							label='Mês' cols='12 4' placeholder='Informe o mês' />
						<Field name='year' component={labelAndInput} 
							label='Ano' cols='12 4' placeholder='Informe o ano' />
					</Row>
				</div>
				<div className='box-footer'>
					<button type='submit' className='btn btn-primary'>Submit</button>
					<button type='button' className='btn btn-default'
						onClick={this.props.init}>Cancel</button>
				</div>
			</form>
		)
	}

}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycleForm)