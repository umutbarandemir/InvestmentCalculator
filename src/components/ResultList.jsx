import React from 'react';
import {calculateInvestmentResults , formatter} from "../util/investment.js";

const ResultList = (props) => {
    // console.log(props.resultsValues);

    const values = calculateInvestmentResults(props.resultsValues);
    const initialInvestment = values[0].valueEndOfYear - values[0].interest - values[0].annualInvestment;

  return (
    <table id="result">
    <thead>
        <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </tr>
    </thead>
    <tbody>
        {values.map((data) => {
            const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
            const totalAmountInvested = data.valueEndOfYear - totalInterest;

            return (
                <tr key={data.year}>
                    <td>{data.year}</td>
                    <td>{formatter.format(data.valueEndOfYear)}</td>
                    <td>{formatter.format(data.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            );
        })}
    </tbody>
</table>
  )
}

export default ResultList