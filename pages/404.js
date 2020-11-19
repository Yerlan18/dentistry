import {MainLayout} from "../components/MainLayout";
import Link from "next/link";

export default function ErrorPage() {
    return (
        <MainLayout>
            <section id="error_page">
                <div className="container">
                    <h1>Ошибка</h1>
                    <h2>Страница не найдена</h2>
                    <p>Перейти на <Link href={'/'}><a>главную</a></Link> страницу.</p>
                </div>
            </section>
        </MainLayout>
    )
}
