import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'


export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname]);

    return null;

}