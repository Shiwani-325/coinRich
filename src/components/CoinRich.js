import React from 'react'
import './rich.css'
export default function CoinRich() {
    const data = [
        { id: 1, name: 'Cardano', up: '3.95%', sort: 'ada', price: "$1.08", rank: '7' },
        { id: 1, name: 'Cosmos', up: '5.43%', sort: 'atom', price: "$28.57", rank: '21' },
        { id: 1, name: 'Bitcoin Cash', up: '0.95%', sort: 'bch', price: "$338.66", rank: '27' },
        { id: 1, name: 'BNB', down: '2.92%', sort: 'bnb', price: "$428.57", rank: '4' },
        { id: 1, name: 'BitCoin', up: '3.95%', sort: 'btc', price: "$44236.92", rank: '1' }
    ]
  return (
    <div className="container1">
        <div className="header">CoinRich</div>
        <div className="chart">
            <div className='showChart'><i className="fa-solid fa-chart-pie"></i><span style={{marginLeft: "10px"}}>Show Chart</span></div>
            <div className='count'>Count: 5</div>
        </div>
        { data?.map(item => (
            <div className="card">
            <div className='firstHead'>
                <span className='heading'>{item.name}</span>
                <span><i className={`fa-solid ${item.up ? "fa-arrow-up" : "fa-arrow-down"}`} style={{marginRight: "5px", color:item.up ? "green" : "red"}}/>{item.up || item.down}</span>
                <span className='endText'>{item.sort}</span>
            </div>
            <div className='secondHead'>
                <span className=''>{`Price ${item.price}`}</span>
                <span className=''>{`Price ${item.rank}`}</span>
                <span className='btn'><i className="fa-solid fa-arrow-right" style={{ color:"black"}}/></span>
            </div>
        </div>
        ))}
    </div>
  )
}