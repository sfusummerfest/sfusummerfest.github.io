import Link from "next/link";
import { FC } from "react";

export enum SocMedBrand {
    Discord = "discord",
    Facebook = "facebook",
    Instagram = "instagram",
    Twitch = "twitch",
    Twitter = "twitter",
    YouTube = "youtube",
}

export type SocMedEntry = {
    href: string
    body: JSX.Element
}

export const SocMedEntryMap: { [key in SocMedBrand]: SocMedEntry } = {
    "discord": {
        href: "https://www.discord.gg/sfuanime",
        body:
            <span className="bg-brand-discord p-3 rounded-md">
                <i className="fa-brands fa-discord"></i>
            </span>
    },
    "facebook": {
        href: "https://www.facebook.com/sfusummerfest",
        body:
            <span className="bg-brand-facebook p-3 rounded-md">
                <i className="fa-brands fa-facebook"></i>
            </span>
    },
    "instagram": {
        href: "https://www.instagram.com/sfusummerfest",
        body:
            <span className="bg-brand-instagram p-3 rounded-md">
                <i className="fa-brands fa-instagram"></i>
            </span>
    },
    "twitch": {
        href: "https://www.twitch.tv/sfusummerfest",
        body:
            <span className="bg-brand-twitch p-3 rounded-md">
                <i className="fa-brands fa-twitch"></i>
            </span>
    },
    "twitter": {
        href: "https://www.twitter.com/SFUSummerFest",
        body:
            <span className="bg-brand-twitter p-3 rounded-md">
                <i className="fa-brands fa-twitter"></i>
            </span>
    },
    "youtube": {
        href: "https://www.youtube.com/channel/UCioH5wqn7VSG0valSMrD5VA",
        body:
            <span className="bg-brand-youtube p-3 rounded-md">
                <i className="fa-brands fa-youtube"></i>
            </span>
    },
}

export type SocMedBarProps = {
    brands: Array<SocMedBrand>
}

export const SocMedBar: FC<SocMedBarProps> = ({ brands }) =>
    <>
        {brands.map((brand, index) => {
            const { href, body } = SocMedEntryMap[brand]
            return <Link href={href} key={`${brand}-${index}`}>{body}</Link>
        })}
    </>

export const DefaultSocMedBar: FC = () =>
    <SocMedBar brands={[
        SocMedBrand.Facebook,
        SocMedBrand.Twitter,
        SocMedBrand.Instagram,
        SocMedBrand.Twitch,
        SocMedBrand.YouTube,
        SocMedBrand.Discord,
    ]}></SocMedBar>

export default DefaultSocMedBar
