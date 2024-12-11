'use client';

import Link, { LinkProps} from "next/link";
import React, { ReactNode} from "react";

interface LocalizedLinkProps extends Omit<LinkProps, "href"> {
    href: string;
    locale?: string;
    className?: string;
    children?: ReactNode;
}

const LocalizedLink: React.FC<LocalizedLinkProps> = ({
    href,
    locale,
    className,
    children,
    ...props
})=> {
    let localeHref = href;

    if(locale) {
        localeHref = `/${locale}${href.startsWith("/") ? href : `/${href}`}`;
    }

    return (
        <Link 
            href={localeHref}
            {...props}
            className={className}>
            {children}
            </Link>
    )

}

export default LocalizedLink;