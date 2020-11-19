import {useRouter} from "next/router";
import Link from "next/link";

const Submenu = () => {
    const router = useRouter();
    return (
        <>
            <section id="left-menu">
                <ul>
                    <li className={router.pathname === "/admin/rent" ? "active" : ""}>
                        <Link href={'/admin/rent'}><a>Аренда</a></Link>
                    </li>
                    <li className={router.pathname === "/admin/products" ? "active" : ""}>
                        <Link href={'/admin/products'}><a>Продукция</a></Link>
                    </li>
                    <li className={router.pathname === "/admin/requests" ? "active" : ""}>
                        <Link href={'/admin/requests'}><a>Заявки</a></Link>
                    </li>
                    <li>
                        <Link href=""><a>Выход</a></Link>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Submenu
