import Link from 'next/link'
import { GoMarkGithub } from 'react-icons/go';
import { RiInstagramFill } from 'react-icons/ri';
import { GrLinkedin } from 'react-icons/gr';
import { FaDev } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="site-container py-6">
            <nav className='relative  flex space-x-5'>
                <Link href="/">
                    <a>Hakkımda</a>
                </Link>
                <Link href="/blog">
                    <a>Blog</a>
                </Link>
                <Link href="https://github.com/teomanyalcinoz">
                    <a className="text-xl absolute inset-y-0 right-0 "><GoMarkGithub /></a>
                </Link>
                <Link href="https://www.instagram.com/teomanyalcinoz/">
                    <a className="text-xl absolute inset-y-0 right-8 "><RiInstagramFill /></a>
                </Link>
                <Link href="https://www.linkedin.com/in/teoman-yalçınöz-215397198/">
                    <a className="text-xl absolute inset-y-0 right-16 "><GrLinkedin /></a>
                </Link>
                <Link href="https://dev.to/teomanyalcinoz">
                    <a className="text-xl absolute inset-y-0 right-24 ">< FaDev /></a>
                </Link>
            </nav>
        </header>
    )
}