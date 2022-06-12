import { createContext, useContext, useRef } from 'react';

interface UIRefsContext {
    aboutMeRef: React.RefObject<HTMLDivElement> | null;
    projectsRef: React.RefObject<HTMLDivElement> | null;
    contactRef: React.RefObject<HTMLDivElement> | null;
}

const UIRefsContext = createContext<UIRefsContext>({
    aboutMeRef: null,
    projectsRef: null,
    contactRef: null,
});

export const UIRefsProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
    const aboutMeRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    return <UIRefsContext.Provider value={{ aboutMeRef, projectsRef, contactRef }}>{children}</UIRefsContext.Provider>;
};

export const useUIRefs = (): UIRefsContext => useContext(UIRefsContext) as UIRefsContext;
