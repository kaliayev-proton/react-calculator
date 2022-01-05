import { useEffect } from "react";

interface useKeyboardProps {
    keys: Array<string>;
    cb: (key: string) => void;
}

const triggerCallback = ({keys, cb}: useKeyboardProps) => (event: KeyboardEvent) => {
    let code: string = '-1';

    if (event.key !== undefined) {
        code = event.key;
    }
    if (keys.indexOf(code) !== -1) {
        cb(code)
    }
};

export const useKeyboard = (props: useKeyboardProps) => {
    useEffect(() => {
        if (!document) {
            return;
        }

        document.body.addEventListener('keydown', triggerCallback(props), true)

        return () => {
            document.body.removeEventListener('keydown', triggerCallback(props), true); 
        }
    }, [])
}