import React from "react";
import axios from "axios";

class Form extends React.Component{
    state = {
        fio: '',
        phoneNumber: '',
        visitDate: ''
    }

    change = (e) => {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3000/api/appointment', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {fio, phoneNumber, visitDate} = this.state
        return (
            <section id="contact-us">
                <div className="container px-sm-3 px-0">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1">
                            <div className="contact-us">
                                <img src="img/form-bg.png" alt=""/>
                                <div className="form">
                                    <p>Записаться на прием</p>
                                    <form className="contact-form" id="contactForm" onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="fio" value={fio} id="fio"
                                                   onChange={this.change}
                                                   placeholder="Ваше ФИО" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" className="form-control" name="phoneNumber" value={phoneNumber} id="tel"
                                                   onChange={this.change}
                                                   placeholder="Телефон" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="visitDate" value={visitDate} id="date"
                                                   onChange={this.change}
                                                   placeholder="Желаемая дата посещения" required/>
                                        </div>
                                        <button type="submit" className="btn-brand">
                                        <span className="_preloader">
                                            <span className="sr-only">Loading...</span>
                                        </span>
                                            Записаться
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    /*componentDidUpdate() {
        console.log(this.state)
    }*/
}
export default Form
