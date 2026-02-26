import { ReactNode } from "react";


export type LayoutProps = {
    children: ReactNode;
    language: string | undefined;
    title?: string;
    description?: string;
};