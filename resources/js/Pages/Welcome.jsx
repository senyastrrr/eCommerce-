import Header from '@/Components/Header/Header';
import Carousel from '../Components/Carousel/Carousel';
import { Link, Head } from '@inertiajs/react';
import { BrowserRouter } from 'react-router-dom';

export default function Welcome({ auth }) {
    return (
        <>
            <BrowserRouter>
                    <Header />
                    <Carousel />
            </BrowserRouter>
        </>
    );
}
