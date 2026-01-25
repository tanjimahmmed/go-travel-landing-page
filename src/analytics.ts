import reactGA4 from 'react-ga4';

export function initGoogleAnalytics() {
    reactGA4.initialize(import.meta.env.VITE_MEASUREMENT_ID);
}

export function logPageView(){
    reactGA4.event("page_view", {
        page_location: window.location.href,
        page_title: document.title,
        page_path: window.location.pathname + window.location.search
    })
}

interface CustomEventProps {
    eventName: string;
    category: string;
    action: string;
    customProps?: Record<string, string>;
}

export function logCustomEvent(props: CustomEventProps) {
    reactGA4.event(props.eventName, {
        category: props.category,
        action: props.action,
        ...props?.customProps
    })
}