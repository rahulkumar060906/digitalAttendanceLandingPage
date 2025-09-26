import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function useAOS() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 60,
        });
    }, []);
}
