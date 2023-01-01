import {Component} from 'react'
import data from '../resources/FoodData';

export default class FoodBox extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)

        this.state = {
            list : data
        }
    }

    handleChange = (e) => {
        var list = [...this.state.list];
        var updList = []

        list.map(item => {
            for(let i=0; i<e.target.value.length; i++){
                if(e.target.value[i] === item.name[i]) {
                    return updList.push(item)
                }
            }

            if(e.target.value === ''){
                updList = data
            }
        })

        this.setState({
            list : updList
        })
    }

    render(){
        return(
            console.log(this.state.list),
            <div className="box">
                <label htmlFor="search" style={{display : "flex", flexDirection : "column", width : "10%", alignItems : "flex-start", height : "5vh", justifyContent : "space-around"}}>Search<input type="search" name="search" id="search" onChange={this.handleChange}/></label>

                <div className="container" style={{height : "80vh", width : "100%", display : "flex", flexDirection : "column", justifyContent : "flex-start"}}>
                    {this.state.list.map(item => {
                        return (
                            <article>
                                <div className="media">
                                    <div className="media-left">
                                        <img src={item.img} alt='' />
                                    </div>

                                    <div className="media-content">
                                        <div className="content">
                                            <p>
                                            <strong>{item.name}</strong> <br />
                                            <small>{item.cal}</small>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="media-right">
                                        <input className="input" type="number" min="0" max="100" defaultValue="0"/>
                                        <button className="button is-info">+</button>
                                    </div>
                                </div>

                                <div style={{width : "30%", display : "flex", height : "fit-content", justifyContent : "space-evenly", alignItems : "center"}}>
                                    <strong><span>0</span> <span>{item.name}</span> = <span> 0 </span>calories</strong>

                                    <button style={{padding : "5px"}}>Reset</button>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }
}