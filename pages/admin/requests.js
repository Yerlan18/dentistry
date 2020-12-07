import AdminLayout from "../../components/admin/AdminLayout";
import Table from "react-bootstrap/Table";
// import requestService from "../../services/request.service"
import React from "react";
import axios from "axios";

class Requests extends React.Component {

    state = {
        requests: []
    }

    componentDidMount() {
        const API_URL = "http://uniondental.kz/api/getAppointments";
        axios.get(API_URL, {headers: {Authorization: localStorage.getItem('authtoken')}}).then(
            response => {
                const requests = response.data;
                this.setState({requests})
                console.log('response',requests)
            }
        )
    }

    renderTableData(){
        return this.state.requests.map((req, index) => {
            return (
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{req.FIO}</td>
                    <td>{req.PhoneNumber}</td>
                    <td>{req.VisitDate}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <AdminLayout>
                <h1>Заявки</h1>
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>ФИО</th>
                        <th>Телефон</th>
                        <th>Желаемая дата</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </Table>
            </AdminLayout>
        )
    }
}

export default Requests

