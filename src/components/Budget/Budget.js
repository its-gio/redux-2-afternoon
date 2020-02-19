import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer'
import { requestBudgetData, addPurchase, removePurchase } from '../../redux/budgetReducer'
import Background from './../shared/Background/Background';
import Chart1 from './../shared/Chart1';
import Chart2 from './../shared/Chart2';
import AddPurchase from './../shared/AddPurchase';
import DisplayPurchases from './../shared/DisplayPurchases';
import Loading from './../shared/Loading/Loading';
import Nav from './../shared/Nav';
import './Budget.css';


class Budget extends Component {
  componentDidMount() {
    this.props.requestUserData();
    this.props.requestBudgetData();
  }

  render() {
    const { budget, user, addPurchase, removePurchase } = this.props
    return (
      <Background>
        {budget.loading ? <Loading /> : null}
        <div className='budget-container'>
          <Nav firstName={user.firstName}  lastName={user.lastName}/>
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase addPurchase={addPurchase} />
              <DisplayPurchases purchases={budget.purchases} removePurchase={removePurchase} />
            </div>
            <div className='chart-container'>
              <Chart1 purchases={budget.purchases} budgetLimit={budget.budgetLimit} />
              <Chart2 purchases={budget.purchases} />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

const mapStateToProps = (reduxState) => ({ budget: reduxState.budget, user: reduxState.user });

export default connect(mapStateToProps, { requestUserData, requestBudgetData, addPurchase, removePurchase })(Budget);
