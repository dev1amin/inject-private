import { useEffect, useState } from "react"
import React from "react"

const PixIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <g clipPath="url(#clip0_137_4)">
                <path d="M9.68251 9.51443C9.46306 9.51492 9.24568 9.47194 9.04292 9.38799C8.84015 9.30404 8.65602 9.18078 8.50114 9.02531L6.79489 7.31906C6.73449 7.26168 6.65435 7.22968 6.57104 7.22968C6.48773 7.22968 6.4076 7.26168 6.3472 7.31906L4.63445 9.03181C4.47962 9.18735 4.2955 9.31066 4.09272 9.39462C3.88995 9.47857 3.67254 9.52151 3.45307 9.52093H3.1167L5.27795 11.6822C5.95232 12.3566 7.04676 12.3566 7.72114 11.6822L9.88807 9.51443H9.68251ZM3.45307 3.47918C3.89995 3.47918 4.3192 3.65306 4.63445 3.96831L6.3472 5.68106C6.37663 5.71054 6.41159 5.73392 6.45007 5.74988C6.48854 5.76584 6.52979 5.77405 6.57145 5.77405C6.61311 5.77405 6.65435 5.76584 6.69283 5.74988C6.73131 5.73392 6.76627 5.71054 6.7957 5.68106L8.50195 3.97481C8.65668 3.81936 8.84067 3.6961 9.0433 3.61215C9.24593 3.5282 9.46318 3.48521 9.68251 3.48568H9.88807L7.72114 1.31874C7.39707 0.994902 6.95768 0.812988 6.49954 0.812988C6.0414 0.812988 5.60201 0.994902 5.27795 1.31874L3.1167 3.47999L3.45307 3.47918Z" fill="#00FFDC" />
                <path d="M11.6814 5.27808L10.3716 3.96833C10.3422 3.98041 10.3108 3.98675 10.279 3.98702H9.68346C9.37552 3.98702 9.07408 4.11215 8.85714 4.3299L7.15089 6.03615C7.07501 6.11242 6.98481 6.17295 6.88546 6.21426C6.78611 6.25556 6.67958 6.27683 6.57199 6.27683C6.4644 6.27683 6.35786 6.25556 6.25852 6.21426C6.15917 6.17295 6.06896 6.11242 5.99308 6.03615L4.28033 4.32258C4.06059 4.10375 3.76333 3.98052 3.45321 3.97971H2.72196C2.69164 3.97947 2.66163 3.97369 2.63339 3.96265L1.31877 5.27808C0.644395 5.95246 0.644395 7.0469 1.31877 7.72208L2.63339 9.03671C2.66132 9.02547 2.69105 9.01941 2.72114 9.01883H3.45321C3.76196 9.01883 4.06258 8.89452 4.28033 8.67677L5.99227 6.96321C6.14847 6.81448 6.3559 6.73153 6.57158 6.73153C6.78727 6.73153 6.99469 6.81448 7.15089 6.96321L8.85714 8.66946C9.07408 8.88721 9.37552 9.01152 9.68346 9.01152H10.279C10.3115 9.01152 10.3432 9.01965 10.3716 9.03102L11.6814 7.72127C12.3558 7.0469 12.3558 5.95246 11.6814 5.27808Z" fill="#00FFDC" />
            </g>
            <defs>
                <clipPath id="clip0_137_4">
                    <rect width="15" height="15" fill="white" />
                </clipPath>
            </defs>
        </svg>)
}

const GiftIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 81 81" fill="none">
            <path d="M68.3438 22.7813H57.2442C57.3676 22.6769 57.4942 22.5756 57.6144 22.4649C58.5754 21.6111 59.3498 20.5683 59.8894 19.4016C60.4289 18.2349 60.7219 16.9694 60.75 15.6843C60.7916 14.2784 60.5453 12.8789 60.0265 11.5716C59.5076 10.2643 58.727 9.07688 57.7326 8.08219C56.7382 7.08751 55.551 6.30656 54.2439 5.78728C52.9368 5.26801 51.5373 5.02138 50.1314 5.06252C48.8458 5.09021 47.5797 5.38299 46.4124 5.92254C45.2451 6.46208 44.2018 7.23677 43.3477 8.19811C42.1658 9.56781 41.205 11.1136 40.5 12.7797C39.795 11.1136 38.8342 9.56781 37.6523 8.19811C36.7982 7.23677 35.7549 6.46208 34.5876 5.92254C33.4203 5.38299 32.1542 5.09021 30.8686 5.06252C29.4627 5.02138 28.0632 5.26801 26.7561 5.78728C25.449 6.30656 24.2618 7.08751 23.2674 8.08219C22.273 9.07688 21.4924 10.2643 20.9735 11.5716C20.4547 12.8789 20.2084 14.2784 20.25 15.6843C20.2781 16.9694 20.5711 18.2349 21.1106 19.4016C21.6502 20.5683 22.4246 21.6111 23.3856 22.4649C23.5058 22.5693 23.6324 22.6705 23.7558 22.7813H12.6562C11.3136 22.7813 10.0259 23.3146 9.07652 24.264C8.12712 25.2134 7.59375 26.5011 7.59375 27.8438V37.9688C7.59375 39.3114 8.12712 40.5991 9.07652 41.5485C10.0259 42.4979 11.3136 43.0313 12.6562 43.0313V63.2813C12.6563 64.6239 13.1896 65.9116 14.139 66.861C15.0884 67.8104 16.3761 68.3438 17.7188 68.3438H36.7031C37.0388 68.3438 37.3607 68.2104 37.5981 67.9731C37.8354 67.7357 37.9688 67.4138 37.9688 67.0781V37.9688H12.6562V27.8438H37.9688V37.9688H43.0312V27.8438H68.3438V37.9688H43.0312V67.0781C43.0312 67.4138 43.1646 67.7357 43.4019 67.9731C43.6393 68.2104 43.9612 68.3438 44.2969 68.3438H63.2812C64.6239 68.3438 65.9116 67.8104 66.861 66.861C67.8104 65.9116 68.3438 64.6239 68.3438 63.2813V43.0313C69.6864 43.0313 70.9741 42.4979 71.9235 41.5485C72.8729 40.5991 73.4062 39.3114 73.4062 37.9688V27.8438C73.4062 26.5011 72.8729 25.2134 71.9235 24.264C70.9741 23.3146 69.6864 22.7813 68.3438 22.7813ZM26.7395 18.668C26.2969 18.2672 25.942 17.7792 25.6969 17.2348C25.4519 16.6903 25.3221 16.101 25.3157 15.5039C25.2997 14.8044 25.4234 14.1086 25.6797 13.4575C25.9361 12.8064 26.3197 12.213 26.8083 11.712C27.2969 11.2111 27.8805 10.8127 28.525 10.5402C29.1695 10.2677 29.8619 10.1265 30.5617 10.125H30.7167C31.3138 10.1315 31.903 10.2613 32.4475 10.5063C32.992 10.7513 33.48 11.1063 33.8808 11.5489C36.5354 14.5484 37.472 19.5223 37.8011 22.5978C34.7129 22.2719 29.7422 21.3353 26.7395 18.668ZM54.2668 18.668C51.2641 21.3258 46.2807 22.2624 43.1926 22.5914C43.5691 19.266 44.6133 14.3965 47.1445 11.552C47.5453 11.1094 48.0333 10.7545 48.5778 10.5095C49.1223 10.2644 49.7115 10.1346 50.3086 10.1282H50.4636C51.1634 10.1326 51.8553 10.2766 52.4987 10.5518C53.1421 10.827 53.7242 11.2278 54.2107 11.7308C54.6972 12.2339 55.0784 12.8289 55.332 13.4812C55.5856 14.1334 55.7065 14.8297 55.6875 15.5292C55.6772 16.1222 55.5452 16.7068 55.2998 17.2467C55.0543 17.7866 54.7006 18.2704 54.2605 18.668H54.2668Z" fill="#EFBC01" />
        </svg>)
}
export const NotiBadge = React.memo(({ type = "gift", name = "Gilmar", value = "1.230", game = "Fortune Ox", ...otherProps }) => {
    const [run, setRun] = useState(false);

    const color = (type) => {
        return type === "gift" ? "yellow" : "blue";
    };

    // Initialize bcCurrent with the first item or a default object
    const defaultBcCurrent = otherProps.items && otherProps.items.length > 0 ? otherProps.items[0] : { type: "default", name: "Default", value: "0", game: "Default Game" };
    const [bcCurrent, setBcCurrent] = useState(defaultBcCurrent);

    // Initialize currentColor based on the bcCurrent's type
    const [currentColor, setCurrentColor] = useState(color(bcCurrent.type));

    useEffect(() => {
        if (otherProps.items && otherProps.index !== undefined && otherProps.items[otherProps.index]) {
            const newItem = otherProps.items[otherProps.index];
            setBcCurrent(newItem);
            setCurrentColor(color(newItem.type));
        }
    }, [otherProps]);

    useEffect(() => {
        const timer = setTimeout(() => setRun(true), 20000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={run ? `nRun notiBadge n-${currentColor}-stroke` : `notiBadge n-${currentColor}-stroke`}>
            {bcCurrent.type === "gift" ? <GiftIcon /> : <PixIcon />}
            <h1>
                {bcCurrent.name} <span className="n-regular">ganhou </span> 
                <span className={`n-${currentColor}`}>R${bcCurrent.type === "gift" ? Math.floor(bcCurrent.value * 20) : Math.floor(bcCurrent.value)} </span> 
                <span className="n-regular">{bcCurrent.type === "gift" ? "no" : "de"} </span> 
                <span className={`n-${currentColor}`}> {bcCurrent.type === "gift" ? "Sorteio" : `${game}`}</span>
            </h1>
        </div>
    );
});
