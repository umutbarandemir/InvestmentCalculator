import React from 'react'

const ResultList = () => {
  return (
   <table id='result'>
    <thead>
        <tr> {/* tr = row */}
            <th> Year </th> {/* th = header cell, yani başlık*/}
            <th> InvestmentValue </th>
            <th> Interest (Year) </th>
            <th> Total Interest </th>
            <th> Invested Capital </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td> {/* data cell */}
            1
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
        <tr>
            <td> {/* data cell */}
            1
            </td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
        </tr>
    </tbody>
   </table>
  )
}

export default ResultList