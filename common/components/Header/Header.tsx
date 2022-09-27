import Link from "next/link";
import Image from "next/image";
import { FunctionComponent } from "react";

import logo from "../../../assets/images/logos/ccvq/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const links = [
    {
        title: "Giới thiệu",
        href: "/",
    },
    {
        title: "Ban tổ chức",
        href: "/",
    },
    {
        title: "Cuộc thi",
        href: "/",
    },
    {
        title: "Liên hệ",
        href: "/",
    },
    {
        title: "Hỗ trợ",
        href: "/",
    },
];

const Header: FunctionComponent = () => {
    return (
        <div className="z-50 fixed inset-x-0">
            <nav className="flex items-center justify-between text-xl bg-[#881716]">
                <div className="pl-12 pr-24 py-3 bg-[#181818]">
                    <Link href="/">
                        <a className="flex items-center place-self-center">
                            <div className="relative inline-flex h-14 w-14">
                                <Image src={logo} alt="CCVQ Logo" layout="fill" objectFit="contain"/>
                            </div>
                            <div className="text-white font-bevietnampro font-bold italic">
                                <div>CUỘC CHIẾN</div>
                                <div className="ml-5">VƯƠNG QUYỀN</div>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className="mr-16 flex items-center justify-self-end text-white font-bevietnampro font-bold">
                    <div className="flex items-center gap-16">
                        {links.map((link, index) => {
                            return (
                                <Link href={link.href}>
                                    <a>
                                        {link.title}
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                    <div className="ml-16">
                        <button className="flex items-center">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-8"/>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;