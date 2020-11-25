import React from "react";
import AdminLayout from "../../../components/admin/AdminLayout";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Add extends React.Component{
    render() {
        return (
            <AdminLayout>
                <h1>Добавить продукт</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Название продукта</Form.Label>
                        <Form.Control type="text" placeholder="Введите название продукта" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.File id="" label="Загрузите изображение" required/>
                    </Form.Group>
                    <Button type="submit">Сохранить</Button>
                </Form>
            </AdminLayout>
        )
    }
}
export default Add
