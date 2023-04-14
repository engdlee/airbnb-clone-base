'use client';

import Container from '@/app/components/Container';
import Categories from '@/app/components/navbar/Categories';
import Logo from '@/app/components/navbar/Logo';
import Search from '@/app/components/navbar/Search';
import UserMenu from '@/app/components/navbar/UserMenu';
import { SafeUser } from '@/app/types';

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
    return (
        <div className="fixed z-10 w-full bg-white shadow-sm">
            <div className="py-4 border-b">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <Logo />
                        <Search />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    );
};

export default Navbar;
