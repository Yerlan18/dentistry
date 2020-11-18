import AdminLayout from "../../components/admin/AdminLayout";
import Table from "react-bootstrap/Table";
import Link from "next/link";

export default function Requests() {
    return (
        <AdminLayout>
            <h1>Requests</h1>
            <Table striped bordered>
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Телефон</th>
                    <th>Желаемая дата</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Сыдыков Дархан</td>
                    <td>+7 (777) 777 7777</td>
                    <td>Послезавтра</td>
                </tr>
                </tbody>
            </Table>
        </AdminLayout>
    )
}
