import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestUserData } from '../../redux/userReducer'
import { requestBudgetData } from '../../redux/budgetReducer'
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
    return (
      <Background>
        {true ? <Loading /> : null}
        <div className='budget-container'>
          <Nav />
          <div className='content-container'>
            <div className="purchases-container">
              <AddPurchase />
              <DisplayPurchases />
            </div>
            <div className='chart-container'>
              <Chart1 />
              <Chart2 />
            </div>
          </div>
        </div>
      </Background>
    )
  }
}

const mapStateToProps = (reduxState) => ({ budget: reduxState.budget, user: reduxState.user });

export default connect(mapStateToProps, { requestUserData, requestBudgetData })(Budget);
