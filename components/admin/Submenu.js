import {useRouter} from "next/router";
import Link from "next/link";
import AuthService from "../../services/auth.service"

const Submenu = () => {
    const router = useRouter();

    function logout() {
        AuthService.logout()
        router.push('/login');
    }

    return (
        <>
            <section id="left-menu">
                <ul>
                    <li className={router.pathname === "/admin/requests" ? "active" : ""}>
                        <Link href={'/admin/requests'}><a>Заявки</a></Link>
                    </li>
                    <li className={router.pathname === "/admin/products" ? "active" : ""}>
                        <Link href={'/admin/products'}><a>Продукция</a></Link>
                    </li>
                    <li className={router.pathname === "/admin/rent" ? "active" : ""}>
                        <Link href={'/admin/rent'}><a>Аренда</a></Link>
                    </li>
                    <li>
                        <a onClick={logout}>Выход</a>
                    </li>
                </ul>
            </section>
        </>
    )
}
export default Submenu
