import React from "react";
import axios from "axios";
import {withTranslation} from "../i18n";
import PropTypes from "prop-types";

class Form extends React.Component{
    state = {
        fio: '',
        phoneNumber: '',
        visitDate: '',
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
        document.getElementById('btn').style.display = "none";
        document.getElementById('preloader').style.display = "block";
        axios.post('http://localhost:3000/api/appointment', this.state)
            .then(response => {
                console.log(response)
                document.getElementById('preloader').style.display = "none";
                document.getElementById('btn').style.display = "block";
                document.getElementById('btn').disabled = true;
                document.getElementById('msg').style.display = "block";
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
                                    <p>{this.props.t('form_title')}</p>
                                    <form className="contact-form" id="contactForm" onSubmit={this.submitHandler}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="fio" value={fio} id="fio"
                                                   onChange={this.change}
                                                   placeholder={this.props.t('form_fio')} required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" className="form-control" name="phoneNumber" value={phoneNumber} id="tel"
                                                   onChange={this.change}
                                                   placeholder="Телефон" required/>
                                        </div>
                                        <div className="form-group">
                                            <input type="date" className="form-control" name="visitDate" value={visitDate} id="date"
                                                   onChange={this.change}
                                                   placeholder={this.props.t('form_date')} required/>
                                        </div>
                                        <button type="submit" id="btn" className="btn-brand">
                                            {this.props.t('form_btn')}
                                        </button>
                                        <div id="preloader">
                                            <img src="img/spinner.gif" alt=""/>
                                        </div>
                                        <span id="msg">{this.props.t('form_msg')}</span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
Form.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Form.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Form)
