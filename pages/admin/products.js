import AdminLayout from "../../components/admin/AdminLayout";
import Table from "react-bootstrap/Table";
import Link from "next/link";

export default function Products() {
    return (
        <AdminLayout>
            <h1>Products</h1>
            <Link href={''}><a className='btn btn-success'>Добавить</a></Link>
            <Table striped bordered>
                <thead>
                <tr>
                    <th></th>
                    <th>Название</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <Link href={''}><a>Изменить</a></Link>
                    </td>
                    <td>Костный материал THE Graft Granule (0,5g)</td>
                    <td>
                        <Link href={''}><a>Удалить</a></Link>
                    </td>
                </tr>
                </tbody>
            </Table>
        </AdminLayout>
    )
}
