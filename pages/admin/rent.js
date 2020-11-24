import AdminLayout from "../../components/admin/AdminLayout";
import Table from "react-bootstrap/Table";
import Link from "next/link";

export default function Rent() {
    return (
        <AdminLayout>
            <h1>Rent</h1>
            <Link href={''}><a className='btn btn-success'>Добавить</a></Link>
            <Table striped bordered>
                <thead>
                <tr>
                    <th>Название</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Хирургический шовный материал Silk 3-0</td>
                    <td>
                        <Link href={''}><a>Удалить</a></Link>
                    </td>
                </tr>
                </tbody>
            </Table>
        </AdminLayout>
    )
}
