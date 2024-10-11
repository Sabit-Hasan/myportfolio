import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { AnimatedBackground } from 'animated-backgrounds';

export default function Main() {
    return (
        <>
            <AnimatedBackground animationName={"starryNight"} style={{ opacity: 0.5 }} />
            <Header />
            <Outlet />
        </>
    );
}