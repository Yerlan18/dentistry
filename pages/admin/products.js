import AdminLayout from "../../components/admin/AdminLayout";
import Table from "react-bootstrap/Table";
import Link from "next/link";

export default function Products() {
    return (
        <AdminLayout>
            <h1>Продукция</h1>
            <Link href={'/admin/products/add'}><a className='btn btn-success'>Добавить</a></Link>
            <Table striped bordered>
                <thead>
                <tr>
                    <th>Название</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
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
